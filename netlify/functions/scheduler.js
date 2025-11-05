exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || "{}");
    const id = `MP-${Date.now()}`;
    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        id,
        scheduledAt: payload.scheduledAt || new Date().toISOString(),
        note: "Demo scheduler accepted. Replace with ExcelJS flow when moving to production."
      })
    };
  } catch (err) {
    return { statusCode: 500, body: String(err.message) };
  }
};
