"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoFSL from "@/public/img/fsl-logo.png";
import { Button } from "@heroui/react";
import { X } from "lucide-react";
import { LanguageSelector } from "../ui/LanguageSelector";
import { Icon } from "@iconify/react";

interface Props {
  starterWhite?: boolean;
}

export function Navbar({ starterWhite: manualStarterWhite }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const starterWhite = manualStarterWhite ?? isHome;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "A propos", href: "/a-propos" },
    { name: "Nos Projets", href: "/nos-projets" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out w-full ${
          isScrolled && "border-b border-black/10 bg-background"
        }`}
      >
        <nav
          className={`
            flex items-center justify-between px-6 py-3 
            transition-all duration-500 ease-in-out w-full max-w-7xl rounded-none`}
        >
          <div
            className={`flex items-center transition-all duration-500 ease-in-out ${
              isScrolled ? "gap-8" : "gap-16"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <div
                className={`relative transition-all duration-500 ease-in-out ${
                  isScrolled ? "h-[45px]" : "h-[60px]"
                }`}
              >
                <Image
                  src={logoFSL}
                  alt="Logo FSL"
                  className="h-full w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${isScrolled ? "text-slate-600 hover:text-slate-900 transition-colors" : starterWhite ? "text-white/65 hover:text-white transition-colors" : "text-slate-600 hover:text-slate-900 transition-colors"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Link
              href="/faire-un-don"
              className="bg-primary cursor-pointer rounded-full px-4 py-[6px] text-white transition-all duration-250 hover:opacity-90"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSelector />
            <Button
              isIconOnly
              variant="outline"
              onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-background"
            >
              {isMobileMenuOpen ? (
                <X />
              ) : (
                <Icon icon="solar:hamburger-menu-outline" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-background/50 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-out-fluid
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}

        <Link href="/faire-un-don">
          <Button className={"bg-primary"} size="lg">
            Faire un don
          </Button>
        </Link>
      </div>
    </>
  );
}
