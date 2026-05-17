import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Container from "../Components/Container.jsx";

import { destinations } from "../Data/destination.js";

export default function DestinationDetails() {

  const { slug } = useParams();

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return (
      <>
        <Navbar />

        <main
          className="
            min-h-screen
            bg-[#050816]
            text-white
            flex
            items-center
            justify-center
          "
        >

          <div className="text-center">

            <h1
              className="
                heading-font
                text-5xl
                mb-4
              "
            >
              Destination Not Found
            </h1>

            <p className="text-gray-400">
              The destination you are looking for does not exist.
            </p>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen">

        {/* HERO */}
        <section className="relative h-[85vh] overflow-hidden">

          {/* IMAGE */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              scale-105
            "
            style={{
              backgroundImage: `url(${destination.image})`,
            }}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/70
            "
          />

          {/* CONTENT */}
          <Container
            className="
              relative
              z-10
              h-full
              flex
              items-end
              pb-24
            "
          >

            <div className="max-w-4xl">

              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-[#D4A574]
                  text-sm
                  mb-6
                "
              >
                Sacred Destination
              </p>

              <h1
                className="
                  heading-font
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  leading-tight
                "
              >
                {destination.title}
              </h1>

              <p
                className="
                  mt-8
                  text-gray-300
                  text-lg
                  max-w-3xl
                  leading-relaxed
                "
              >
                {destination.subtitle}
              </p>

            </div>

          </Container>

        </section>

        {/* OVERVIEW */}
        <section className="py-28">

          <Container>

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-16
              "
            >

              {/* LEFT */}
              <div className="lg:col-span-2">

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-[#D4A574]
                    text-sm
                    mb-5
                  "
                >
                  Destination Overview
                </p>

                <h2
                  className="
                    heading-font
                    text-4xl
                    sm:text-5xl
                    leading-tight
                  "
                >
                  Experience Spiritual
                  India Authentically
                </h2>

                <p
                  className="
                    mt-8
                    text-gray-400
                    leading-relaxed
                    text-lg
                  "
                >
                  {destination.overview}
                </p>

                {/* EXPERIENCES */}
                <div className="mt-24">

                  <p
                    className="
                      uppercase
                      tracking-[4px]
                      text-[#D4A574]
                      text-sm
                      mb-5
                    "
                  >
                    Experiences
                  </p>

                  <h2
                    className="
                      heading-font
                      text-4xl
                      sm:text-5xl
                      leading-tight
                      mb-12
                    "
                  >
                    Curated Spiritual
                    Experiences
                  </h2>

                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-6
                    "
                  >

                    {destination.experiences.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            bg-[#101624]
                            border
                            border-white/10
                            rounded-[28px]
                            p-6
                          "
                        >

                          <div
                            className="
                              w-3
                              h-3
                              rounded-full
                              bg-[#D4A574]
                              mb-5
                            "
                          />

                          <h3
                            className="
                              text-xl
                              text-white
                              leading-relaxed
                            "
                          >
                            {item}
                          </h3>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>

              {/* RIGHT SIDEBAR */}
              <div>

                <div
                  className="
                    sticky
                    top-28
                    bg-[#101624]
                    border
                    border-white/10
                    rounded-[36px]
                    p-8
                  "
                >

                  {/* BEST TIME */}
                  <div>

                    <p
                      className="
                        uppercase
                        tracking-[4px]
                        text-[#D4A574]
                        text-xs
                        mb-4
                      "
                    >
                      Best Time To Visit
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-semibold
                        leading-tight
                      "
                    >
                      {destination.bestTime}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      Ideal season for spiritual exploration,
                      comfortable weather, cultural experiences,
                      and immersive journeys.
                    </p>

                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-14">

                    <p
                      className="
                        uppercase
                        tracking-[4px]
                        text-[#D4A574]
                        text-xs
                        mb-5
                      "
                    >
                      Destination Highlights
                    </p>

                    <div className="space-y-5">

                      {destination.highlights.map(
                        (item, index) => (
                          <div
                            key={index}
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
                              {item}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                  </div>

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