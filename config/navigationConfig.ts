export type NavigationLink = {
  label: string;
  href: string;
};

const navigationConfig: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export default navigationConfig;
