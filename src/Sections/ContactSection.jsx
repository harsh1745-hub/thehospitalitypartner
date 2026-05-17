import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../Components/Container.jsx";

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8000/api/inquiries",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        alert("Inquiry Submitted Successfully");

        setFormData({
          name: "",
          phone: "",
          destination: "",
          date: "",
          travelers: "",
          message: "",
        });

      }

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    }
  };

  return (
    <section className="py-24">

      <Container>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#D4A574]
                text-sm
                mb-5
                font-body
              "
            >
              Plan Your Journey
            </p>

            <h2
              className="
                font-heading
                text-4xl
                sm:text-5xl
                text-white
                leading-tight
                font-semibold
              "
            >
              Let’s Curate Your
              Spiritual Experience
            </h2>

            <p
              className="
                mt-8
                text-gray-400
                leading-relaxed
                max-w-xl
                font-body
                text-sm
                sm:text-base
              "
            >
              Share your travel preferences and our team
              will help craft a personalized spiritual journey
              designed around comfort, culture, and immersive experiences.
            </p>

            {/* INFO CARDS */}
            <div className="mt-12 space-y-5">

              {[
                "Personalized Spiritual Packages",
                "Premium Hospitality Support",
                "Flexible Travel Planning",
                "Curated Cultural Experiences",
              ].map((item, index) => (
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

                  <p className="text-gray-300 font-body">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="
              bg-[#101624]
              border
              border-white/10
              rounded-[32px]
              p-8
              sm:p-10
            "
          >

            {/* INPUT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  bg-[#050816]
                  border
                  border-white/10
                  focus:border-[#D4A574]
                  outline-none
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-body
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="
                  bg-[#050816]
                  border
                  border-white/10
                  focus:border-[#D4A574]
                  outline-none
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-body
                "
              />

              <input
                type="text"
                name="destination"
                placeholder="Preferred Destination"
                value={formData.destination}
                onChange={handleChange}
                className="
                  bg-[#050816]
                  border
                  border-white/10
                  focus:border-[#D4A574]
                  outline-none
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-body
                "
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="
                  bg-[#050816]
                  border
                  border-white/10
                  focus:border-[#D4A574]
                  outline-none
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-body
                "
              />

              <input
                type="number"
                name="travelers"
                placeholder="Travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="
                  bg-[#050816]
                  border
                  border-white/10
                  focus:border-[#D4A574]
                  outline-none
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  font-body
                  sm:col-span-2
                "
              />

            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your journey..."
              value={formData.message}
              onChange={handleChange}
              className="
                mt-5
                w-full
                bg-[#050816]
                border
                border-white/10
                focus:border-[#D4A574]
                outline-none
                rounded-2xl
                px-5
                py-4
                text-white
                resize-none
                font-body
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                mt-8
                w-full
                bg-[#D4A574]
                hover:bg-[#c7925c]
                transition
                text-black
                py-4
                rounded-2xl
                font-heading
                font-medium
              "
            >
              Submit Inquiry
            </button>

          </motion.form>

        </div>

      </Container>

    </section>
  );
}