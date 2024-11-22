"use server";

import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";

export const createStripeCheckout = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Usuário não autenticado");
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Chave secreta do Stripe não configurada");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-10-28.acacia",
  });
};
