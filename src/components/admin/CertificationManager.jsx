import { useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  Award,
  Building2,
  CalendarDays,
  Link2,
  Upload,
  Loader2,
} from "lucide-react";

export default function CertificationManager() {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [credentialUrl, setCredentialUrl] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddCertification = async () => {
    if (!title || !issuer || !image) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const fileName = `${Date.now()}-${image.name}`;

      const { error: imageError } = await supabase.storage
        .from("certification-images")
        .upload(fileName, image);

      if (imageError) {
        alert(imageError.message);
        setLoading(false);
        return;
      }

      const imageUrl =
        `${import.meta.env.VITE_SUPABASE_URL}` +
        `/storage/v1/object/public/certification-images/${fileName}`;
      const { error: dbError } = await supabase.from("certifications").insert([
        {
          title,
          issuer,
          issue_date: issueDate,
          credential_url: credentialUrl,
          image: imageUrl,
        },
      ]);

      if (dbError) {
        alert(dbError.message);
        setLoading(false);
        return;
      }

      alert("Certification added successfully!");

      setTitle("");
      setIssuer("");
      setIssueDate("");
      setCredentialUrl("");
      setImage(null);
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
        <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-400">
          <Award size={28} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Certification Manager
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Add and manage professional certifications.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Certification Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Certification Title
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-emerald-400">
            <Award size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="AWS Cloud Practitioner"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Issuer */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Issuer
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-emerald-400">
            <Building2 size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="Amazon Web Services"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Issue Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Issue Date
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-emerald-400">
            <CalendarDays size={18} className="text-zinc-400" />

            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
            />
          </div>
        </div>

        {/* Credential URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Credential URL
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 focus-within:border-emerald-400">
            <Link2 size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="https://credential-url.com"
              value={credentialUrl}
              onChange={(e) => setCredentialUrl(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Upload */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Certificate Image
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-10 transition hover:border-emerald-400/40 hover:bg-white/[0.05]">
            <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400">
              <Upload size={24} />
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-white">
                Click to upload certificate
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                PNG, JPG, WEBP supported
              </p>

              {image && (
                <p className="mt-3 text-sm text-emerald-400">{image.name}</p>
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

        {/* Button */}
        <button
          onClick={handleAddCertification}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Adding Certification...
            </>
          ) : (
            <>
              <Award size={18} />
              Add Certification
            </>
          )}
        </button>
      </div>
    </div>
  );
}
