export type NavigationLink = {
  label: string;
  href: string;
};

const navigationConfig: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default navigationConfig;
