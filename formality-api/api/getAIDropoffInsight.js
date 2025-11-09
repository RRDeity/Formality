export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const formId = url.searchParams.get("formId");

  return res.status(200).json({
    formId,
    tip: "Users frequently abandon the form at the 'Company Name' field. Consider making it optional or rephrasing it."
  });
}
