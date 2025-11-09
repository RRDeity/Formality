<div align="center">

<!-- ✅ Mint Green Modern SaaS Banner -->
<img width="100%" src="https://svg-banners.vercel.app/api?type=glitch&text1=Formality&width=1000&height=260&fontSize=110&color1=8EF6E4&color2=31C6D4" />

<br/>

# **Formality**
### *AI-Powered HubSpot Form Analytics*
</div>

---

## **Overview**

**Formality** is a cloud-powered HubSpot extension delivering simplified form analytics, AI-generated insights, and drop-off analysis directly inside CRM records.  

This project demonstrates how to build a **modern HubSpot UI Extension** using:

✅ HubSpot Developer CLI (v7.9.0)  
✅ HubSpot UI Extensions  
✅ Vercel Serverless Functions  
✅ CSP-compliant external API access  
✅ React JSX CRM Cards  
✅ Scalable backend architecture  

Originally built to replace HubSpot’s now-deprecated serverless functions, Formality is structured for long-term maintainability and real AI-driven enhancements.

https://developers.hubspot.com/blog/navigating-serverless-functions-on-hubspots-new-developer-platform

---

## ✅ **Features**

### ✅ Form List Retrieval  
Populates available forms from Vercel API.

### ✅ Submission History  
Displays submission timestamps, field count, and time-to-complete.

### ✅ Field Drop-Off Analytics  
Shows abandonment rate and average time per field.

### ✅ AI Suggestions  
Two endpoints:  
- AI Tip  
- AI Optimization Recommendation  

Developer-friendly JSON format.

---

# 🛣️ **Roadmap**

### ✅ **Phase 1 — Foundation (Completed)**
- Build HubSpot CRM card  
- Connect external Vercel backend  
- Resolve CSP + fetch restrictions  
- Implement mock analytics endpoints  
- Establish UI patterns and UX structure  

---

### 🚀 **Phase 2 — UI Enhancements**
- Add visual graphs (bar, line, donut charts)  
- Add “Top Drop-Off Fields” quick view  
- Add dark mode + mint green theme support  
- Improve user onboarding with tooltips  
- Add skeleton loaders + shimmer effects  

---

### 🤖 **Phase 3 — AI Intelligence Layer**
- Swap mock responses with real OpenAI GPT-5 JSON  
- Add contextual form rewrite recommendations  
- Add “Form Conversion Score” based on analytics  
- Provide automated A/B testing suggestions  
- Enable AI-generated labels & field descriptions  

---

### 🔄 **Phase 4 — Real-Time HubSpot Integrations**
- Sync analytics back into CRM records  
- Build event-driven system with HubSpot Webhooks  
- Real-time abandonment insights  
- Live form funnel monitoring  

---

### 🏢 **Phase 5 — Enterprise Platform Expansion**
- Multi-portal + multi-teams support  
- Workspace dashboards  
- Trend reports & historical comparisons  
- CSV + Excel export capabilities  
- Admin controls and API key management  

---

## 🎯 **Wins & Highlights**

### ✅ **1. Migration to Modern Architecture**
HubSpot’s Developer Platform removed serverless functions on the new framework. The project successfully:

- Migrated logic to **Vercel serverless functions**
- Rewrote client-side code to use `hubspot.fetch()` (CSP-approved)
- Added Vercel to `permittedUrls.fetch[]`
- Adopted a clean `/api` function directory pattern

### ✅ **2. Solved Real, Hard Engineering Problems**
Throughout development, multiple real-world challenges were solved:

#### **CSP Blocking Errors**
HubSpot’s CSP blocked direct fetch calls.
✅ Resolved using `hubspot.fetch` and permitted URLs.

#### **Vercel Function Routing Failures**
Multiple 404 and runtime errors required:
✅ Removing deprecated build syntax  
✅ Correct runtime configuration  
✅ Re-linking the project to Vercel  
✅ Cleaning `.vercel` cache & restarting deploys  

#### **Git Merge Conflicts**
Initial push rejected due to upstream README.  
✅ Fixed using stash → pull → pop workflow.

#### **UI Rendering Sandboxed Errors**
Remote renderer threw script-blocking errors.  
✅ Fixed by hosting all assets on trusted HTTPS domains.

### ✅ **3. Clean HubSpot UI Extension**
The CRM Sidebar card provides:

- Form list dropdown  
- Submission history  
- Field-level drop-off analytics  
- AI-generated optimization suggestions  
- Loading states, error states, and UX polish  

### ✅ **4. Prepared for True AI Integration**
Current AI endpoints provide structured “mock insights,” but are architected for plug-and-play with:

- OpenAI GPT-4.1 / GPT-4o  
- LangChain pipelines  
- RAG-based prompt engineering  

