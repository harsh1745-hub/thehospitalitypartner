import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">

      <Container>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-14
          "
        >

          {/* BRAND */}
          <div>

            <h2
              className="
                font-heading
                text-3xl
                sm:text-4xl
                text-[#D4A574]
                leading-tight
                font-semibold
              "
            >
              The Hospitality Partner
            </h2>

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
              Curated spiritual journeys crafted through
              premium hospitality and immersive cultural experiences.
            </p>

          </div>

          {/* DESTINATIONS */}
          <div>

            <h3
              className="
                text-white
                font-heading
                font-semibold
                text-xl
                mb-6
              "
            >
              Destinations
            </h3>

            <ul
              className="
                space-y-4
                text-gray-400
                font-body
              "
            >

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Varanasi
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Ayodhya
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Vrindavan
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Prayagraj
              </li>

            </ul>

          </div>

          {/* EXPERIENCES */}
          <div>

            <h3
              className="
                text-white
                font-heading
                font-semibold
                text-xl
                mb-6
              "
            >
              Experiences
            </h3>

            <ul
              className="
                space-y-4
                text-gray-400
                font-body
              "
            >

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Temple Walks
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Boat Rides
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Wellness Retreats
              </li>

              <li className="hover:text-[#D4A574] transition duration-300 cursor-pointer">
                Food Trails
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3
              className="
                text-white
                font-heading
                font-semibold
                text-xl
                mb-6
              "
            >
              Contact
            </h3>

            <div
              className="
                space-y-4
                text-gray-400
                font-body
                text-sm
                sm:text-base
              "
            >

              <p>Varanasi, Uttar Pradesh</p>

              <p>contact@hospitalitypartner.com</p>

              <p>+91 8299528655</p>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {/* INSTAGRAM */}
              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:border-[#D4A574]
                  hover:text-[#D4A574]
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={18} />
              </button>

              {/* FACEBOOK */}
              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:border-[#D4A574]
                  hover:text-[#D4A574]
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF size={18} />
              </button>

              {/* EMAIL */}
              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:border-[#D4A574]
                  hover:text-[#D4A574]
                  transition-all
                  duration-300
                "
              >
                <MdEmail size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10
            mt-20
            pt-8
            text-center
            text-gray-500
            text-sm
            font-body
          "
        >
          © 2026 The Hospitality Partner. All rights reserved.
        </div>

      </Container>

    </footer>
  );
}