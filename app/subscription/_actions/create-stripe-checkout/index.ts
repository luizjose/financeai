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
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    mode: "subscription",
    success_url: process.env.APP_URL,
    cancel_url: process.env.APP_URL,
    subscription_data: {
      metadata: {
        clerk_user_id: userId,
      },
    },
    line_items: [
      {
        price: process.env.STRIPE_PREMIUM_PLAN_PRICE_ID,
        quantity: 1,
      },
    ],
  });
  return { sessionId: session.id };
};
