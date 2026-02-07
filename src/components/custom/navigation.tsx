import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-40 -translate-x-1/2 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
      <div className="flex items-center gap-6 text-sm">
        <a className="transition hover:text-white" href="#about">
          About
        </a>
        <a className="transition hover:text-white" href="#projects">
          Projects
        </a>
        <a className="transition hover:text-white" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
