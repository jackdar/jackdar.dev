import Form from "@/components/form";
import { Project, ProjectConfig } from "@/components/project";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Github, Linkedin } from "lucide-react";

import { siteData } from "@/next.json.mjs";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col justify-between gap-16 p-8 pb-20 font-mono selection:bg-[#728071] sm:p-20">
      <main className="flex flex-col gap-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-semibold">Hi, I&apos;m Jack.</h1>
          <p className="max-w-[600px]">
            I am a programmer and software developer, specialising in full-stack
            development. I strive to create excellent experiences through
            software and digital tools.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium">Projects</h2>
            <p>I have worked on a range of projects from finance to games.</p>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-x-6 gap-y-10 lg:grid-cols-3 lg:grid-rows-1">
            {siteData.projects.map((project: ProjectConfig) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium">Get in touch</h2>
            <p>
              Pop me your email address and I will get back to you as soon as
              possible.
            </p>
          </div>
          <Form />
        </div>
      </main>
      <footer className="flex flex-wrap gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/jackdar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} color="#666" aria-hidden />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jackdar"
          target="_blank"
          rel="noopener norefferer"
        >
          <Github size={20} color="#666" aria-hidden />
          GitHub
        </a>
        <ThemeSwitcher className="ml-auto" />
      </footer>
    </div>
  );
}
