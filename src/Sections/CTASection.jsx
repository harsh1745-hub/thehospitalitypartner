import { motion } from "framer-motion";

import Container from "../Components/Container";

import { openWhatsApp } from "../Utils/Whatsapp";

export default function CTASection() {
  return (
    <section className="py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#101624]
            to-[#1A2235]
            px-8
            py-20
            sm:px-16
            text-center
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[400px]
              h-[400px]
              bg-[#D4A574]/10
              blur-[120px]
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto">

            <p
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
              Begin Your Journey
            </p>

            <h2
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
              <span className="block mt-2 text-[#D4A574]">
                With Comfort & Care
              </span>
            </h2>

            <p
              className="
                mt-8
                text-gray-300
                leading-relaxed
                max-w-2xl
                mx-auto
                font-body
                text-sm
                sm:text-base
              "
            >
              Discover curated spiritual journeys crafted
              with premium hospitality, immersive experiences,
              and unforgettable cultural exploration.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-5
                mt-12
              "
            >

              {/* PRIMARY BUTTON */}
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hi, I want to plan a spiritual journey."
                  )
                }
                className="
                  bg-[#D4A574]
                  hover:bg-[#c7925c]
                  transition
                  duration-300
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-heading
                  font-medium
                  w-full
                  sm:w-auto
                "
              >
                Plan Your Journey
              </button>

              {/* SECONDARY BUTTON */}
              <button
                className="
                  border
                  border-white/10
                  hover:border-[#D4A574]
                  hover:text-[#D4A574]
                  transition
                  duration-300
                  px-8
                  py-4
                  rounded-full
                  text-white
                  font-heading
                  font-medium
                  w-full
                  sm:w-auto
                "
              >
                Contact Us
              </button>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}