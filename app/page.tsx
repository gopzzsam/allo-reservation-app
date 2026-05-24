"use client"

import { useState } from "react"

export default function Home() {
  const [guests, setGuests] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guests: Number(guests),
        date,
      }),
    })

    if (response.ok) {
      alert("Reservation Created Successfully")
      setGuests("")
      setDate("")
    } else {
      alert("Something went wrong")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Restaurant Reservation
        </h1>

        <input
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Reserve Table
        </button>
      </form>
    </div>
  )
}