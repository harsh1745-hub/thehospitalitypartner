import { useParams } from "react-router-dom";

import Container from "../components/Container";

import { packages } from "../Data/package.js";

import { openWhatsApp } from "../Utils/Whatsapp.js";

export default function PackageDetails() {
  const { slug } = useParams();

  const singlePackage = packages.find(
    (item) => item.slug === slug
  );

  if (!singlePackage) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white font-body">
        Package Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#050816] text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[75vh]">

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${singlePackage.image})`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

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
                text-[#D4A574]
                uppercase
                tracking-[5px]
                text-xs
                sm:text-sm
                mb-5
                font-body
              "
            >
              Premium Spiritual Journey
            </p>

            <h1
              className="
                font-heading
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-[1.1]
                font-semibold
              "
            >
              {singlePackage.title}
            </h1>

            <div
              className="
                flex
                flex-wrap
                gap-6
                mt-8
                text-gray-300
                font-body
                text-sm
                sm:text-base
              "
            >

              <p>{singlePackage.duration}</p>

              <p className="text-[#D4A574] font-semibold">
                {singlePackage.price}
              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* CONTENT */}
      <section className="py-28">

        <Container>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-20
            "
          >

            {/* LEFT */}
            <div className="lg:col-span-2">

              {/* DESCRIPTION */}
              <div>

                <h2
                  className="
                    font-heading
                    text-3xl
                    sm:text-4xl
                    mb-8
                    font-semibold
                  "
                >
                  Journey Overview
                </h2>

                <p
                  className="
                    text-gray-300
                    leading-relaxed
                    font-body
                    text-sm
                    sm:text-base
                  "
                >
                  {singlePackage.description}
                </p>

              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-20">

                <h2
                  className="
                    font-heading
                    text-3xl
                    sm:text-4xl
                    mb-10
                    font-semibold
                  "
                >
                  Journey Highlights
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {singlePackage.highlights.map((item, index) => (
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

                      <p
                        className="
                          text-[#D4A574]
                          text-sm
                          uppercase
                          tracking-[3px]
                          mb-3
                          font-body
                        "
                      >
                        Experience
                      </p>

                      <h3
                        className="
                          text-xl
                          text-white
                          font-heading
                          font-medium
                          leading-relaxed
                        "
                      >
                        {item}
                      </h3>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <div
                className="
                  sticky
                  top-28
                  bg-[#101624]
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                "
              >

                <h3
                  className="
                    font-heading
                    text-2xl
                    sm:text-3xl
                    mb-10
                    font-semibold
                  "
                >
                  Package Details
                </h3>

                {/* INCLUSIONS */}
                <div>

                  <h4
                    className="
                      text-[#D4A574]
                      mb-5
                      font-heading
                      text-xl
                    "
                  >
                    Inclusions
                  </h4>

                  <div className="space-y-4 text-gray-300">

                    {singlePackage.inclusions.map((item, index) => (
                      <p
                        key={index}
                        className="
                          font-body
                          leading-relaxed
                        "
                      >
                        • {item}
                      </p>
                    ))}

                  </div>

                </div>

                {/* EXCLUSIONS */}
                <div className="mt-12">

                  <h4
                    className="
                      text-[#D4A574]
                      mb-5
                      font-heading
                      text-xl
                    "
                  >
                    Exclusions
                  </h4>

                  <div className="space-y-4 text-gray-300">

                    {singlePackage.exclusions.map((item, index) => (
                      <p
                        key={index}
                        className="
                          font-body
                          leading-relaxed
                        "
                      >
                        • {item}
                      </p>
                    ))}

                  </div>

                </div>

                {/* CTA */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hi, I want to know more about the ${singlePackage.title} package.`
                    )
                  }
                  className="
                    mt-14
                    w-full
                    bg-[#D4A574]
                    hover:bg-[#c7925c]
                    transition
                    duration-300
                    text-black
                    py-4
                    rounded-full
                    font-heading
                    font-medium
                  "
                >
                  Inquire Now
                </button>

              </div>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}