import { motion } from "framer-motion";
import { Clock3, Check } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../Components/Container.jsx";
import { packages } from "../Data/package.js";

export default function PackageSection() {
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
            Premium Packages
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
            Curated Sacred Journeys
            <span className="block mt-2 text-[#D4A574]">
              Crafted For Comfort
            </span>
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              leading-relaxed
              font-body
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
            "
          >
            Thoughtfully designed spiritual journeys combining immersive
            experiences, luxury hospitality, and unforgettable cultural moments.
          </p>

        </div>

        {/* PACKAGE GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-10
          "
        >

          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="
                bg-[#101624]
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                hover:border-[#D4A574]/30
                transition-all
                duration-500
                group
              "
            >

              {/* IMAGE */}
              <div className="relative h-[340px] overflow-hidden">

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

                {/* DURATION */}
                <div
                  className="
                    absolute
                    top-6
                    left-6
                    z-10
                    bg-black/50
                    backdrop-blur-md
                    border
                    border-white/10
                    px-4
                    py-2
                    rounded-full
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-body
                  "
                >

                  <Clock3 size={16} />

                  {item.duration}

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

                {/* HIGHLIGHTS */}
                <div className="mt-10 space-y-5">

                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="
                        flex
                        items-start
                        gap-3
                        text-gray-300
                      "
                    >

                      <div className="text-[#D4A574] mt-1">
                        <Check size={18} />
                      </div>

                      <p
                        className="
                          font-body
                          leading-relaxed
                          text-sm
                          sm:text-base
                        "
                      >
                        {highlight}
                      </p>

                    </div>
                  ))}

                </div>

                {/* FOOTER */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                    mt-12
                    flex-wrap
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        text-gray-400
                        font-body
                      "
                    >
                      Starting From
                    </p>

                    <h4
                      className="
                        text-3xl
                        font-heading
                        font-semibold
                        text-[#D4A574]
                        mt-1
                      "
                    >
                      {item.price}
                    </h4>

                  </div>

                  {/* PACKAGE DETAILS LINK */}
                  <Link
                    to={`/packages/${item.slug}`}
                    className="
                      bg-[#D4A574]
                      hover:bg-[#c7925c]
                      transition
                      duration-300
                      text-black
                      px-6
                      py-3
                      rounded-full
                      font-heading
                      font-medium
                      inline-block
                    "
                  >
                    Explore Package
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