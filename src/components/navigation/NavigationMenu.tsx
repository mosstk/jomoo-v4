interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

const NavigationMenu = ({ items, className = "hidden md:flex items-center space-x-8" }: NavigationMenuProps) => {
  return (
    <nav className={className}>
      {items.map((item) => (
        <a 
          key={item.label}
          href={item.href} 
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationMenu;