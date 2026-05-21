import { useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import { FileText, Upload, Loader2, CheckCircle2 } from "lucide-react";

export default function ResumeManager() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Select a PDF file");
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.storage
        .from("resume")
        .upload("resume.pdf", file, {
          cacheControl: "0",
          upsert: true,
        });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Resume updated successfully!");

      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
        <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
          <FileText size={28} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">Resume Manager</h1>

          <p className="mt-1 text-sm text-zinc-400">
            Upload and manage your latest resume.
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="space-y-6">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-12 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05]">
          <div className="rounded-full bg-cyan-500/10 p-4 text-cyan-400">
            <Upload size={28} />
          </div>

          <div className="text-center">
            <p className="text-base font-semibold text-white">
              Upload Resume PDF
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Drag & drop or click to browse
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Only PDF files are supported
            </p>

            {file && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-cyan-400">
                <CheckCircle2 size={16} />
                <span>{file.name}</span>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>

        {/* Upload Button */}
        <button
          onClick={uploadResume}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Uploading Resume...
            </>
          ) : (
            <>
              <Upload size={18} />
              Upload Resume
            </>
          )}
        </button>
      </div>
    </div>
  );
}
