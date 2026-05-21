import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/img.png";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  const resumeUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/resume/resume.pdf`;

  //Responsive Check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="about"
      className="py-12 px-5 sm:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Hi, I’m
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2">
            Alok Ranjan
          </h2>

          {/* Animated Role */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
            <span className="text-white">I build </span>
            <TypeAnimation
              sequence={[
                "Scalable Web Apps",
                2000,
                "Modern Fullstack Solutions",
                2000,
                "Scalable APIs",
                2000,
                "AI-powered Applications",
                2000,
                "Clean & Efficient Code",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="text-purple-500"
            />
          </h3>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a{" "}
            <span className="text-white font-medium">Backend Developer</span>{" "}
            specializing in the{" "}
            <span className="text-purple-400">
              Python, FastAPI, PostgreSQl etc.
            </span>
            , focused on building{" "}
            <span className="text-white">scalable APIs, high-performance</span>{" "}
            full -stack web applications. I enjoy solving real-world problems
            with clean architecture, responsive UI, and efficient backend
            systems.
          </p>

          {/* CTA */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 rounded-full text-white font-semibold 
            bg-gradient-to-r from-purple-600 to-pink-500 
            hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/40"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {isMobile ? (
            <img
              src={profileImage}
              alt="Alok Ranjan profile"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-600"
            />
          ) : (
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={800}
              gyroscope
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-600"
            >
              <img
                src={profileImage}
                alt="Alok Ranjan profile"
                className="w-full h-full rounded-full object-cover"
              />
            </Tilt>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
