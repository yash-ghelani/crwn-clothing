require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export async function handler(event) {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(`🚀 ~ file: create-payment-intent.js:19 ~ exports.handler= ~ error`, error);

    // console.log({error});

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
}
