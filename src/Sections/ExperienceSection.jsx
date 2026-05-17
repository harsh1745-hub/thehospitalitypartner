import { motion } from "framer-motion";

import Container from "../Components/Container.jsx";
import { experiences } from "../Data/experiences.js";

export default function ExperienceSection() {
  return (
    <section className="py-28">

      <Container>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-2xl">

            <p
              className="
                uppercase
                tracking-[5px]
                text-[#D4A574]
                text-xs
                sm:text-sm
                mb-5
                font-body
              "
            >
              Curated Experiences
            </p>

            <h2
              className="
                font-heading
                text-4xl
                sm:text-5xl
                lg:text-6xl
                text-white
                leading-[1.1]
                font-semibold
              "
            >
              Discover Experiences
              <span className="block mt-2 text-[#D4A574]">
                Beyond Tourism
              </span>
            </h2>

          </div>

          <p
            className="
              text-gray-400
              max-w-xl
              leading-relaxed
              font-body
              text-sm
              sm:text-base
            "
          >
            From sacred rituals to immersive cultural journeys,
            every experience is thoughtfully crafted with
            comfort, authenticity, and premium hospitality.
          </p>

        </div>

        {/* EXPERIENCE GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="
                group
                bg-[#101624]
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                hover:border-[#D4A574]/30
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />

                {/* CATEGORY */}
                <div className="absolute top-6 left-6 z-10">

                  <span
                    className="
                      bg-black/50
                      backdrop-blur-md
                      border
                      border-white/10
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      uppercase
                      tracking-[3px]
                      text-[#D4A574]
                      font-body
                    "
                  >
                    {item.category}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 sm:p-10">

                <h3
                  className="
                    font-heading
                    text-3xl
                    sm:text-4xl
                    text-white
                    leading-tight
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-10
                  "
                >

                  <p
                    className="
                      text-[#D4A574]
                      text-xl
                      font-heading
                      font-semibold
                    "
                  >
                    {item.price}
                  </p>

                  <button
                    className="
                      border
                      border-white/10
                      hover:border-[#D4A574]
                      hover:text-[#D4A574]
                      transition
                      duration-300
                      px-5
                      py-2.5
                      rounded-full
                      text-sm
                      font-body
                      text-white
                    "
                  >
                    Explore
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}