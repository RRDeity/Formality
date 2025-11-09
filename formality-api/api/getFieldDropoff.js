export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const formId = url.searchParams.get("formId");

  return res.status(200).json({
    formId,
    fields: [
      {
        name: "firstname",
        label: "First Name",
        abandonRate: 0.05,
        avgTimeMs: 8000
      },
      {
        name: "email",
        label: "Email",
        abandonRate: 0.15,
        avgTimeMs: 12000
      },
      {
        name: "company",
        label: "Company Name",
        abandonRate: 0.25,
        avgTimeMs: 16000
      }
    ]
  });
}
