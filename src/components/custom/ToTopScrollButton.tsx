"use client";
import { FiArrowUp } from "react-icons/fi";
import { Button } from "../ui/button";

const ToTopScrollButton = () => {
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Button
      type="button"
      onClick={handleScrollTop}
      aria-label="Scroll to top"
      className="fixed left-10 bottom-20 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 p-0 text-sm font-semibold text-white/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur transition hover:text-black"
    >
      <FiArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ToTopScrollButton;
