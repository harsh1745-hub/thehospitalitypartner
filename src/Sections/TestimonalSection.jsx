import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "../components/Container.jsx";
import { testimonials } from "../Data/testimonal.js";

export default function TestimonialSection() {
  return (
    <section className="py-28">

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

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
            Traveler Stories
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
            Experiences Shared
            <span className="block mt-2 text-[#D4A574]">
              By Our Travelers
            </span>
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              leading-relaxed
              text-sm
              sm:text-base
              font-body
              max-w-2xl
              mx-auto
            "
          >
            Discover heartfelt experiences from travelers
            who explored sacred destinations through curated
            hospitality and immersive spiritual journeys.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                backdrop-blur-xl
                bg-white/5
                border
                border-white/10
                rounded-[32px]
                p-8
                sm:p-10
                hover:border-[#D4A574]/30
                transition-all
                duration-500
              "
            >

              {/* NAME */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-heading
                    font-semibold
                    text-white
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-400
                    mt-2
                    font-body
                  "
                >
                  {item.destination}
                </p>

              </div>

              {/* STARS */}
              <div className="flex gap-1 mt-7">

                {[...Array(item.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="fill-[#D4A574] text-[#D4A574]"
                  />
                ))}

              </div>

              {/* REVIEW */}
              <p
                className="
                  mt-7
                  text-gray-300
                  leading-relaxed
                  font-body
                  text-sm
                  sm:text-base
                "
              >
                "{item.review}"
              </p>

            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}