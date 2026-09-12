import { projects } from "../../../lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import ProjectCarousel from "../../components/ProjectCarousel";
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) {
    notFound();
  }
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 antialiased selection:bg-zinc-100 selection:text-zinc-950 py-24">
      {/* DECORATION: Blueprint Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent)] opacity-50 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header / Nav */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            cd ..
          </Link>          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded-sm bg-zinc-900/50">
                src_build_v{project.id}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
          </div>
        </div>
        {/* Carousel */}
        <div className="mb-16">
          <ProjectCarousel images={project.images} />
        </div>
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-200 border-b border-zinc-900 pb-4">
                Overview
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-200 border-b border-zinc-900 pb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Sidebar Info */}
          <div className="space-y-8">

            {/* Tech Stack */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-950/80 text-xs font-mono border border-zinc-800 text-zinc-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Links */}
            {project.gitLink !== '-' &&
              (
                <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Deployment Links
                  </h3>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-800 transition-colors group"
                  >
                    <Code className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Source Code</span>
                      <span className="text-xs text-zinc-500 font-mono">github.com</span>
                    </div>
                  </a>
                  {project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-800 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Live Application</span>
                        <span className="text-xs text-zinc-500 font-mono">Production</span>
                      </div>
                    </a>
                  )}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}