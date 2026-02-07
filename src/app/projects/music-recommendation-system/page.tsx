import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projectDetails = {
  title: "Music Recommendation System",
  shortDescription:
    "A mini AI-powered lyrics search engine, which takes the lyrics input from users and recommends songs that match the lyrics by converting lyrics into vector using TF-IDF model.",
  image: "/music-recommend.jpg",
  stack: ["JavaScript", "HTML", "CSS"],
  repository: "https://github.com/KVinqT/Music-Recommendation",
};

export default function SaasLandingPage() {
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
        {projectDetails.repository && (
          <div className="mt-8">
            <h3>Repository</h3>
            <a
              className="hover:underline mt-3 inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              href={projectDetails.repository}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-5 w-5" />
              {projectDetails.repository}
            </a>
          </div>
        )}
        <div className="mt-8">
          <h3>What I have worked on</h3>
          <p className="mt-2">
            It was kind of no brainer for me cause the backend was done by my
            mate.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>Designed the UI using pure HTML and CSS.</li>
            <li>
              Wrote vanilla JavaScript to bind the API and connect it with the
              website.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
