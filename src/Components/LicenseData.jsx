import { IconClipboardList, IconClock, IconCheck, IconX } from "@tabler/icons-react";

export const summaryData = [
  {
    title: "Total Requests",
    value: 8,
    icon: <IconClipboardList size={18} />,
    color: "blue"
  },
  {
    title: "Pending",
    value: 5,
    icon: <IconClock size={18} />,
    color: "yellow"
  },
  {
    title: "Approved",
    value: 2,
    icon: <IconCheck size={18} />,
    color: "green"
  },
  {
    title: "Rejected",
    value: 1,
    icon: <IconX size={18} />,
    color: "red"
  }
];

export const pendingRequests = [
  {
    id: 1,
    company: "BioNova Pharma Pvt Ltd",
    formula: "Herbal Anti-Inflammatory Compound",
    licenseType: "Commercial",
    duration: "1 Year",
    price: "₹2,50,000"
  },
  {
    id: 2,
    company: "MediCore Labs",
    formula: "Natural Immunity Booster",
    licenseType: "Non-Exclusive",
    duration: "3 Years",
    price: "₹4,00,000"
  }
];

export const activeLicenses = [
  {
    id: 101,
    company: "MediCore Labs",
    formula: "Natural Immunity Booster",
    licenseType: "Non-Exclusive",
    duration: "3 Years",
    royalty: "8%",
    startDate: "12 Jan 2026"
  },
  {
    id: 102,
    company: "BioNova Pharma Pvt Ltd",
    formula: "Herbal Anti-Inflammatory Compound",
    licenseType: "Commercial",
    duration: "1 Year",
    royalty: "10%",
    startDate: "03 Feb 2026"
  },
  {
    id: 103,
    company: "Zenith Therapeutics",
    formula: "Advanced Pain Relief Formula",
    licenseType: "Exclusive",
    duration: "2 Years",
    royalty: "12%",
    startDate: "28 Dec 2025"
  }
];