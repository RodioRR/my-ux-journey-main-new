import caseStudyCheckoutFlow from "@/assets/case-study-checkout-flow-new.jpeg";
import caseStudyShorterCheckout from "@/assets/case-study-shorter-checkout.png";
import caseStudyReport from "@/assets/case-study-user-report-map.png";
import userReportToc1 from "@/assets/User Report ToC1.jpg";
import userReportToc2 from "@/assets/User Report ToC2.jpg";
import caseStudyConversion from "@/assets/case-study-conversion.jpg";
import checkoutOld1 from "@/assets/checkout-old-1.png";
import checkoutOld2 from "@/assets/checkout-old-2.png";
import checkoutOld3 from "@/assets/checkout-old-3.png";
import checkoutNew1 from "@/assets/checkout-new-1.png";
import checkoutNew2 from "@/assets/checkout-new-2.png";
import checkoutNew3 from "@/assets/checkout-new-3.png";
import testGroupsTable from "@/assets/test-groups-table.png";
import hypothesisMetrics from "@/assets/hypothesis-metrics.png";
import sellerOld from "@/assets/seller-old.jpg";
import sellerNew from "@/assets/seller-new.png";
import challengerBankPhases from "@/assets/case-study-challenger-bank-phases.png";
import mobileOnboarding from "@/assets/Onboarding.jpg";
import mobileMethodology from "@/assets/case-study-mobile-methodology.png";
import mobileConclusions from "@/assets/case-study-mobile-conclusions.png";
import newCheckoutFlow from "@/assets/new-checkout-flow.jpg";
import oldCheckoutFlow from "@/assets/old-checkout-flow.jpg";
import sellerView from "@/assets/seller-view.jpg";

export interface CaseStudy {
  id: number;
  tags: string[];
  title: string;
  subtitle: string;
  impact: string;
  scopeOfOwnership: string;
  problem: {
    businessGoal: string;
    userPain: string;
    trigger: string;
  };
  collaboration: string[];
  researchGoals: string[];
  researchMethod: string;
  keyInsight: string;
  projectDecision: string;
  numbers: string;
  whatWorked: string;
  whatCouldBeDifferently: string;
  keyLearnings: string;
  image: string;
  imageAspect?: "landscape" | "portrait" | "square";
  detailImages?: {
    label: string;
    images: { src: string; alt: string }[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    tags: ["Cross-functional Team Leadership", "Conversion Optimization", "A/B Testing", "Workshop Facilitation", "Design Thinking", "Hypothesis Prioritization"],
    title: "Leading Conversion Optimisation Team",
    subtitle: "Established and led a conversion optimization practice as UX Lead Researcher, turning stakeholder ideas into a pipeline of research-driven experiments.",
    impact: "Delivered measurable KPI lifts (e.g., +2% baskets, +0.5% checkout conversion) across key journeys.",
    scopeOfOwnership: "As UX Lead Researcher, I designed and managed the practice: defined processes for idea generation, hypothesis framing, and prioritization; maintained the research backlog; oversaw study design and KPI alignment; synthesized insights into recommendations and decisions.",
    problem: {
      businessGoal: "Develop a repeatable, centralized process for hypothesis generation, prioritization, and testing so conversion initiatives rely on user research and data rather than intuition.",
      userPain: "Teams lacked a shared process to turn ideas into testable hypotheses, leading to scattered experiments and duplicated efforts.",
      trigger: "Leadership recognised that despite ad-hoc tests, the organisation lacked a clear workflow and dedicated conversion team.",
    },
    collaboration: ["UX Researchers", "Designers", "Product Managers", "Business", "Marketing", "Senior Leadership"],
    researchGoals: [
      "Create a cross-functional practice linking stakeholder input to user-centred research.",
      "Convert qualitative and quantitative data into prioritised, testable hypotheses.",
    ],
    researchMethod: "Implemented Design Thinking: ideation workshops, hypothesis mapping, KPI and test plan alignment, A/B and multivariate tests, supplemented by qualitative methods (e.g. interviews, usability checks).",
    keyInsight: "A structured, research-driven practice increased experiment volume and quality, with improvements in user journeys and business KPIs.",
    projectDecision: "Oversaw over 90 projects in 2 years, including: AI product page recommendations (+2% basket increase), Markov Chains tool for on-site behaviour mapping, Checkout upsell removal (+0.5 p.p. conversion lift), other tests validated status quo or refined strategies.",
    numbers: "Over 90 projects, wins (e.g. +2% baskets, +0.5% conversion) prevented misguided changes.",
    whatWorked: "A continuous feedback loop across research, product, and business enabled iterative improvements and data-informed decisions.",
    whatCouldBeDifferently: "Clarify ownership in select projects, prioritise fewer, higher-impact initiatives over volume.",
    keyLearnings: "Gained experience in Design Thinking workshop facilitation to align stakeholders and generate hypotheses. Developed cross-functional project coordination, managing backlogs and timelines. Learned to synthesise insights from multiple projects into strategic decisions.",
    image: caseStudyConversion,
    imageAspect: "landscape",
  },
  {
    id: 2,
    tags: ["Multivariate Testing", "Research Project Management", "Financial Reporting", "Cross-Functional Leadership", "Checkout Optimization"],
    title: "Order Fee Optimization",
    subtitle: "Led multivariate tests to refine checkout order fees, visuals, and flow.",
    impact: "Increased conversion rate by 1 percentage point, supporting revenue growth while preserving margins.",
    scopeOfOwnership: "As research project manager, I defined hypotheses, selected methodology and KPIs (e.g., conversion rate, revenue per order), conducted analysis, prepared financial reports, and delivered recommendations. Developed a multivariate testing system integrated with the database for real-time metric tracking.",
    problem: {
      businessGoal: "Maintain revenue while removing the upsell and improving pricing transparency at checkout.",
      userPain: "Users reported confusion and unexpected total changes at checkout due to unclear pricing.",
      trigger: "User feedback pointed to the upsell as a conversion barrier.",
    },
    collaboration: ["General Manager", "Legal", "Marketing", "PM", "BI", "IT"],
    researchGoals: [
      "Determine optimal order fee amounts by price bracket and product type to maintain revenue levels.",
      "Optimize visual presentation: fee position in user flow, checkout placement, and inclusion in total price.",
      "Evaluate Proprietary Payment Method with and without discounts for profitability.",
    ],
    researchMethod: "Ran 3 rounds of multivariate tests on global desktop, testing fee amounts by price bracket, checkout placement, and price display.",
    keyInsight: "Transparent pricing - with fees shown in totals - maintained KPIs and improved conversion by 1 p.p.",
    projectDecision: "Removed upsell; introduced tiered fees, shown in totals.",
    numbers: "Conversion rate increased by 1 p.p.",
    whatWorked: "Custom multivariate testing system enabled real-time tracking. Cross-team alignment supported implementation.",
    whatCouldBeDifferently: "Earlier stakeholder alignment and clearer task delegation (e.g. IT monitoring) could have shortened the timeline.",
    keyLearnings: "Gained experience in a combined PM - UX researcher role, handling technical and legal aspects. Reinforced the value of researcher-led project management for data-driven decisions.",
    image: caseStudyCheckoutFlow,
    imageAspect: "landscape",
    detailImages: [
      {
        label: "Screens",
        images: [
          { src: oldCheckoutFlow, alt: "Old checkout flow" },
          { src: newCheckoutFlow, alt: "New checkout flow" },
          { src: sellerView, alt: "Seller view old vs. new" },
        ],
      },
      {
        label: "Old Checkout Layout Flow",
        images: [
          { src: checkoutOld1, alt: "Old checkout flow step 1" },
          { src: checkoutOld2, alt: "Old checkout flow step 2" },
          { src: checkoutOld3, alt: "Old checkout flow step 3" },
        ],
      },
      {
        label: "New Checkout Layout Flow",
        images: [
          { src: checkoutNew1, alt: "New checkout flow step 1" },
          { src: checkoutNew2, alt: "New checkout flow step 2" },
          { src: checkoutNew3, alt: "New checkout flow step 3" },
        ],
      },
      {
        label: "Test Groups",
        images: [
          { src: testGroupsTable, alt: "Test groups table showing 7 groups with different order fee scenarios" },
        ],
      },
      {
        label: "Hypothesis & Metrics",
        images: [
          { src: hypothesisMetrics, alt: "9 null hypotheses covering revenue, conversion rate, and average order value" },
        ],
      },
      {
        label: "Seller Perspective Old Layout",
        images: [
          { src: sellerOld, alt: "Seller perspective old layout" },
        ],
      },
      {
        label: "Seller Perspective New Layout",
        images: [
          { src: sellerNew, alt: "Seller perspective new layout" },
        ],
      },
    ],
  },
  {
    id: 3,
    tags: ["Strategic User Insights", "User Surveys", "Data Analysis", "Strategic Reporting", "Segment Profiling", "Trend Analysis"],
    title: "Yearly User Report",
    subtitle: "Created and led an annual user research report, synthesizing global survey data with internal analytics to inform business strategy.",
    impact: "Identified 3 - 4 key segments and behavioral shifts, guiding management, marketing, and product decisions.",
    scopeOfOwnership: "As creator and lead, I managed the end-to-end process: defined research goals for sociodemographics, gaming behaviors, and purchase patterns I analyzed data for correlations, integrated with internal analytics and prior-year benchmarks and produced visual reports and actionable presentations.",
    problem: {
      businessGoal: "Ground strategic decisions in current customer profiles, not assumptions or outdated research.",
      userPain: "No unified, regularly updated view of users - leading to fragmented decisions.",
      trigger: "Not tracking user changes over time meant missing opportunities.",
    },
    collaboration: ["Management", "Business", "Marketing", "Data Analysts"],
    researchGoals: [
      "Profile core users (sociodemographics, motivations, gaming habits).",
      "Track changes across segments over time.",
      "Validate findings against internal analytics.",
    ],
    researchMethod: "Recurring global surveys; quantitative analysis combined with behavioral metrics; trend comparisons with prior years.",
    keyInsight: "The report revealed shifts in profiles, preferences, and behaviour - exposing unnoticed segments and contradictions between assumed and actual behaviour.",
    projectDecision: "Management adopted for targeting, marketing refined offers, product adjusted messaging and priorities based on trends.",
    numbers: "Globally representative sample, defined 3 - 4 segments, surfaced significant shifts.",
    whatWorked: "Repeatable yearly rhythm closed the gap between one-off analytics and long-term strategic understanding.",
    whatCouldBeDifferently: "Integrate earlier into planning cycles, add workshops for broader adoption.",
    keyLearnings: "Combined surveys with analytics for insights beyond individual methods. Repeatable reports build organisational memory and reinforce user-centred decisions.",
    image: caseStudyReport,
    imageAspect: "landscape",
    detailImages: [
      {
        label: "Screens",
        images: [
          { src: userReportToc1, alt: "Report table of contents  -  part 1" },
          { src: userReportToc2, alt: "Report table of contents  -  part 2" },
        ],
      },
    ],
  },
  {
    id: 4,
    tags: ["Funnel Optimization", "A/B Test", "Checkout Optimization"],
    title: "Shorter Checkout",
    subtitle: "Directed end-to-end A/B test as sole UX Researcher to eliminate a redundant checkout step, reducing drop-off.",
    impact: "Increased cart conversion rate by 5 percentage points, enhancing purchase completion and revenue.",
    scopeOfOwnership: "Sole UX Researcher: defined goals and KPIs, configured and monitored the A/B test, analyzed data, delivered recommendations.",
    problem: {
      businessGoal: "Remove the unnecessary step; sustain or improve conversion and revenue.",
      userPain: "A redundant step repeated information, fostering confusion and abandonment near purchase completion.",
      trigger: "Analytics showed that extra steps duplicating data increased exit rates.",
    },
    collaboration: ["IT", "Business Intelligence"],
    researchGoals: [
      "Assess the effect of removing the redundant step on cart conversion and purchase completion.",
    ],
    researchMethod: "Controlled A/B test: old (two steps) flow vs new (one step) flow. Tracked KPIs via analytics dashboard.",
    keyInsight: "The additional step elevated drop-off rates and failed to retain users at journey end.",
    projectDecision: "Removed the redundant step; consolidated into a single checkout in the payment gateway.",
    numbers: "Increased cart conversion rate by 5 percentage points, directly improving purchase completion and revenue.",
    whatWorked: "Close KPI monitoring and stakeholder alignment enabled rapid decisions.",
    whatCouldBeDifferently: "Address technical debt earlier to accelerate implementation.",
    keyLearnings: "Success depended on upstream alignment with dev, business, and shared goals.",
    image: caseStudyShorterCheckout,
    imageAspect: "portrait",
  },
  {
    id: 5,
    tags: ["Discovery Research", "Competitive Analysis", "Stakeholder Alignment", "Product Strategy", "Cross-Functional Collaboration", "Fintech Innovation"],
    title: "First Steps of a New Challenger Bank",
    subtitle: "Led UX research discovery for a new challenger bank app targeting young users and small businesses, defining niche, USP, and business model.",
    impact: "Enabled progression to planning phase, culminating in the launch of ZEN.COM as a standalone venture.",
    scopeOfOwnership: "As UX Researcher in R&D, I led the discovery phase: desk research, competitive analysis, user interviews, surveys, and moderated usability tests. Delivered research summary with feature lists, wireframes, monetization strategies, niches, personas, and USPs.",
    problem: {
      businessGoal: "Launch competitive challenger bank for personal and business users in Europe.",
      userPain: "Young users and small business owners lacked seamless banking apps with intuitive experiences.",
      trigger: "Rapid emergence of challenger banks across Europe signaled market opportunity.",
    },
    collaboration: ["CEO", "Product Owner", "UX Designer", "Market Researcher", "Business Analyst"],
    researchGoals: [
      "Identify niche and unique selling propositions (USPs) for differentiation.",
      "Validate early business model and monetization paths.",
    ],
    researchMethod: "Desk research, competitive benchmarking, user interviews and surveys with target segments.",
    keyInsight: "Two viable niches (young users and SME) emerged with tailored USPs, feature priorities, wireframes, and monetization models.",
    projectDecision: "Advanced to planning phase, initiative spun out as ZEN.COM.",
    numbers: "Discovery research propelled project from ideation to structured planning and commercialization.",
    whatWorked: "Fast-paced, in-person cross-functional collaboration accelerated insights and alignment.",
    whatCouldBeDifferently: "Clearer role definitions and aligned visions upfront.",
    keyLearnings: "Bridged UX research with strategic product decisions in fintech. Led high-uncertainty discovery from ideation to commercialization.",
    image: challengerBankPhases,
    imageAspect: "landscape",
  },
  {
    id: 6,
    tags: ["Quick and Dirty", "Moderated Usability Test", "Mobile", "Risk Mitigation", "Last-Minute Validation", "Qualitative Insights"],
    title: "Mobile App Purchase Flow",
    subtitle: "Led rapid moderated usability tests to validate redesigned purchase flow and onboarding, preventing a flawed launch.",
    impact: "Blocked confusing onboarding rollout, averting potential 20-30% drop in new user retention and trust erosion (based on industry benchmarks).",
    scopeOfOwnership: "Designed and ran moderated usability tests under tight constraints, analyzed findings, recommended blocks, advocated for follow-up on pricing flow.",
    problem: {
      businessGoal: "Introduce onboarding, test redesigned purchase flow (search, filters, offers) ahead of launch.",
      userPain: "New users faced confusion in first impressions, search, filters, and pricing - fostering distrust.",
      trigger: "User feedback prompted redesign; research brought in pre-release for validation.",
    },
    collaboration: ["Product Owner (Mobile App)", "UX Designer", "IT team"],
    researchGoals: [
      "Validate new user onboarding for clarity and trust.",
      "Probe redesigned purchase flow pain points: search findability, filters, and product page offers.",
    ],
    researchMethod: "Moderated usability tests with 5 target users (quick recruitment via network).",
    keyInsight: "Onboarding induced confusion and distrust, purchase flow obscured pricing transparency via unexpected changes.",
    projectDecision: "Scrapped onboarding from release, deferred pricing flow redesign for deeper research.",
    numbers: "Testing with 5 users surfaced critical issues (per Nielsen's 5-user rule), saving weeks of post-launch fixes.",
    whatWorked: "Agile, 'quick & dirty' approach delivered actionable insights under tight constraints.",
    whatCouldBeDifferently: "Embed UX research from project kickoff, not end-stage.",
    keyLearnings: "Agile adaptation trumps perfection in fast-paced environments. Quick validation under constraints delivered actionable insights and prevented a flawed launch.",
    image: mobileOnboarding,
    imageAspect: "landscape",
    detailImages: [
      {
        label: "Screens",
        images: [
          { src: mobileMethodology, alt: "Methodology details for moderated usability test" },
          { src: mobileConclusions, alt: "Onboarding conclusions and recommendations" },
        ],
      },
    ],
  },
];
