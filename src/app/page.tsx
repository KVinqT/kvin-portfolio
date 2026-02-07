import RotatingText from "@/components/custom/animation/rotateText";
import Silk from "@/components/custom/animation/silk";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/custom/navigation";
import ContactIcon from "@/components/custom/contactIcon";
import About from "@/components/custom/about";
import LogoLoop from "@/components/custom/animation/logoLoop";
import {
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Projects from "@/components/custom/projects";
import { FiArrowUp } from "react-icons/fi";
import ToTopScrollButton from "@/components/custom/ToTopScrollButton";
import Contact from "@/components/custom/contact";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiNestjs />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
];

export default function KVinHomePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Silk speed={6} scale={1.2} noiseIntensity={1.2} />
        </div>
        <div className="w-full relative z-10 flex min-h-screen flex-col items-center justify-center">
          <Navigation />
          <div className="mx-auto w-full sm:max-w-[80%] px-6">
            <div>
              <p className="mb-3 tracking-[0.2em]">I AM</p>
              <h1 className="font-display">HTET NAUNG</h1>
              <div className="font-display flex justify-start items-center gap-2 flex-wrap">
                <h1>FULL -</h1>
                <h1>
                  <RotatingText
                    texts={["STACK", "STUCK"]}
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </h1>
                <h1>ENGINEER</h1>
              </div>
              <p className="mt-4 max-w-xl">
                A full-stack engineer who loves building functional web
                applications that solve real‑world problems and create
                delightful user experiences. I fulfill my passion for
                implementing software using the JavaScript ecosystem, and I’m
                always striving to write clean, reusable code.
              </p>
              <div>
                <Button className="mt-4 rounded-full">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
            <ContactIcon />
          </div>
        </div>
      </main>
      <About />
      <div className="py-24">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={100}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology partners"
        />
      </div>
      <Projects />
      <Contact />
      <footer className="w-full bg-black px-6 pb-10 pt-4 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} Htet Naung Htun. All rights reserved.
        </p>
        <p className="mt-1 text-white/40">Made with love by Htet Naung Htun.</p>
      </footer>
      <ToTopScrollButton />
    </>
  );
}
