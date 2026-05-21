import ResumeManager from "../components/admin/ResumeManager";
import ProjectManager from "../components/admin/ProjectManager";
import CertificationManager from "../components/admin/CertificationManager";
import LogoutButton from "../components/admin/LogoutButton";
import { ShieldCheck } from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Manage resumes, projects, and certifications from one place.
                </p>
              </div>
            </div>
          </div>

          <div className="self-start md:self-auto">
            <LogoutButton />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Resume Manager</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Upload and manage portfolio resumes.
              </p>
            </div>

            <ResumeManager />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/[0.07]">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Project Manager</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Add, edit, and organize portfolio projects.
              </p>
            </div>

            <ProjectManager />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.07] lg:col-span-2">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Certification Manager</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Manage certifications and achievements.
              </p>
            </div>

            <CertificationManager />
          </div>
        </div>
      </div>
    </div>
  );
}
