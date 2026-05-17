import { motion } from "framer-motion";

import Container from "../Components/Container.jsx";
import { destinations } from "../Data/destination.js";

export default function DestinationSection() {
  return (
    <section className="py-28">

      <Container>

        {/* SECTION HEADER */}
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
            Sacred Destinations
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
            Explore India’s Most
            <span className="block mt-2 text-[#D4A574]">
              Spiritual Places
            </span>
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              text-sm
              sm:text-base
              leading-relaxed
              font-body
              max-w-2xl
              mx-auto
            "
          >
            Immerse yourself in timeless culture,
            sacred traditions, and unforgettable
            spiritual journeys crafted with premium hospitality.
          </p>

        </div>

        {/* DESTINATION GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {destinations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                h-[520px]
                rounded-[32px]
                overflow-hidden
                group
                cursor-pointer
                border
                border-white/10
              "
            >

              {/* IMAGE */}
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

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  p-8
                  z-10
                "
              >

                <p
                  className="
                    text-[#D4A574]
                    uppercase
                    tracking-[4px]
                    text-xs
                    mb-4
                    font-body
                  "
                >
                  Spiritual Journey
                </p>

                <h3
                  className="
                    font-heading
                    text-3xl
                    sm:text-4xl
                    text-white
                    font-semibold
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-300
                    text-sm
                    sm:text-base
                    leading-relaxed
                    font-body
                  "
                >
                  {item.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}