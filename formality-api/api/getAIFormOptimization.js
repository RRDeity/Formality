export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const formId = url.searchParams.get("formId");

  return res.status(200).json({
    formId,
    suggestion: "Reduce the number of required fields and shorten the description text to improve conversion rate."
  });
}
