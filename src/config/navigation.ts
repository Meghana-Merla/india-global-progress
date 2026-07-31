export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const mainNav: NavItem[] = [
  { title: "Overview", href: "/" },
  { title: "Metrics", href: "/metrics" },
  { title: "Global Ranks", href: "/global-ranks" },
  { title: "Regional Map", href: "/map" },
];
