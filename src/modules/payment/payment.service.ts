import stripe from "../../lib/stripe.js";

export const paymentService = {
  createPaymentIntent: async (amount: number, currency: string = "usd") => {
    // console.log(`[PAYMENT] Creating intent for amount: ${amount} ${currency}`);

    if (amount === undefined || amount === null || isNaN(amount)) {
      throw new Error("Invalid amount: amount is required and must be a number.");
    }

    // amount is in cents, so we multiply by 100 if the input is in dollars
    const centsAmount = Math.round(amount * 100);

    if (centsAmount < 50) {
      throw new Error(`Amount must be at least 50 cents (Got: ${centsAmount} cents)`);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: centsAmount,
      currency,
      payment_method_types: ["card"],
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  },
};
