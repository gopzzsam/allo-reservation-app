"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );

      if (response.ok) {
        alert("Reservation Added!");

        setName("");
        setEmail("");
      } else {
        alert("Failed to add reservation");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Reservation Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}