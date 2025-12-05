import React from "react";
import Header from "./header";
import "../../app/globals.css"; // ensure we load global styles

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer style={{ marginTop: 40 }}>
        <hr />
        <p style={{ marginTop: 8 }}>© {new Date().getFullYear()} EduPaths — learn by doing</p>
      </footer>
    </div>
  );
}
