 import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

const navItems = [
  { name: "Wish someone", href: "/" },
  { name: "Screens", href: "/screen" },
  { name: "Creator", href: "https://portfolio-thel.onrender.com/" },

];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? `py-3 bg-backdrop-blur-md/80 ${
              !isMenuOpen ? "backdrop-blur-md" : ""
            } shadow-xs`
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Wish </span>Web
          </span>
        </a>
        {/*desktop navbar */}
        <div className="hidden md:flex space-x-8 md:pr-7">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-purple-500 text-glow1 hover:text-cyan-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/*mobile navbar */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="pr-7 md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X /> : <MenuIcon />}{" "}
        </button>

        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen z-40 bg-background/92 backdrop-blur-md",
            "flex flex-col items-center justify-center",
            "transition-opacity  duration-300 ease-in-out",
            "will-change-[transform,opacity]",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
