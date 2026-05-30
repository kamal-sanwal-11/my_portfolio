// Single source of truth for all portfolio content.
// Edit this file to update any section — components are purely presentational.

export const personalInfo = {
  name: "Kamal Sanwal",
  title: "Senior Product Manager",
  eyebrow: "Senior Product Manager · Fintech · Payments · AI Platforms",
  headline: "I build 0→1 products that scale in regulated environments.",
  headlineEmphasis: "0→1 products",
  subline:
    "6+ years across digital investments, cross-border remittance, and POS payments — now building AI orchestration and Voice AI platforms. Compliant, customer-first, zero to millions of users.",
  email: "kmlsnwl@gmail.com",
  phone: "+91 7017581141",
  github: "https://github.com/kamal-sanwal-11",
  linkedin: "https://linkedin.com/in/kamalsanwal",
  location: "Gurugram, India",
}

export const heroMetrics = [
  { value: "500K+", label: "users (0→1)" },
  { value: "$60M", label: "monthly remittance" },
  { value: "100K+", label: "POS devices" },
  { value: "~40%", label: "Card TPV" },
  { value: "VoC 800 → <70", label: "support tickets" },
]

// ─── Selected Work ────────────────────────────────────────────────────────────

export interface WorkMetric {
  value: string
  label: string
}

export interface WorkItem {
  id: string
  company: string
  companyColor: string
  category: string
  title: string
  blurb: string
  metrics: WorkMetric[]
  detail: string
}

export const work: WorkItem[] = [
  {
    id: "bharatpe-pos",
    company: "BharatPe",
    companyColor: "#10707F",
    category: "Devices & Payments",
    title: "BharatPe One POS",
    blurb:
      "End-to-end product lifecycle for a POS platform enabling frictionless in-store payments across India — from market-fit analysis to scaled deployment and monetization.",
    metrics: [
      { value: "100K+", label: "devices deployed" },
      { value: "~40%", label: "Card TPV" },
      { value: "70%+", label: "active rate" },
    ],
    detail:
      "Led the full product lifecycle from market-fit analysis to scaled deployment and monetization — frictionless in-store payments across India. Layered in dormant-device usage charges and an auto-return lifecycle to lift asset utilization. Geo-compliance enforcement achieved >90% in 3 months, creating stronger anti-fraud foundations. Reduced logistics-related escalations from 32% to 12% and dual-device merchant usage from 85% to 7%.",
  },
  {
    id: "bharatpe-timelines",
    company: "BharatPe",
    companyColor: "#10707F",
    category: "Customer Experience",
    title: "Payment Timelines",
    blurb:
      "A transparency feature giving merchants real-time settlement visibility — collapsing support ticket volume and building merchant trust.",
    metrics: [
      { value: "VoC 800 → <70", label: "support tickets" },
      { value: "Real-time", label: "settlement visibility" },
    ],
    detail:
      "Conceptualized and shipped a transparency feature giving merchants real-time settlement visibility, collapsing support ticket volume from 800 to under 70. Recognized with the BharatPe Rockstar Award (Jan 2025) for customer impact.",
  },
  {
    id: "bharatpe-speaker",
    company: "BharatPe",
    companyColor: "#10707F",
    category: "Innovation",
    title: "Interoperable Speaker",
    blurb:
      "Industry-first feature that intercepts competitor UPI payments and announces them on the BharatPe Speaker — removing the need for multiple devices.",
    metrics: [
      { value: "Industry-first", label: "interoperability" },
      { value: "10%", label: "pilot adoption" },
    ],
    detail:
      "Administering an industry-first feature that intercepts competitor UPI payments and announces them on the BharatPe Speaker — removing the need for multiple devices at the merchant counter. On path to full rollout across the device fleet.",
  },
  {
    id: "indmoney-usstocks",
    company: "INDmoney",
    companyColor: "#111111",
    category: "WealthTech (0→1)",
    title: "US Stocks, built 0→1",
    blurb:
      "Built INDmoney's global investing stack — US Stocks + RBI-compliant remittance — from zero to 500K+ users and 34% market share.",
    metrics: [
      { value: "500K+", label: "users" },
      { value: "34%", label: "market share" },
      { value: "Multi-broker", label: "× multi-bank" },
    ],
    detail:
      "Built INDmoney's global investing stack — US Stocks + RBI-compliant remittance — from zero; integrated multi-broker APIs and onboarded SBM & Federal Bank for compliant KYC/AML fund flow. Introduced SIPs for US Stocks, premium subscription, platform fee, and Insta Funding for real-time dollar liquidity. Drove 15% lift in trades via Insta Funding and 20% SIP adoption across the investor base.",
  },
  {
    id: "indmoney-remittance",
    company: "INDmoney",
    companyColor: "#111111",
    category: "Payments & Remittance",
    title: "Cross-border Remittance Scale-up",
    blurb:
      "Scaled monthly remittance from under $1K to $60M, cut settlement from 5–7 days to instant, and introduced real-time funding rails.",
    metrics: [
      { value: "<$1K → $60M", label: "/ month" },
      { value: "5–7 days → instant", label: "settlement" },
      { value: "+15%", label: "trades (Insta Funding)" },
    ],
    detail:
      "Scaled monthly remittance volume from under $1K to $60M; cut settlement from 5–7 business days to instant via Insta Funding. Introduced UPI Collect & net-banking deposits, adding 20% funding flow efficiency. Captured 34% of India's outbound equity-investment remittance market. Recognized with the Remittance Rainmaker Award (2023).",
  },
  {
    id: "eclerx-funnel",
    company: "eClerx",
    companyColor: "#1E2A52",
    category: "Growth & CX",
    title: "Funnel Conversion Overhaul",
    blurb:
      "A/B testing, segmentation, and funnel redesigns for Fortune 500 e-commerce and media clients — nearly doubling conversion rates.",
    metrics: [
      { value: "7.2% → 13.6%", label: "conversion" },
      { value: "10K+ tickets/yr cut", label: "~$20K saved" },
      { value: "+4% conv / +7%", label: "cross-sell" },
    ],
    detail:
      "For Fortune 500 e-commerce and media clients, ran A/B testing, segmentation, and funnel redesigns; introduced self-help flows and Adobe-stack personalization. Reduced contact volume by 10K+/year (~$20K saved), enabled 4% uptick in conversions, and 7% upsurge in cross-selling via behavioral segmentation.",
  },
  {
    id: "xtelify-ai",
    company: "Xtelify (Airtel)",
    companyColor: "#E40000",
    category: "AI Platform",
    title: "AI Orchestration System",
    blurb:
      "A single control plane to operationalize production LLM apps — guardrails, observability, evaluation, FinOps, and real-time alerting.",
    metrics: [
      { value: "Guardrails · Observability", label: "reliability stack" },
      { value: "FinOps · Evaluation", label: "cost & quality" },
      { value: "Real-time alerting", label: "incident response" },
    ],
    detail:
      "Driving product for AI platform capabilities — conversational Voice AI and an end-to-end AI Orchestration System for running LLM applications reliably at scale. Centralizing guardrail frameworks, observability/evaluation tooling, FinOps controls, and real-time alerting in one control plane so teams can ship AI features with confidence. See Career Stints for full detail.",
  },
]

// ─── Career Stints ────────────────────────────────────────────────────────────

export interface CompanyTheme {
  primary: string
  secondary: string
  bg: string
  bgDark: string
}

export interface Experience {
  company: string
  role: string
  period: string
  summary: string
  bullets: string[]
  achievements: string[]
  award: string | null
  theme: CompanyTheme
}

export const experiences: Experience[] = [
  {
    company: "Xtelify Limited (Airtel)",
    role: "Senior Product Manager",
    period: "Jan 2026 – Present",
    summary:
      "Driving product for AI platform capabilities — conversational Voice AI and an end-to-end AI Orchestration System for running LLM applications reliably at scale.",
    bullets: [
      "Defining vision and roadmap for a Voice AI platform delivering natural, low-latency conversational experiences across customer touchpoints.",
      "Building an AI Orchestration System that unifies the operational stack for production LLM apps — guardrailing, observability, evaluation, FinOps, and alerting in one control plane.",
      "Establishing guardrail frameworks (safety, policy, and compliance enforcement) so AI outputs are reliable and audit-ready in regulated contexts.",
      "Designing observability and evaluation tooling — tracing, quality scoring, and regression detection — to give teams confidence in model behavior pre- and post-deployment.",
      "Driving FinOps for AI: token/cost attribution, budgeting, and routing to keep inference economics sustainable as usage scales.",
      "Standing up real-time alerting and incident workflows for latency, quality, and cost anomalies across the AI stack.",
    ],
    achievements: [
      "Reliability: reduced unsafe / non-compliant responses through centralized guardrailing.",
      "Cost: lowered inference cost per request via FinOps controls and routing.",
      "Velocity: shortened the eval-to-deploy cycle through automated evaluation.",
    ],
    award: null,
    theme: {
      primary: "#E40000",
      secondary: "#333333",
      bg: "rgba(228,0,0,0.06)",
      bgDark: "rgba(228,0,0,0.10)",
    },
  },
  {
    company: "BharatPe – Resilient Innovations Pvt. Ltd.",
    role: "Product Manager – Devices (POS and Speakers)",
    period: "Feb 2024 – Jan 2026",
    summary:
      "Handled payments and device business for BharatPe. Accountable for product conceptualization, solution design, writing specifications, improving UI/UX, charting roadmap, feature prioritization and planned execution.",
    bullets: [
      "Led end-to-end product lifecycle for BharatPe One POS, from market fit analysis to scaled deployment and monetization, enabling frictionless in-store payments across India.",
      "Conceptualized and launched Payment Timelines, a transparency-driven feature empowering merchants with settlement visibility and significantly reducing ticket volumes.",
      "Deployed compliance-led device onboarding enhancements through real-time geo-location capture, MCC-based restrictions, and integrations with internal Financial Risk Model.",
      "Introduced monetization stream through low usage charges on dormant devices, boosting reactivation and asset utilization.",
      "Implemented Logistics Waterfall models over forward and reverse device orders to reduce delivery/pick-up turnaround time.",
      "Developed Interoperable Speaker — an industry-first feature to intercept competitor's UPI-based payments and announce them on BharatPe Speaker.",
    ],
    achievements: [
      "Scaled BharatPe One POS to 100K+ devices accounting ~40% of Card TPV, maintained 70%+ active rate.",
      "Reduced Voice of Customer (VoC) from 800 to under 70 through Payment Timelines.",
      "Achieved >90% geo-compliance in 3 months, creating stronger anti-fraud foundations.",
      "Reduced logistics-related monthly escalations from 32% to 12%.",
      "Decreased dual-device merchant usage from 85% to 7%.",
    ],
    award: "BharatPe Rockstar Award (Jan 2025)",
    theme: {
      primary: "#10707F",
      secondary: "#E4606D",
      bg: "rgba(16,112,127,0.06)",
      bgDark: "rgba(16,112,127,0.10)",
    },
  },
  {
    company: "INDmoney – Finzoom Investments Advisors Ltd.",
    role: "Senior Product Manager – US Stocks Investments",
    period: "Aug 2021 – Feb 2024",
    summary:
      "Responsible for development and management of the US Stocks Investment product. OKRs entailed product conceptualization, optimizing user experience, partner management and driving growth.",
    bullets: [
      "Built INDmoney's global investing stack, including US Stock Investments and RBI-compliant remittance systems, from 0→1 into a 500K+ user product managing millions in monthly transaction value.",
      "Led end-to-end product strategy and regulatory integrations to build robust cross-border remittance infrastructure.",
      "Orchestrated integration of multi broker-based APIs, enabling end users to trade US stocks seamlessly within the platform.",
      "Introduced features like SIPs for US Stocks, premium subscription plan, platform fee alongside Insta Funding to enable real-time dollar liquidity.",
      "Onboarded SBM Bank and Federal Bank for enabling cross-border remittance, facilitating smoother KYC and fund flow.",
      "Led cross-functional collaboration with banks, brokers, and third-party vendors, ensuring smooth operations.",
    ],
    achievements: [
      "Grew monthly remittance volume from <$1K to $60M and active investor base to 500K+.",
      "Captured 34% of India's outbound equity investment-based remittance market.",
      "Cut remittance settlement time from 5–7 business days to instant.",
      "Introduced UPI Collect and net-banking deposits, leading to 20% rise in funding flow efficiency.",
      "Drove 15% lift in trades via Insta Funding and 20% SIP adoption across investor base.",
    ],
    award: "Remittance Rainmaker Award (2023)",
    theme: {
      primary: "#111111",
      secondary: "#666666",
      bg: "rgba(0,0,0,0.04)",
      bgDark: "rgba(255,255,255,0.05)",
    },
  },
  {
    company: "eClerx Services Pvt. Ltd.",
    role: "Business Process Manager – Digital Product Improvisation",
    period: "May 2019 – Aug 2021",
    summary:
      "Digital Consultant and Product Manager driving initiatives and optimizing offerings for exceptional client results.",
    bullets: [
      "Spearheaded a team of five and delivered conversion-optimized product enhancements and CX strategy for Fortune 500 clients in e-commerce and media sectors.",
      "Drove A/B testing, segmentation, and funnel redesigns to improve user engagement.",
      "Administered Digital Analytics, Product Ideation, Feature Prioritization, and Performance Analysis across Media & Entertainment and E-commerce domains.",
    ],
    achievements: [
      "Improved funnel conversion from 7.2% to 13.6% via UX improvements and iterative testing.",
      "Reduced contact volume by 10K+/year, saving ~$20K in support costs.",
      "Enabled 4% uptick in conversions and 7% upsurge in cross-selling via behavioral segmentation.",
    ],
    award: null,
    theme: {
      primary: "#1E2A52",
      secondary: "#64748B",
      bg: "rgba(30,42,82,0.06)",
      bgDark: "rgba(30,42,82,0.12)",
    },
  },
]

// ─── Approach ────────────────────────────────────────────────────────────────

export const approachPrinciples = [
  {
    number: "01",
    title: "Customer empathy over vanity metrics",
    body: "A support ticket is a broken promise. Real impact means fewer reasons to contact support — not prettier dashboards. (VoC 800 → <70.)",
  },
  {
    number: "02",
    title: "0→1 in regulated environments",
    body: "Compliance is a feature, not a blocker. RBI-compliant remittance, KYC/AML fund flows, >90% geo-compliance in 3 months — built in from day one.",
  },
  {
    number: "03",
    title: "Data-informed, not data-paralyzed",
    body: "A/B testing, funnel and cohort analysis guide decisions — not gut feel, not analysis paralysis. (7.2% → 13.6% conversion.)",
  },
  {
    number: "04",
    title: "Cross-functional execution",
    body: "Aligning banks, brokers, vendors, and eng/design/analytics to one shared 'why' is the product. Shipping is the proof.",
  },
  {
    number: "05",
    title: "AI-native operator",
    body: "Building AI as a core product surface (current role) and using it as a delivery multiplier — this site itself was built with Claude Code.",
  },
]

export const tools = [
  "Mixpanel",
  "Segment",
  "Redash",
  "Metabase",
  "Adobe Analytics",
  "Optimizely",
  "Postman",
  "JIRA",
  "Confluence",
  "Figma",
  "Draw.io",
  "Excalidraw",
  "Miro",
  "Looker",
  "Tableau",
  "Claude / Claude Code",
]

export const domainExpertise = [
  "WealthTech",
  "Digital Investments",
  "Remittances & Payments",
  "Regulatory Compliance",
  "Investor Experience Design",
  "Platform Monetization",
  "GTM Strategy",
  "API Ecosystem Strategy",
  "POS Lifecycle Management",
  "A/B Testing",
  "AI Orchestration / LLMOps",
]

// ─── Education ───────────────────────────────────────────────────────────────

export const education = [
  {
    degree: "Master of Business Administration (M.B.A.)",
    field: "Marketing · Analytics · Strategy",
    institution: "Indian Institute of Management Kashipur",
    period: "2017 – 2019",
  },
  {
    degree: "Bachelor of Technology (B.Tech.)",
    field: "Information Technology",
    institution: "College of Engineering Roorkee",
    period: "2013 – 2017",
  },
]

// ─── Contact & Footer ────────────────────────────────────────────────────────

export const contactLinks = [
  { label: "Email", href: "mailto:kmlsnwl@gmail.com", type: "email" },
  { label: "LinkedIn — message me", href: "https://linkedin.com/in/kamalsanwal", type: "linkedin" },
  { label: "Résumé — download PDF", href: "/resume.pdf", type: "resume", download: true },
  { label: "GitHub", href: "https://github.com/kamal-sanwal-11", type: "github" },
]
