import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const reservations =
      await prisma.reservation.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(
      reservations
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Error fetching reservations",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const reservation =
      await prisma.reservation.create({
        data: {
          name: body.name,
          email: body.email,
        },
      });

    return NextResponse.json(
      reservation
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Error creating reservation",
      },
      {
        status: 500,
      }
    );
  }
}