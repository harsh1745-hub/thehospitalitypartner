import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Container from "../Components/Container";

import { packages } from "../Data/package.js";

export default function Packages() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen">

        {/* HERO */}
        <section className="pt-40 pb-24 text-center">

          <Container>

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#D4A574]
                text-sm
                mb-5
              "
            >
              Curated Packages
            </p>

            <h1
              className="
                heading-font
                text-5xl
                sm:text-7xl
                leading-tight
              "
            >
              Spiritual Journeys
              Crafted For You
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
              Explore immersive travel experiences designed
              through premium hospitality, sacred destinations,
              and curated cultural exploration.
            </p>

          </Container>

        </section>

        {/* PACKAGES GRID */}
        <section className="pb-24">

          <Container>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >

              {packages.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#101624]
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[400px] overflow-hidden">

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
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* PACKAGE INFO */}
                    <div
                      className="
                        absolute
                        bottom-6
                        left-6
                        z-10
                      "
                    >

                      <p className="text-[#D4A574] text-sm mb-2">
                        {item.duration}
                      </p>

                      <h2
                        className="
                          heading-font
                          text-4xl
                          text-white
                        "
                      >
                        {item.title}
                      </h2>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* PRICE + BUTTON */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mt-8
                      "
                    >

                      <div>

                        <p className="text-sm text-gray-500">
                          Starting From
                        </p>

                        <h3
                          className="
                            text-3xl
                            font-semibold
                            text-[#D4A574]
                          "
                        >
                          {item.price}
                        </h3>

                      </div>

                      <Link
                        to={`/packages/${item.slug}`}
                        className="
                          bg-[#D4A574]
                          hover:bg-[#c7925c]
                          transition
                          text-black
                          px-6
                          py-3
                          rounded-full
                          font-medium
                        "
                      >
                        Explore
                      </Link>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}