import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

import Container from "../Components/Container.jsx";

import logo from "../assets/thplogo.png";

import { navLinks } from "../Data/navigation.js";

import { openWhatsApp } from "../Utils/Whatsapp.js";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        backdrop-blur-2xl
        bg-[#050816]/80
      "
    >

      <Container
        className="
          flex
          items-center
          justify-between
          h-[82px]
          sm:h-[92px]
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="The Hospitality Partner"
            className="
              w-11
              h-11
              sm:w-14
              sm:h-14
              object-contain
              shrink-0
            "
          />

          <div className="block">

            <h1
              className="
                text-sm
                sm:text-xl
                font-heading
                font-semibold
                tracking-wide
                text-[#D4A574]
                leading-tight
              "
            >
              The Hospitality Partner
            </h1>

            <p
              className="
                text-[9px]
                sm:text-[11px]
                font-body
                uppercase
                tracking-[3px]
                sm:tracking-[4px]
                text-gray-400
                mt-1
              "
            >
              Sacred Hospitality
            </p>

          </div>

        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden
            xl:flex
            items-center
            gap-10
          "
        >

          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="
                text-sm
                font-body
                text-white/80
                hover:text-[#D4A574]
                transition
                duration-300
              "
            >
              {item.title}
            </Link>
          ))}

        </nav>

        {/* DESKTOP CTA */}
        <div
          className="
            hidden
            xl:flex
            items-center
            gap-4
          "
        >

          {/* CALL BUTTON */}
          <a
            href="tel:+918299528655"
            className="
              flex
              items-center
              gap-2
              border
              border-white/10
              hover:border-[#D4A574]
              hover:text-[#D4A574]
              transition-all
              duration-300
              px-5
              py-3
              rounded-full
              text-sm
              font-body
              font-medium
              text-white
            "
          >

            <Phone size={16} />

            Call Us

          </a>

          {/* PLAN JOURNEY */}
          <button
            onClick={() =>
              openWhatsApp(
                "Hi, I want to plan a spiritual journey with The Hospitality Partner."
              )
            }
            className="
              bg-[#D4A574]
              hover:bg-[#c7925c]
              transition-all
              duration-300
              text-black
              px-7
              py-3
              rounded-full
              text-sm
              font-heading
              font-medium
              shadow-xl
              shadow-[#D4A574]/10
            "
          >
            Plan Journey
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="
            xl:hidden
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white
            hover:border-[#D4A574]
            hover:text-[#D4A574]
            transition-all
            duration-300
            shrink-0
          "
        >

          {mobileMenu ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <Menu size={24} strokeWidth={2.2} />
          )}

        </button>

      </Container>

      {/* MOBILE MENU */}
      <div
        className={`
          xl:hidden
          fixed
          top-[82px]
          sm:top-[92px]
          left-0
          w-full
          bg-[#050816]
          border-t
          border-white/10
          transition-all
          duration-300
          ${
            mobileMenu
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }
        `}
      >

        <div
          className="
            flex
            flex-col
            gap-6
            px-6
            py-8
          "
        >

          {/* MOBILE NAV LINKS */}
          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              onClick={() =>
                setMobileMenu(false)
              }
              className="
                text-base
                sm:text-lg
                font-body
                text-white/80
                hover:text-[#D4A574]
                transition
                duration-300
              "
            >
              {item.title}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <div
            className="
              flex
              flex-col
              gap-4
              mt-3
            "
          >

            {/* CALL BUTTON */}
            <a
              href="tel:+918299528655"
              className="
                flex
                items-center
                justify-center
                gap-2
                border
                border-white/10
                text-white
                py-3.5
                rounded-full
                text-center
                font-body
                font-medium
                hover:border-[#D4A574]
                hover:text-[#D4A574]
                transition-all
                duration-300
              "
            >

              <Phone size={18} />

              Call Us

            </a>

            {/* PLAN JOURNEY */}
            <button
              onClick={() =>
                openWhatsApp(
                  "Hi, I want to plan a spiritual journey with The Hospitality Partner."
                )
              }
              className="
                bg-[#D4A574]
                text-black
                py-3.5
                rounded-full
                font-heading
                font-medium
                hover:bg-[#c7925c]
                transition-all
                duration-300
              "
            >
              Plan Journey
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}