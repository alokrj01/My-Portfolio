import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, ShieldCheck } from "lucide-react";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    let mounted = true;

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching session:", error);
        }
        if (mounted) {
          setSession(data?.session ?? null);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching session:", error);
        if (mounted) {
          setLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setSession(session);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-5">
          {/* Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 animate-ping rounded-full bg-purple-500/20" />
            <div className="rounded-2xl bg-purple-500/15 p-4 text-purple-400">
              <ShieldCheck size={28} />
            </div>
          </div>

          {/* Spinner + text */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-zinc-300">
              <Loader2 size={16} className="animate-spin text-purple-400" />
              <span className="text-sm font-medium">Verifying session...</span>
            </div>
            <p className="text-xs text-zinc-600">
              Checking your authentication
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
}
