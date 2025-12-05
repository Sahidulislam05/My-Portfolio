import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-950 border-t border-white/5 text-center min-h-20">
      <p className="text-neutral-500 text-sm">
        Copyright © {new Date().getFullYear()} - All right reserved by Sahidul
        Islam
      </p>
    </footer>
  );
}
