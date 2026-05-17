import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:8000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.token) {

        localStorage.setItem(
          "adminToken",
          data.token
        );

        navigate("/admin");
      }

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }
  };

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center p-6">

      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-[#101624]
          border
          border-white/10
          rounded-3xl
          p-10
        "
      >

        <p className="text-[#D4A574] uppercase tracking-[4px] text-sm mb-4">
          Admin Access
        </p>

        <h1 className="heading-font text-4xl text-white mb-10">
          Login Dashboard
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              bg-[#050816]
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              text-white
              outline-none
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full
              bg-[#050816]
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              text-white
              outline-none
            "
          />

        </div>

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
            font-medium
          "
        >
          Login
        </button>

      </form>

    </main>
  );
}