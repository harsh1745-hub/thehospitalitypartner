import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../Components/Container.jsx";

import { hospitality } from "../Data/hospitality.js";

export default function HospitalitySection() {
  return (
    <section
      id="hospitality"
      className="py-28"
    >

      <Container>

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <p
            className="
              uppercase
              tracking-[5px]
              text-[#D4A574]
              text-xs
              sm:text-sm
              mb-5
            "
          >
            Curated Hospitality
          </p>

          <h2
            className="
              heading-font
              text-4xl
              sm:text-5xl
              lg:text-6xl
              text-white
              leading-[1.1]
            "
          >
            Choose Your
            <span className="block mt-2 text-[#D4A574]">
              Travel Comfort
            </span>
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              leading-relaxed
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
            "
          >
            Whether you seek affordable comfort or premium
            spiritual luxury, our curated hospitality experiences
            are designed to match every journey style with peace,
            comfort, and care.
          </p>

        </div>

        {/* HOSPITALITY CARDS */}
        <div className="space-y-14">

          {hospitality.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                bg-[#101624]
                border
                border-white/10
                hover:border-[#D4A574]/30
                transition-all
                duration-500
                rounded-[36px]
                overflow-hidden
                p-6
                sm:p-8
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-12
                  items-center
                "
              >

                {/* IMAGE COLLAGE */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-5
                    h-[450px]
                  "
                >

                  {/* LARGE IMAGE */}
                  {item.images?.[0] && (
                    <div
                      className="
                        rounded-[28px]
                        overflow-hidden
                        col-span-1
                        row-span-2
                      "
                    >

                      <div
                        className="
                          w-full
                          h-full
                          bg-cover
                          bg-center
                          hover:scale-110
                          transition-transform
                          duration-700
                        "
                        style={{
                          backgroundImage: `url(${item.images[0]})`,
                        }}
                      />

                    </div>
                  )}

                  {/* SMALL IMAGE 1 */}
                  {item.images?.[1] && (
                    <div className="rounded-[28px] overflow-hidden">

                      <div
                        className="
                          w-full
                          h-full
                          bg-cover
                          bg-center
                          hover:scale-110
                          transition-transform
                          duration-700
                        "
                        style={{
                          backgroundImage: `url(${item.images[1]})`,
                        }}
                      />

                    </div>
                  )}

                  {/* SMALL IMAGE 2 */}
                  {item.images?.[2] && (
                    <div className="rounded-[28px] overflow-hidden">

                      <div
                        className="
                          w-full
                          h-full
                          bg-cover
                          bg-center
                          hover:scale-110
                          transition-transform
                          duration-700
                        "
                        style={{
                          backgroundImage: `url(${item.images[2]})`,
                        }}
                      />

                    </div>
                  )}

                </div>

                {/* CONTENT */}
                <div>

                  <p
                    className="
                      uppercase
                      tracking-[5px]
                      text-[#D4A574]
                      text-xs
                      mb-6
                    "
                  >
                    Hospitality Experience
                  </p>

                  <h3
                    className="
                      heading-font
                      text-4xl
                      sm:text-5xl
                      text-white
                      leading-[1.1]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-7
                      text-gray-400
                      leading-relaxed
                      text-sm
                      sm:text-base
                    "
                  >
                    {item.subtitle}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-10 space-y-5">

                    {[
                      "Curated Hospitality",
                      "Comfortable Stays",
                      "Spiritual Ambience",
                      "Premium Travel Support",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <div
                          className="
                            w-3
                            h-3
                            rounded-full
                            bg-[#D4A574]
                          "
                        />

                        <p className="text-gray-300">
                          {feature}
                        </p>

                      </div>
                    ))}

                  </div>

                  {/* CTA BUTTON */}
                  <Link
                    to="/hotels"
                    className="
                      inline-block
                      mt-12
                      bg-[#D4A574]
                      hover:bg-[#c7925c]
                      transition
                      duration-300
                      text-black
                      px-8
                      py-4
                      rounded-full
                      font-medium
                    "
                  >
                    Explore Hospitality
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}