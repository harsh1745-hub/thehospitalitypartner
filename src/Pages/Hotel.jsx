import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Container from "../Components/Container.jsx";

import { hospitality } from "../Data/hospitality.js";

export default function Hotels() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen">

        {/* HERO */}
        <section className="pt-40 pb-28 text-center">

          <Container>

            <p
              className="
                uppercase
                tracking-[5px]
                text-[#D4A574]
                text-sm
                mb-5
              "
            >
              Curated Hospitality
            </p>

            <h1
              className="
                heading-font
                text-5xl
                sm:text-7xl
                leading-tight
              "
            >
              Spiritual Comfort
              Meets Premium Stay
            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-gray-400
                leading-relaxed
              "
            >
              Experience thoughtfully curated stays crafted
              around spiritual journeys, immersive comfort,
              wellness, and peaceful travel experiences.
            </p>

          </Container>

        </section>

        {/* HOSPITALITY GRID */}
        <section className="pb-28">

          <Container>

            <div className="space-y-24">

              {hospitality.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                  "
                >

                  {/* IMAGES */}
                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-5
                      h-[500px]
                    "
                  >

                    {/* LARGE IMAGE */}
                    {item.images?.[0] && (
                      <div
                        className="
                          rounded-[32px]
                          overflow-hidden
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

                    {/* IMAGE 2 */}
                    {item.images?.[1] && (
                      <div
                        className="
                          rounded-[32px]
                          overflow-hidden
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
                            backgroundImage: `url(${item.images[1]})`,
                          }}
                        />

                      </div>
                    )}

                    {/* IMAGE 3 */}
                    {item.images?.[2] && (
                      <div
                        className="
                          rounded-[32px]
                          overflow-hidden
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
                        mb-5
                      "
                    >
                      Hospitality Experience
                    </p>

                    <h2
                      className="
                        heading-font
                        text-4xl
                        sm:text-5xl
                        leading-tight
                      "
                    >
                      {item.title}
                    </h2>

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
                        "Comfortable Spiritual Stay",
                        "Premium Travel Support",
                        "Peaceful Environment",
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

                    {/* CTA */}
                    <div className="mt-12">

                      <Link
                        to="/packages"
                        className="
                          inline-block
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
                        Explore Packages
                      </Link>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </Container>

        </section>

        {/* CTA SECTION */}
        <section className="pb-28">

          <Container>

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-[#101624]
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
                  w-[500px]
                  h-[500px]
                  bg-[#D4A574]/10
                  blur-[120px]
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    uppercase
                    tracking-[5px]
                    text-[#D4A574]
                    text-sm
                    mb-6
                  "
                >
                  Begin Your Sacred Journey
                </p>

                <h2
                  className="
                    heading-font
                    text-4xl
                    sm:text-6xl
                    leading-tight
                    max-w-4xl
                    mx-auto
                  "
                >
                  Discover Spiritual India
                  Through Curated Hospitality
                </h2>

                <p
                  className="
                    mt-8
                    max-w-2xl
                    mx-auto
                    text-gray-400
                    leading-relaxed
                  "
                >
                  Experience immersive stays, peaceful
                  destinations, and thoughtfully curated
                  travel experiences designed around comfort,
                  spirituality, and meaningful exploration.
                </p>

                <div className="mt-12">

                  <Link
                    to="/packages"
                    className="
                      inline-block
                      bg-[#D4A574]
                      hover:bg-[#c7925c]
                      transition
                      text-black
                      px-8
                      py-4
                      rounded-full
                      font-medium
                    "
                  >
                    Explore Spiritual Packages
                  </Link>

                </div>

              </div>

            </div>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}