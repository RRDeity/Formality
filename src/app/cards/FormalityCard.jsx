import React, { useState, useEffect } from "react";
import {
  hubspot,
  Card,
  Flex,
  Heading,
  Text,
  Divider,
  Select,
  Button,
  LoadingSpinner
} from "@hubspot/ui-extensions";

// ✅ Mount extension
hubspot.extend(() => <FormalityCard />);

// ✅ Vercel backend
const API_BASE = "https://formality-api.vercel.app/api";

// ✅ Clean section container with light grey background
function Section({ title, children }) {
  return (
    <Flex
      direction="column"
      gap="6px"
      style={{
        marginBottom: "18px",
        background: "#f5f8fa",       // ✅ HubSpot native light grey
        padding: "12px",
        borderRadius: "6px"
      }}
    >
      <Heading variant="micro">{title}</Heading>
      {children}
    </Flex>
  );
}

function FormalityCard() {
  const [forms, setForms] = useState([]);
  const [selectedFormId, setSelectedFormId] = useState(null);

  const [history, setHistory] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [aiTip, setAiTip] = useState(null);
  const [aiOpt, setAiOpt] = useState(null);

  const [loadingForms, setLoadingForms] = useState(true);
  const [loadingData, setLoadingData] = useState(false);

  // ✅ Load forms on mount
  useEffect(() => {
    async function loadForms() {
      try {
        const res = await hubspot.fetch(`${API_BASE}/getFormsList`);
        const data = await res.json();
        setForms(data.forms || []);
      } catch (err) {
        console.error("Error loading forms", err);
      } finally {
        setLoadingForms(false);
      }
    }

    loadForms();
  }, []);

  // ✅ Load analytics only when button pressed
  async function loadAnalytics() {
    if (!selectedFormId) return;
    setLoadingData(true);

    try {
      const [h, d, t, o] = await Promise.all([
        hubspot.fetch(`${API_BASE}/getFormHistory?formId=${selectedFormId}`).then(r => r.json()),
        hubspot.fetch(`${API_BASE}/getFieldDropoff?formId=${selectedFormId}`).then(r => r.json()),
        hubspot.fetch(`${API_BASE}/getAIDropoffInsight?formId=${selectedFormId}`).then(r => r.json()),
        hubspot.fetch(`${API_BASE}/getAIFormOptimization?formId=${selectedFormId}`).then(r => r.json())
      ]);

      setHistory(h);
      setDropoff(d);
      setAiTip(t);
      setAiOpt(o);
    } catch (err) {
      console.error("Error loading analytics", err);
    } finally {
      setLoadingData(false);
    }
  }

  return (
    <Card padding="medium">

      {/* ✅ Form Selector */}
      <Section title="Select Form">
        {loadingForms ? (
          <Flex justify="center">
            <LoadingSpinner size="small" />
          </Flex>
        ) : (
          <Select
            id="formSelector"
            name="formSelector"
            value={selectedFormId}
            onChange={setSelectedFormId}
            placeholder="Choose a form..."
            options={forms.map(f => ({ label: f.name, value: f.id }))}
          />
        )}
      </Section>

      <Divider style={{ margin: "12px 0" }} />

      {/* ✅ Load Button */}
      <Flex justify="flex-start" style={{ marginBottom: "12px" }}>
        <Button disabled={!selectedFormId || loadingForms} onClick={loadAnalytics}>
          {loadingData ? "Loading..." : "Load Form Analytics"}
        </Button>
      </Flex>

      <Divider style={{ margin: "12px 0" }} />

      {/* ✅ Submission History */}
      {history && (
        <>
          <Section title="Submission History">
            <Text>Total Submissions: {history.submissions?.length || 0}</Text>
          </Section>
          <Divider style={{ margin: "12px 0" }} />
        </>
      )}

      {/* ✅ Field-Level Drop-Off */}
      {dropoff?.fields && (
        <>
          <Section title="Field-Level Drop-Off">
            {dropoff.fields.map((f, i) => {
              const percent = f.abandonRate ? Math.round(f.abandonRate * 100) : 0;

              return (
                <Flex direction="row" gap="4px" key={i}>
                  <Text>•</Text>
                  <Text variant="bold">{f.label}</Text>
                  <Text>— {percent}%</Text>
                </Flex>
              );
            })}
          </Section>
          <Divider style={{ margin: "12px 0" }} />
        </>
      )}

      {/* ✅ AI Tip */}
      {aiTip && (
        <>
          <Section title="AI Tip">
            <Text>{aiTip.tip}</Text>
          </Section>
          <Divider style={{ margin: "12px 0" }} />
        </>
      )}

      {/* ✅ AI Optimization */}
      {aiOpt && (
        <Section title="AI Optimization">
          <Text>{aiOpt.suggestion}</Text>
        </Section>
      )}

    </Card>
  );
}

export default FormalityCard;
