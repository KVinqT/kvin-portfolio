import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const ContactIcon = () => {
  return (
    <div className="fixed bottom-6 right-6 z-20 flex items-center gap-7 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
      <Link
        className="transition hover:text-white"
        href="https://www.facebook.com/htet.naung.htun.685572/"
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="h-7 w-7" />
      </Link>
      <Link
        className="transition hover:text-white"
        href="https://www.instagram.com/htetnh/"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="h-7 w-7" />
      </Link>
      <Link
        className="transition hover:text-white"
        href="https://github.com/KVinqT"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="h-7 w-7" />
      </Link>
    </div>
  );
};

export default ContactIcon;
