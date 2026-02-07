import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-10 font-display">Contact</h1>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="max-w-xl">
              Want to collaborate or build something great together? Reach out
              anytime through email, phone, or social media.
            </p>
            <Link
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
              href="mailto:kevinqt4you@gmail.com"
            >
              Email Me
            </Link>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <FiMail className="h-5 w-5" />
                <a
                  className="transition hover:text-white"
                  href="mailto:kevinqt4you@gmail.com"
                >
                  kevinqt4you@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <FiPhone className="h-5 w-5" />
                <span className="text-base" aria-hidden>
                  🇹🇭
                </span>
                <a
                  className="transition hover:text-white"
                  href="tel:+66950754262"
                >
                  (66) 950754262
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <h3>Social Media</h3>
            <div className="mt-4 flex items-center gap-5 text-white/70">
              <Link
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:text-white"
                href="https://www.facebook.com/htet.naung.htun.685572/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:text-white"
                href="https://www.instagram.com/htetnh/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:text-white"
                href="https://github.com/KVinqT"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
