import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-0 bg-background/80 backdrop-blur-md shadow-md" : "py-0"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* ONE BOX CONTAINER */}
        <div className="flex items-center justify-between w-full px-4 py-7">
          {/* Logo */}
          <a
            className="text-3xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="text-glow text-foreground pl-2 text-3xl">Spark</span>{" "}
            <b>Portfolio</b>
          </a>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle inside box
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-purple-600 rounded-full hover:bg-orange-500 transition"
            >
              {darkMode ? (
                <Moon className="text-white" size={20} />
              ) : (
                <Sun className="text-white" size={20} />
              )}
            </button> */}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 ml-2"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Theme toggle also available in mobile menu
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-purple-600 rounded-full hover:bg-orange-500 transition"
            >
              {darkMode ? (
                <Moon className="text-white" size={24} />
              ) : (
                <Sun className="text-white" size={24} />
              )}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
