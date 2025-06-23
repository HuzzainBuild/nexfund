import {
  PresentationChartLineIcon,
  BoltIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  PresentationChartBarIcon,
  CurrencyDollarIcon,
  GlobeEuropeAfricaIcon,
  FireIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const Features = [
  {
    Icon: PresentationChartBarIcon,
    title: "Deep Web3 Network",
    text: "We are connected with 60+ ... capital, listings, and exposure.",
  },
  {
    Icon: InformationCircleIcon,
    title: "No Upfront Fees",
    text: "We believe in performance-driven partnerships...",
  },
  {
    Icon: BoltIcon,
    title: "Fast‑Track Fundraising",
    text: "We don’t waste time...",
  },
  {
    Icon: GlobeAltIcon,
    title: "Web3‑Native Expertise",
    text: "From tokenomics to exchange listings...",
  },
  {
    Icon: CheckBadgeIcon,
    title: "Trusted by Industry Leaders",
    text: "Startups, investors, and ecosystem partners trust us...",
  },
];

export const Launchpads = [
  "DAO Maker",
  "Polkastarter",
  "Seedify",
  "TrustSwap",
  "BSCPad",
  "Red Kite",
  "GameFi",
  "ChainGPT Pad",
  "BullPerks",
  "Enjinstarter",
  "kommunitas",
];

export const ProjectsList = [
  "Gameness",
  "Tagspace AI",
  "Brainedge",
  "Biptap",
  "CrossFi",
];

export const servicesData = [
  {
    title: "Fundraising Support",
    text: "We help Web3, crypto, and AI startups raise pre-seed to Series A rounds, ICO, IDO by connecting them directly with our growing network of 50+ active VCs, Launchpads, angels & individuals.",
    image: "/fundraising.png",
    sm: "/fundraising-sm.png",
    reverse: false,
  },
  {
    title: "OTC Investment Deals",
    text: "Get access to exclusive over-the-counter investment opportunities and strategic capital — outside traditional public rounds.",
    image: "/otc.png",
    sm: "/otc-sm.png",
    reverse: true,
  },
  {
    title: "Listing & Exchange Advisory",
    text: "We assist projects in preparing for centralized exchange (CEX) and decentralized exchange (DEX) listings with the right strategy, timing, and exchange partners.",
    image: "/listing.png",
    sm: "/listing-sm.png",
    reverse: false,
  },
  {
    title: "Market Making",
    text: "We work with top-tier market makers to provide liquidity support, improve token performance, and build healthy trading environments across CEX/DEX platforms.",
    image: "/market.png",
    sm: "/market-sm.png",
    reverse: true,
  },
  {
    title: "KOL & Influencer Marketing",
    text: "Boost your project visibility with curated Key Opinion Leader (KOL) campaigns. We activate crypto influencers and media channels for strategic, ROI-focused marketing.",
    image: "/kol.png",
    sm: "/kol-sm.png",
    reverse: false,
  },
  {
    title: "Legal & Compliance Services",
    text: "Get access to experienced legal partners for token structuring, investor documentation, KYC/AML compliance, and regulatory strategy.",
    image: "/clock.png",
    sm: "/clock-sm.png",
    reverse: true,
  },
];

export const generateMessage = ({
  fullname,
  telegram,
  websiteUrl,
  token,
  projectName,
  email,
}) => {
  const message = `Hello Dear,

I'm ${fullname}, and I'd like to submit the following project information:

- **Email:** ${email}
- **Telegram:** ${telegram}
- **Website URL:** ${websiteUrl}
- **Coin/Token Tracker:** ${token}
- **Project Name:** ${projectName}

Please let me know if you need any further information.

Best regards,  
${fullname}`;

  return message;
};

export const RatingList = [
  {
    title: "Seamless Integration",
    quote:
      "OpSec Ecosystem transformed our cloud operations. The efficiency and privacy features are unmatched!",
    name: "Alice Smith",
    role: "CTO of OpSec",
  },
  {
    title: "High-Speed Trading",
    quote:
      "PulsarLabs has revolutionized our trading strategy. The speed and reliability are game-changers!",
    name: "Michael Johnson",
    role: "Head Trader at PulsarLabs",
  },
  {
    title: "Innovative Solutions",
    quote:
      "AetherX has been a catalyst in our digital asset strategy. The utility-driven features are truly impressive!",
    name: "Sophia Lee",
    role: "Digital Asset Manager",
  },
  {
    title: "Efficient Development",
    quote:
      "Stats-Portfolio helped us create robust Web 3 applications effortlessly. The support team is fantastic!",
    name: "Daniel Wu",
    role: "Lead Developer at Stats-Portfolio",
  },
  {
    title: "Streamlined Workflows",
    quote:
      "TPU has optimized our workflows, saving us hours of manual work. The visual interface is intuitive and powerful!",
    name: "Emily Davis",
    role: "Operations Lead",
  },
];

export const AnalyticsData = [
  {
    Icon: PresentationChartBarIcon,
    value: 77,
    label: "Number of Projects",
  },
  {
    Icon: GlobeEuropeAfricaIcon,
    value: 33,
    label: "Number of Partners",
  },
  {
    Icon: CurrencyDollarIcon,
    value: "$196K",
    label: "Total funding raised",
  },
  {
    Icon: FireIcon,
    value: 786,
    label: "Total number of KOLs",
  },
];
