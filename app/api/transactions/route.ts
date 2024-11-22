import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server"; // Função do Clerk para pegar a autenticação
import { db } from "@/app/_lib/prisma";

export async function GET(req: any) {
  const transactions = await db.transaction.findMany({});

  // Se não estiver autenticado
  return NextResponse.json({
    message: "GET /api/transactions ",
    transactions,
  });
}
