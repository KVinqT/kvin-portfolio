import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const projectDetails = {
  title: "Parami Hospital Call Center",
  shortDescription:
    "Admin analytics dashboard which is used by doctor assistants and customer service team to manage patient appointments, call logs, and medical records efficiently.",
  image: "/parami.png",
  stack: [
    "React.js",
    "TypeScript",
    "Tailwind",
    "Mantine UI",
    "Firebase Auth",
    "Nest.js",
    "Mongoose",
  ],
  companyWebsite: "https://paramihospital.com/",
};

export default function ParamiHospitalCallCenterPage() {
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
        {projectDetails.companyWebsite && (
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
        )}
        <div className="mt-8">
          <h3>What I have worked on</h3>
          <p className="mt-2">
            I lead the full-stack development of this project using the
            JavaScript ecosystem. I’m responsible for delivering new features,
            maintaining stability, and ensuring the system performs reliably at
            scale.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>
              Implemented the designs into reality and integrated them with
              backend services.
            </li>
            <li>
              Designed database schema and relationships for patient records,
              appointments, and call logs.
            </li>
            <li>
              Merged and shipped new features while maintaining backward
              compatibility.
            </li>
            <li>
              Optimized MongoDB queries and aggregation pipelines to handle
              100k+ patient records efficiently.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
