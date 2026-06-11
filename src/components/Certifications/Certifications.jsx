import React, { useState, useEffect } from "react";
//import { certifications } from "../../constants";
import { supabase } from "../../lib/supabase";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchCertifications = async () => {
    const { data, error } = await supabase
      .from("certifications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setCertifications(data);
  };

  useEffect(() => {
    const loadCertifications = async () => {
      await fetchCertifications();
    };

    loadCertifications();
  }, []);

  return (
    <section
      id="certifications"
      className="py-24 px-5 sm:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Certifications that validate my skills and continuous learning journey
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications?.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelected(cert)}
            className="cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-purple-500/40 transition"
          >
            <div className="p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>

              <p className="text-gray-400 text-sm mt-1">
                {cert.issuer} • {cert.issue_date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[400px] object-contain"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl text-white font-bold">
                {selected.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {selected.issuer} • {selected.issue_date}
              </p>

              {/* Button */}
              <a
                href={selected.credential_url}
                target="_blank"
                //target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
