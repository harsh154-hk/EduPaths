"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const path = usePathname();

  const nav = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
  ];

  const headerStyle: React.CSSProperties = {
    padding: "16px 24px",
    borderBottom: "1px solid #e5e5e5",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 700,
    color: "#333",
    letterSpacing: "-0.5px",
  };

  const navContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "15px",
    color: "#444",
    textDecoration: "none",
    padding: "6px 8px",
    transition: "all 0.2s ease",
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    fontWeight: "700",
    color: "#0070f3",
    borderBottom: "2px solid #0070f3",
  };

  const hoverStyle = {
    textDecoration: "underline",
  };

  return (
    <header style={headerStyle}>
      {/* LOGO */}
      <div style={logoStyle}>EduPaths</div>

      {/* NAV LINKS */}
      <nav style={navContainerStyle}>
        {nav.map((item) => {
          const isActive = path === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={isActive ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.textDecoration = "none";
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
