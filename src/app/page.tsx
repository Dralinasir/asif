
const projects = [
  {
    number: "01",
    title: "EGO — Web Project",
    description:
      "A web project showcasing my interest in digital products, website development, and online experiences.",
    category: "WEB PROJECT",
    url: "https://ego-9ava.vercel.app/",
  },
  {
    number: "02",
    title: "EGO — Project Showcase",
    description:
      "Another look at my EGO project, demonstrating my initiative to explore and build digital experiences.",
    category: "DIGITAL EXPERIENCE",
    url: "https://musaaaa-three.vercel.app/",
  },
  {
    number: "03",
    title: "Personal Web Project",
    description:
      "A separate website project that reflects my interest in technology, creativity, and learning by building.",
    category: "PERSONAL PROJECT",
    url: "https://ali-nasir-kappa.vercel.app/",
  },
];

const skills = [
  "Business & Commerce",
  "Communication",
  "Problem Solving",
  "Creative Thinking",
  "Digital Literacy",
  "Adaptability",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="text-2xl font-black tracking-tight">
            ali<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm text-slate-400 transition hover:text-cyan-300">About</a>
            <a href="#skills" className="text-sm text-slate-400 transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="text-sm text-slate-400 transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950">
              Contact Me ↗
            </a>
          </div>

          {/* Mobile navigation — no extra dependency */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white">
              Menu ☰
            </summary>
            <div className="absolute right-0 top-12 flex w-48 flex-col gap-1 rounded-2xl border border-white/10 bg-[#0c1a2b] p-3 shadow-2xl">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-28">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              A LEVELS STUDENT · FUTURE PROFESSIONAL
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m
              <br />
              Ali Nasir
              <br />
              <span className="text-cyan-400">Warraich.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              A student at Beaconhouse Sargodha with an interest in business,
              creativity, and digital projects. I&apos;m always looking for
              opportunities to learn, grow, and turn ideas into meaningful work.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore My Projects ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>⌖ Sargodha, Pakistan</span>
              <span>✦ Open to opportunities</span>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#142840] to-[#091321] p-5 shadow-2xl shadow-cyan-950/20">
              <div className="absolute -right-3 -top-3 rounded-full border border-cyan-300/30 bg-[#0b1a2b] px-4 py-2 text-xs font-bold text-cyan-300">
                MY PORTFOLIO
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102137]">
                <img
                  src="/Image.jpeg"
                  alt="Ali Nasir Warraich"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Student · Creator · Learner
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Ali Nasir Warraich
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Building skills for tomorrow&apos;s opportunities.
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-600">
              Your personal space on the web.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-white/[0.06] bg-[#0a1625] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              01 / About Me
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Learning with purpose.
              <br />
              Growing with ambition.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m Ali Nasir Warraich, an A Levels student at Beaconhouse
              Sargodha, Pakistan.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              I enjoy exploring new ideas, developing practical skills, and
              working on digital projects. My goal is to keep learning, gain
              valuable experience, and prepare myself for future academic and
              professional opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <span className="text-2xl">🎓</span>
                <h3 className="mt-3 font-bold text-white">Education</h3>
                <p className="mt-1 text-sm text-slate-400">A Levels</p>
                <p className="mt-1 text-sm text-slate-500">Beaconhouse Sargodha</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <span className="text-2xl">🚀</span>
                <h3 className="mt-3 font-bold text-white">My Goal</h3>
                <p className="mt-1 text-sm text-slate-400">Internship & career growth</p>
                <p className="mt-1 text-sm text-slate-500">Learning through experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            02 / My Strengths
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Skills I&apos;m developing.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A selection of transferable skills relevant to study, business,
            collaboration, and digital work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  0{index + 1}
                </span>
                <span className="font-semibold text-slate-200 transition group-hover:text-cyan-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-600">
            Update this list to reflect your actual skills and experience.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-white/[0.06] bg-[#0a1625] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            03 / My Work
          </p>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Projects & creations.
            </h2>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Explore my websites and digital projects. Each link opens the
              corresponding live website.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-3xl border border-white/[0.08] bg-[#07111f] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-slate-600">
                    {project.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/[0.07] text-xl text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    ↗
                  </span>
                </div>

                <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-cyan-400">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  Visit Live Website
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-5 py-28 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            04 / Contact
          </p>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Let&apos;s create
            <br />
            <span className="text-cyan-400">new opportunities.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
            I&apos;m interested in internships, learning opportunities,
            collaborations, and connecting with people who share an interest
            in business and digital innovation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dralinasirwarraich@gmail.com?subject=Portfolio%20Enquiry"
              className="rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              ✉ Email Me
            </a>
            <a
              href="tel:03137030964"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              ☎ Call Me
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            <a
              href="mailto:dralinasirwarraich@gmail.com"
              className="break-words rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-300/30"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</p>
              <p className="mt-2 text-sm text-cyan-300">dralinasirwarraich@gmail.com</p>
            </a>
            <a
              href="https://www.instagram.com/ali_nasir96/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-300/30"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Instagram</p>
              <p className="mt-2 text-sm text-cyan-300">@ali_nasir96 ↗</p>
            </a>
            <a
              href="tel:03137030964"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-300/30"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone</p>
              <p className="mt-2 text-sm text-slate-200">03137030964</p>
            </a>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Location</p>
              <p className="mt-2 text-sm text-slate-200">Sargodha, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <a href="#home" className="text-xl font-black">
            ali<span className="text-cyan-400">.</span>
          </a>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ali Nasir Warraich. All rights reserved.
          </p>
          <a href="#home" className="text-sm text-slate-400 transition hover:text-cyan-300">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
