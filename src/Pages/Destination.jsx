import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Container from "../Components/Container.jsx";

import { destinations } from "../Data/destination.js";

export default function Destinations() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen">

        {/* HERO */}
        <section className="pt-44 pb-28 text-center">

          <Container>

            <p
              className="
                uppercase
                tracking-[5px]
                text-[#D4A574]
                text-xs
                sm:text-sm
                mb-6
              "
            >
              Sacred Destinations
            </p>

            <h1
              className="
                heading-font
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-[1.1]
                max-w-4xl
                mx-auto
              "
            >
              Explore Spiritual India
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-gray-400
                leading-relaxed
                text-sm
                sm:text-base
              "
            >
              Discover timeless cities filled with
              sacred traditions, immersive experiences,
              spiritual heritage, and curated hospitality.
            </p>

          </Container>

        </section>

        {/* DESTINATIONS GRID */}
        <section className="pb-28">

          <Container>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-10
              "
            >

              {destinations.map((item, index) => (
                <Link
                  to={`/destinations/${item.slug}`}
                  key={index}
                >

                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="
                      group
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-white/10
                      bg-[#101624]
                      hover:border-[#D4A574]/30
                      transition-all
                      duration-500
                      h-full
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative h-[420px] overflow-hidden">

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
                          via-black/40
                          to-transparent
                        "
                      />

                      {/* TITLE */}
                      <div
                        className="
                          absolute
                          bottom-8
                          left-8
                          z-10
                        "
                      >

                        <h2
                          className="
                            heading-font
                            text-3xl
                            sm:text-4xl
                            text-white
                            leading-tight
                          "
                        >
                          {item.title}
                        </h2>

                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-8 sm:p-10">

                      <p
                        className="
                          text-gray-400
                          leading-relaxed
                          text-sm
                          sm:text-base
                        "
                      >
                        {item.subtitle}
                      </p>

                      {/* BEST TIME */}
                      <div className="mt-8">

                        <p
                          className="
                            uppercase
                            tracking-[4px]
                            text-[#D4A574]
                            text-xs
                            mb-3
                          "
                        >
                          Best Time To Visit
                        </p>

                        <p className="text-white text-lg">
                          {item.bestTime}
                        </p>

                      </div>

                      {/* CTA */}
                      <div className="mt-10">

                        <div
                          className="
                            inline-flex
                            items-center
                            gap-3
                            text-[#D4A574]
                            font-medium
                          "
                        >
                          Explore Destination

                          <span className="text-xl">
                            →
                          </span>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                </Link>
              ))}

            </div>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}