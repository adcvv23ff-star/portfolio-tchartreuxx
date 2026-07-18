exports.handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body || "{}");

    // 1. Gửi câu hỏi sang Coze
    const createRes = await fetch("https://api.coze.com/v3/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COZE_PAT}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bot_id: "7663891197706878981",
        user_id: "portfolio-user",
        stream: false,
        auto_save_history: true,
        additional_messages: [
          {
            role: "user",
            content: message,
            content_type: "text"
          }
        ]
      })
    });

    const createData = await createRes.json();

    if (createData.code !== 0) {
      throw new Error(createData.msg || "Không thể tạo chat");
    }

    const conversationId = createData.data.conversation_id;
    const chatId = createData.data.id;

    // 2. Chờ Coze xử lý
    let status = createData.data.status;
    let retry = 0;

    while (status === "in_progress" && retry < 15) {
      await new Promise(r => setTimeout(r, 1500));

      const statusRes = await fetch(`https://api.coze.com/v3/chat/retrieve?conversation_id=${conversationId}&chat_id=${chatId}`, {
        headers: {
          Authorization: `Bearer ${process.env.COZE_PAT}`
        }
      });

      const statusData = await statusRes.json();

      if (statusData.code !== 0) {
        throw new Error(statusData.msg || "Không thể lấy trạng thái chat");
      }

      status = statusData.data.status;
      retry++;
    }

    if (status !== "completed") {
      throw new Error("Coze chưa trả lời xong");
    }

    // 3. Lấy tin nhắn cuối cùng
    const msgRes = await fetch(`https://api.coze.com/v3/chat/message/list?conversation_id=${conversationId}&chat_id=${chatId}`, {
      headers: {
        Authorization: `Bearer ${process.env.COZE_PAT}`
      }
    });

    const msgData = await msgRes.json();

    if (msgData.code !== 0) {
      throw new Error(msgData.msg || "Không thể lấy tin nhắn");
    }

    const answer = (msgData.data || []).find(m => m.type === "answer");

    return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    reply: answer ? answer.content : "Xin lỗi, em chưa có phản hồi."
  })
};

  } catch (err) {
    
  return {
  statusCode: 500,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    reply: "Lỗi chatbot: " + err.message
  })
};