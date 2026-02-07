import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const projectDetails = {
  title: "Z8 Real Estate",
  shortDescription:
    "A SaaS real estate platform for property listings, agent management, and client interactions.",
  image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  stack: [
    "React.js",
    "TypeScript",
    "Tailwind",
    "Shadcn UI",
    "Mongoose",
    "Tanstack Router",
    "Firebase Cloud Messaging",
  ],
  demoWebsite: "https://www.z8-re.com/",
};

export default function PortfolioCmsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
          href="/"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mt-6 font-display">{projectDetails.title}</h1>
        <p className="mt-4 max-w-2xl">{projectDetails.shortDescription}</p>
        <img
          src={projectDetails.image}
          alt={projectDetails.title}
          className="mt-8 h-[420px] w-full rounded-3xl object-cover"
        />
        <div className="mt-8">
          <h3>Tech Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectDetails.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {projectDetails.demoWebsite && (
          <div className="mt-8">
            <h3>Demo Website</h3>
            <a
              className="hover:underline mt-3 inline-flex items-center text-white/70 transition hover:text-white"
              href={projectDetails.demoWebsite}
              target="_blank"
              rel="noreferrer"
            >
              {projectDetails.demoWebsite} ( In Development )
            </a>
          </div>
        )}
        <div className="mt-8">
          <h3>What I have worked on</h3>
          <p className="mt-2">
            I take 90% responsibility of this project as a full stack developer.
            And it still implementing new features and maintaining by me.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>
              Implement the UI design into actual responsive web application
            </li>
            <li>Design the database and their relations</li>
            <li>
              Write performance optimized mongoDB queries and aggregation
              pipelines
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
