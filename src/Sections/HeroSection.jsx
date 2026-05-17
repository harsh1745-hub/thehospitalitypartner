import { motion } from "framer-motion";

import Container from "../Components/Container.jsx";
import ghatBg from "../assets/ghat.png";

import { openWhatsApp } from "../Utils/Whatsapp.js";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ghatBg})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent z-10" />

      {/* CONTENT */}
      <Container className="relative z-20 flex items-center min-h-screen">

        <div className="max-w-3xl pt-24">

          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              uppercase
              tracking-[5px]
              text-[#D4A574]
              text-xs
              sm:text-sm
              mb-6
              font-body
            "
          >
            SPIRITUAL • CURATED • IMMERSIVE
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              font-heading
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1.1]
              text-white
              font-semibold
            "
          >
            Experience Sacred India
            <span className="block text-[#D4A574] mt-2">
              With Comfort & Care
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              mt-8
              text-sm
              sm:text-lg
              text-gray-300
              max-w-2xl
              leading-relaxed
              font-body
            "
          >
            Premium spiritual journeys crafted through
            hospitality, cultural immersion, and unforgettable
            experiences across India’s sacred destinations.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
            "
          >

            {/* PRIMARY BUTTON */}
            <button
              onClick={() =>
                openWhatsApp(
                  "Hi, I want to explore spiritual journey packages."
                )
              }
              className="
                bg-[#D4A574]
                hover:bg-[#c7925c]
                transition
                text-black
                px-8
                py-4
                rounded-full
                font-heading
                font-medium
              "
            >
              Explore Journeys
            </button>

            {/* SECONDARY BUTTON */}
            <button
              className="
                border
                border-white/20
                hover:border-[#D4A574]
                hover:text-[#D4A574]
                transition
                px-8
                py-4
                rounded-full
                text-white
                font-heading
                font-medium
              "
            >
              Watch Experience
            </button>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}