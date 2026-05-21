import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { LogOut, Loader2 } from "lucide-react";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Failed to logout: " + error.message);
      setLoading(false);
      return;
    }

    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          <span>Signing out...</span>
        </>
      ) : (
        <>
          <LogOut
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
          <span>Logout</span>
        </>
      )}
    </button>
  );
}
