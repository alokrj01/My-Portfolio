import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import {
  FolderKanban,
  FileImage,
  GitBranch as GitHubIcon,
  Globe,
  Code2,
  Pencil,
  Upload,
  Loader2,
  X,
  CheckCircle2,
} from "lucide-react";

export default function ProjectManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techstack, setTechstack] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error(error.message);
        return;
      }

      setProjects(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditProject = (project) => {
    setEditingId(project.id);

    setTitle(project.title);
    setDescription(project.description);
    setTechstack(project.techstack);
    setGithub(project.github);
    setLive(project.live);

    setOriginalImage(project.image);
    setImage(null);
  };

  const handleCancel = () => {
    setEditingId(null);

    setTitle("");
    setDescription("");
    setTechstack("");
    setGithub("");
    setLive("");

    setImage(null);
    setOriginalImage(null);
  };

  const handleAddProject = async () => {
    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    if (!editingId && !image) {
      alert("Image is required for new project");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = originalImage;

      if (image) {
        const fileName = `${Date.now()}-${image.name}`;

        const { error: imageError } = await supabase.storage
          .from("project-images")
          .upload(fileName, image);

        if (imageError) {
          alert(imageError.message);
          setLoading(false);
          return;
        }

        imageUrl =
          `${import.meta.env.VITE_SUPABASE_URL}` +
          `/storage/v1/object/public/project-images/${fileName}`;
      }

      if (editingId) {
        const { error: dbError } = await supabase
          .from("projects")
          .update({
            title,
            description,
            techstack,
            github,
            live,
            ...(image && { image: imageUrl }),
          })
          .eq("id", editingId);

        if (dbError) {
          alert(dbError.message);
          setLoading(false);
          return;
        }

        alert("Project updated successfully!");
      } else {
        const { error: dbError } = await supabase.from("projects").insert([
          {
            title,
            description,
            techstack,
            github,
            live,
            image: imageUrl,
          },
        ]);

        if (dbError) {
          alert(dbError.message);
          setLoading(false);
          return;
        }

        alert("Project added successfully!");
      }

      handleCancel();
      fetchProjects();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-purple-500/15 p-3 text-purple-400">
          <FolderKanban size={28} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            {editingId ? "Edit Project" : "Project Manager"}
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Create, edit, and manage your portfolio projects.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Project Title
          </label>

          <input
            type="text"
            placeholder="AI Employability Predictor"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Project Description
          </label>

          <textarea
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Tech Stack
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-purple-400">
            <Code2 size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="React, Node.js, Supabase..."
              value={techstack}
              onChange={(e) => setTechstack(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* GitHub */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            GitHub Link
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-purple-400">
            <GitHubIcon size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="https://github.com/..."
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Live Link */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Live Project Link
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-purple-400">
            <Globe size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="https://yourproject.com"
              value={live}
              onChange={(e) => setLive(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Upload */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Project Image
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-10 transition-all duration-300 hover:border-purple-400/40 hover:bg-white/[0.05]">
            <div className="rounded-full bg-purple-500/10 p-4 text-purple-400">
              <Upload size={24} />
            </div>

            <div className="text-center">
              <p className="font-medium text-white">Upload Project Image</p>

              <p className="mt-1 text-sm text-zinc-400">
                PNG, JPG, WEBP supported
              </p>

              {image && (
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-purple-400">
                  <CheckCircle2 size={16} />
                  <span>{image.name}</span>
                </div>
              )}

              {originalImage && !image && (
                <p className="mt-3 text-sm text-zinc-500">
                  Existing image will be kept
                </p>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleAddProject}
            disabled={loading}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                {editingId ? "Updating..." : "Adding..."}
              </>
            ) : (
              <>
                <FolderKanban size={18} />
                {editingId ? "Update Project" : "Add Project"}
              </>
            )}
          </button>

          {editingId && (
            <button
              onClick={handleCancel}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-300 transition hover:bg-white/10"
            >
              <X size={18} />
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Project List */}
      {projects.length > 0 && (
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Your Projects</h2>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400">
              {projects.length} Projects
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-3xl border p-5 transition-all duration-300 ${
                  editingId === project.id
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-purple-400/30 hover:bg-white/[0.05]"
                }`}
              >
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-44 w-full rounded-2xl object-cover"
                  />
                )}

                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
                  {project.description}
                </p>

                {project.techstack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techstack.split(",").map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => handleEditProject(project)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-purple-500"
                >
                  <Pencil size={16} />
                  {editingId === project.id
                    ? "Currently Editing"
                    : "Edit Project"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
