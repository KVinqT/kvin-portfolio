import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Parami Hospital Call Center",
    image: "/parami.png",
    description:
      "Admin analytics dashboard which is used by assistant doctors and customer service team to manage patient appointments, call logs, and medical records efficiently",
    href: "/projects/parami-hospital-call-center",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Mantine UI",
      "Firebase Auth",
      "Nest.js",
      "Mongoose",
    ],
  },
  {
    title: "Z8 Real Estate ( In Development )",
    image: "z8.png",
    description:
      "A SaaS real estate platform for property listings, agent management, and client interactions.",
    href: "/projects/z8-real-estate",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Shadcn UI",
      "Mongoose",
      "Tanstack Router",
      "Firebase Cloud Messaging",
    ],
  },
  {
    title: "Royal Express Cargo Tracking System",
    image: "/re-mockup.png",
    description:
      "A cargo tracking system for Royal Express that enables the customer service team to track shipment locations and detailed status updates, improving customer satisfaction",
    href: "/projects/cargo-tracking-system",
    stack: ["Next.js", "TypeScript", "Express.js", "Prisma", "Material UI"],
  },
  {
    title: "Music Recommendation System",
    image: "/music-recommend.jpg",
    description:
      "A mini AI-powered lyrics search engine, which takes the lyrics input from users and recommends songs that match the lyrics by converting lyrics into vector using TF-IDF model.",
    href: "/projects/music-recommendation-system",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-10 font-display">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
            >
              <Link
                href={project.href}
                className="relative block overflow-hidden"
                aria-label={`${project.title} details`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full px-5 pb-5 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="mb-2 text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-between gap-6 border-t border-white/10 bg-black/40 px-5 py-5">
                <p className="text-sm text-white/70 md:text-base">
                  {project.description}
                </p>
                <a
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition hover:text-white"
                  href={project.href}
                  aria-label={`${project.title} details`}
                >
                  <FiArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
