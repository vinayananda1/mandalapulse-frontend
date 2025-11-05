exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      title: "Demo Mandala Meeting",
      scheduledAt: new Date(Date.now() + 10 * 60000).toISOString(),
      organizer: "demo@mandala.local",
      notes: "Canned preview from Netlify Function."
    })
  };
};
