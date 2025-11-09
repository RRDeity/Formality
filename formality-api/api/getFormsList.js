export default function handler(req, res) {
  return res.status(200).json({
    forms: [
      { id: "form_001", name: "Contact Us" },
      { id: "form_002", name: "Newsletter Signup" },
      { id: "form_003", name: "Demo Request" }
    ]
  });
}
