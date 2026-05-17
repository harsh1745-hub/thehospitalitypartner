import {
  ShieldCheck,
  Headphones,
  Building2,
  Users,
} from "lucide-react";

import Container from "../Components/Container.jsx";

const trustData = [
  {
    icon: Users,
    title: "1000+ Travelers",
    subtitle: "Trusted Experiences",
  },
  {
    icon: Building2,
    title: "Luxury Stays",
    subtitle: "Handpicked Hotels",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Always With You",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    subtitle: "Safe & Trusted",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-20">

      <Container>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {trustData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#101624]
                  border
                  border-white/10
                  rounded-[28px]
                  p-8
                  hover:border-[#D4A574]/40
                  transition-all
                  duration-500
                  group
                "
              >

                {/* ICON */}
                <div
                  className="
                    text-[#D4A574]
                    mb-6
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={30} />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    font-heading
                    font-semibold
                    text-white
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                    text-sm
                    sm:text-base
                    text-gray-400
                    mt-3
                    font-body
                    leading-relaxed
                  "
                >
                  {item.subtitle}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}