import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const projectDetails = {
  title: "Cargo Tracking System",
  shortDescription:
    "A cargo tracking system for Royal Express that enables the customer service team to track shipment locations and detailed status updates, improving customer satisfaction.",
  image: "/re-mockup.png",
  stack: ["Next.js", "TypeScript", "Express.js", "Prisma", "Material UI"],
  companyWebsite: "https://www.royalx.net/",
};

export default function AnalyticsPlatformPage() {
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
          className="mt-8 h-full w-full rounded-3xl object-cover"
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
        <div className="mt-8">
          <h3>Company Website</h3>
          <a
            className="hover:underline mt-3 inline-flex items-center text-white/70 transition hover:text-white"
            href={projectDetails.companyWebsite}
            target="_blank"
            rel="noreferrer"
          >
            {projectDetails.companyWebsite}
          </a>
        </div>
        <div className="mt-8">
          <h3>What I have worked on</h3>
          <p className="mt-2">
            I worked as a junior full-stack developer under the guidance of a
            senior engineer, contributing to both frontend and backend
            development tasks.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>Built the admin dashboard UI based on provided designs.</li>
            <li>
              Implemented RESTful APIs and maintained OpenAPI documentation
              using Swagger.
            </li>
            <li>
              Wrote efficient and performant SQL queries for data retrieval and
              reporting.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
