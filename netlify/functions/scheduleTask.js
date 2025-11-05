exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || "{}");
    const taskName = `MandalaPulse-${Date.now()}`;
    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        taskName,
        scheduledAt: payload.scheduledAt || null,
        note: "Demo stub. Implement privileged agent or WoL for real wake/schedule."
      })
    };
  } catch (err) {
    return { statusCode: 500, body: String(err.message) };
  }
};
