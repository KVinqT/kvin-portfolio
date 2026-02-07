import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="relative w-full px-6 py-20">
      <div className="mx-auto w-full sm:max-w-[80%] ">
        <h1 className="mb-10 font-display">About</h1>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <img
              src="/my-image.jpeg"
              alt="Htet Naung portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="max-w-xl">
              I'm a 21 years old developer with 2 years of full‑stack web
              development experience. Using JavaScript technologies such as
              React.js, Node.js, and Next.js, I’ve built several
              production‑ready web applications in domains including healthcare
              and logistics.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3>Education</h3>
                <div className="mt-2 flex justify-start items-center gap-3">
                  <Image
                    src="/education.png"
                    alt="Sunderland University Logo"
                    width={100}
                    height={100}
                  />
                  <p>
                    B.Sc (Hons) Computer Systems Engineering — University Of
                    Sunderland, 2021–2025
                  </p>
                </div>
                <div className="mt-2 flex justify-start items-center gap-3">
                  <Image
                    className="bg-white p-2.5"
                    src="/pearson.png"
                    alt="Person Logo"
                    width={100}
                    height={100}
                  />
                  <p>
                    Pearson BTEC Higher National Diploma in Computing (SOFTWARE
                    ENGINEERING)
                  </p>
                </div>
              </div>
              <div>
                <h3>Certifications</h3>
                <p className="mt-2">
                  Full‑Stack Web Development —{" "}
                  <a
                    href="https://www.youtube.com/@MSquareProgramming"
                    className="hover:underline"
                  >
                    M Square Programming
                  </a>{" "}
                  (Batch 1)
                </p>
              </div>
              <div>
                <h3>Companies I've worked for</h3>
                <div className="mt-3 flex justify-start items-center">
                  <Link
                    href="https://www.royalx.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/royal-express.png"
                      alt="Royal Express Logo"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </Link>
                  <Link
                    href="https://myancare.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4"
                  >
                    <Image
                      src="/myancare.jpeg"
                      alt="MyanCare Logo"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
