export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "tax",
    title: "Tax planning",
    headline: "A little foresight. A lot more peace of mind.",
    description:
      "Thoughtful, year-round planning that connects today’s decisions with tomorrow’s obligations.",
    items: [
      "Year-round planning conversations",
      "Business and individual tax coordination",
      "Estimated payment planning",
      "Filing readiness and organization",
    ],
  },
  {
    id: "books",
    title: "Bookkeeping",
    headline: "A clear picture, down to the last detail.",
    description:
      "Organized books and a reliable monthly close, so you always know where your business stands.",
    items: [
      "Transaction categorization and reconciliation",
      "Monthly financial statements",
      "Clean-up and catch-up support",
      "A consistent closing process",
    ],
  },
  {
    id: "payroll",
    title: "Payroll",
    headline: "Take care of your people. We’ll take care of the details.",
    description:
      "A considered approach to payroll, reporting, and the recurring details that need to be right.",
    items: [
      "Recurring payroll coordination",
      "Employee and contractor organization",
      "Payroll reporting support",
      "Clear onboarding processes",
    ],
  },
  {
    id: "advisory",
    title: "Business advisory",
    headline: "Your next chapter, thoughtfully planned.",
    description:
      "A thinking partner for cash flow, business decisions, and the questions behind the numbers.",
    items: [
      "Cash-flow planning",
      "Financial reporting conversations",
      "Business scenario planning",
      "Decision support as you grow",
    ],
  },
] as const;

export const processSteps = [
  {
    label: "The conversation",
    title: "Let’s start with you.",
    description:
      "Your business, your ambitions, and the things keeping you up at night. We start by understanding what matters.",
  },
  {
    label: "The plan",
    title: "A path that makes sense.",
    description:
      "Together, we shape the right support for where you are today and where you want to go next.",
  },
  {
    label: "The partnership",
    title: "Clarity, all year round.",
    description:
      "Regular conversations and proactive guidance keep your finances connected to the bigger picture.",
  },
] as const;

export const faqs = [
  {
    question: "Can I start with just one service?",
    answer:
      "Yes. Start with the support you need now. Your service plan can evolve as your business changes.",
  },
  {
    question: "What does the first conversation involve?",
    answer:
      "We talk about your business, your current setup, and what you would like to make easier. There is no need to have everything perfectly organized beforehand.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Scope comes first. The services, complexity, and frequency of support shape a tailored proposal, so expectations are clear before work begins.",
  },
  {
    question: "Can you work with my existing systems?",
    answer:
      "We begin by reviewing the tools and processes you already use, then agree on a practical approach together.",
  },
] as const;
