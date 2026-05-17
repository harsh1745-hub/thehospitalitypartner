import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

import Container from "../Components/Container.jsx";

export default function SearchPanel() {
  return (
    <section className="relative z-30 -mt-24">

      <Container>

        <div
          className="
            backdrop-blur-xl
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-6
            lg:p-8
            shadow-2xl
          "
        >

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-5
              gap-6
            "
          >

            {/* DESTINATION */}
            <div className="flex items-center gap-4">

              <div className="text-[#D4A574]">
                <MapPin />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Destination
                </p>

                <h3 className="text-white font-medium">
                  Where to?
                </h3>
              </div>

            </div>

            {/* DATE */}
            <div className="flex items-center gap-4">

              <div className="text-[#D4A574]">
                <CalendarDays />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Travel Date
                </p>

                <h3 className="text-white font-medium">
                  Select Date
                </h3>
              </div>

            </div>

            {/* TRAVELERS */}
            <div className="flex items-center gap-4">

              <div className="text-[#D4A574]">
                <Users />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Travelers
                </p>

                <h3 className="text-white font-medium">
                  2 Adults
                </h3>
              </div>

            </div>

            {/* EXPERIENCE */}
            <div className="flex items-center gap-4">

              <div className="text-[#D4A574]">
                <Sparkles />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Experience
                </p>

                <h3 className="text-white font-medium">
                  Spiritual
                </h3>
              </div>

            </div>

            {/* BUTTON */}
            <button
              className="
                bg-[#D4A574]
                hover:bg-[#c7925c]
                transition
                text-black
                rounded-2xl
                font-semibold
                py-4
              "
            >
              Search Journey
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
}