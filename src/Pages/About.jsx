import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Container from "../Components/Container";

export default function About() {
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
                font-body
              "
            >
              About The Hospitality Partner
            </p>

            <h1
              className="
                font-heading
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-[1.1]
                font-semibold
                max-w-4xl
                mx-auto
              "
            >
              Curating Sacred
              <span className="block mt-2 text-[#D4A574]">
                Travel Experiences
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-gray-400
                leading-relaxed
                font-body
                text-sm
                sm:text-base
              "
            >
              We are building immersive spiritual journeys
              rooted in culture, hospitality, wellness,
              and authentic Indian experiences designed
              for meaningful exploration.
            </p>

          </Container>

        </section>

        {/* STORY SECTION */}
        <section className="pb-28">

          <Container>

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-20
                items-center
              "
            >

              {/* LEFT */}
              <div>

                <p
                  className="
                    uppercase
                    tracking-[5px]
                    text-[#D4A574]
                    text-xs
                    sm:text-sm
                    mb-6
                    font-body
                  "
                >
                  Our Vision
                </p>

                <h2
                  className="
                    font-heading
                    text-4xl
                    sm:text-5xl
                    leading-[1.1]
                    font-semibold
                  "
                >
                  Redefining Spiritual
                  <span className="block mt-2 text-[#D4A574]">
                    Hospitality In India
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
                  "
                >
                  Our mission is to bridge spirituality,
                  premium hospitality, and cultural immersion
                  into thoughtfully curated travel experiences.
                </p>

                <p
                  className="
                    mt-6
                    text-gray-400
                    leading-relaxed
                    font-body
                    text-sm
                    sm:text-base
                  "
                >
                  Starting from sacred destinations like
                  Varanasi, Ayodhya, and Vrindavan, we aim
                  to craft journeys that feel peaceful,
                  immersive, and unforgettable.
                </p>

              </div>

              {/* RIGHT */}
              <div
                className="
                  bg-[#101624]
                  border
                  border-white/10
                  rounded-[40px]
                  p-8
                  sm:p-10
                "
              >

                <div className="space-y-10">

                  {[
                    {
                      title: "Curated Hospitality",
                      text:
                        "Premium stays and immersive comfort crafted around meaningful experiences.",
                    },

                    {
                      title: "Spiritual Exploration",
                      text:
                        "Sacred destinations, rituals, traditions, and cultural immersion.",
                    },

                    {
                      title: "Wellness & Peace",
                      text:
                        "Journeys designed for emotional peace, mindfulness, and soulful exploration.",
                    },
                  ].map((item, index) => (
                    <div key={index}>

                      <h3
                        className="
                          text-2xl
                          sm:text-3xl
                          font-heading
                          font-semibold
                          text-[#D4A574]
                          mb-4
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-gray-400
                          leading-relaxed
                          font-body
                          text-sm
                          sm:text-base
                        "
                      >
                        {item.text}
                      </p>

                    </div>
                  ))}

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