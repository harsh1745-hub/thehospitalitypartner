import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [inquiries, setInquiries] = useState([]);

  const fetchInquiries = async () => {

    try {

      const response = await fetch(
        "http://localhost:8000/api/inquiries"
      );

      const data = await response.json();

      setInquiries(data);

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <main className="min-h-screen bg-[#050816] text-white p-8">

      {/* HEADER */}
      <div className="mb-12">

        <p className="text-[#D4A574] uppercase tracking-[4px] text-sm mb-3">
          Admin Dashboard
        </p>

        <h1 className="heading-font text-5xl">
          Inquiry Management
        </h1>

      </div>

      {/* TABLE */}
      <div
        className="
          overflow-x-auto
          rounded-3xl
          border
          border-white/10
          bg-[#101624]
        "
      >

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left">

              <th className="p-6">Name</th>

              <th className="p-6">Phone</th>

              <th className="p-6">Destination</th>

              <th className="p-6">Travel Date</th>

              <th className="p-6">Travelers</th>

            </tr>

          </thead>

          <tbody>

            {inquiries.map((item) => (
              <tr
                key={item._id}
                className="border-b border-white/5"
              >

                <td className="p-6">
                  {item.name}
                </td>

                <td className="p-6">
                  {item.phone}
                </td>

                <td className="p-6">
                  {item.destination}
                </td>

                <td className="p-6">
                  {item.date}
                </td>

                <td className="p-6">
                  {item.travelers}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}