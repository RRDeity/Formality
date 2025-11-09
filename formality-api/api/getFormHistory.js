export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const formId = url.searchParams.get("formId");

  return res.status(200).json({
    formId,
    submissions: [
      {
        submittedAt: "2025-01-10",
        durationMs: 32000,
        fields: [{}, {}, {}]
      },
      {
        submittedAt: "2025-01-11",
        durationMs: 45000,
        fields: [{}, {}, {}, {}]
      },
      {
        submittedAt: "2025-01-12",
        durationMs: 28000,
        fields: [{}, {}]
      }
    ]
  });
}
