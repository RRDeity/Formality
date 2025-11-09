// Static, interview-friendly demo data used when LIVE mode is not available.

export const SAMPLE_FORMS = [
  { id: "demo-landing-001", name: "Summer Campaign Landing Form" },
  { id: "demo-checkout-002", name: "Checkout (Step 1)" },
  { id: "demo-newsletter-003", name: "Newsletter Signup" }
];

export function sampleHistory(formId) {
  return {
    formId,
    submissions: [
      { submittedAt: "2025-10-28T14:12:00Z", fields: ["email", "firstname", "lastname"], durationMs: 34000 },
      { submittedAt: "2025-10-30T09:04:00Z", fields: ["email"], durationMs: 12000 }
    ]
  };
}

export function sampleDropoff(formId) {
  // Simple fake analytics for demo
  return {
    formId,
    fields: [
      { name: "email", label: "Email", abandonRate: 0.08, avgTimeMs: 7000 },
      { name: "firstname", label: "First name", abandonRate: 0.22, avgTimeMs: 11000 },
      { name: "lastname", label: "Last name", abandonRate: 0.18, avgTimeMs: 9000 },
      { name: "phone", label: "Phone", abandonRate: 0.37, avgTimeMs: 15000 }
    ]
  };
}

export function sampleTip(formId) {
  return {
    formId,
    tip: "Shorten the first name helper text and move Phone to an optional step. Add inline validation on blur."
  };
}

export function sampleOptimization(formId) {
  return {
    formId,
    suggestion: "Reorder your fields: email → first name → last name, pre-fill known values, and enable one-click email verification."
  };
}
