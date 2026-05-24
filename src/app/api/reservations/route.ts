import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, productId } = body;

    const reservation = await prisma.$transaction(async (tx) => {

      const product = await tx.product.findUnique({
        where: {
          id: productId,
        },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      if (product.stock <= 0) {
        throw new Error("Out of stock");
      }

      await tx.product.update({
        where: {
          id: productId,
        },
        data: {
          stock: {
            decrement: 1,
          },
        },
      });

      const newReservation = await tx.reservation.create({
        data: {
          name,
          email,
          productId,
          status: "PENDING",
          expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        },
      });

      return newReservation;
    });

    return NextResponse.json(reservation);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Reservation failed",
      },
      {
        status: 500,
      }
    );
  }
}