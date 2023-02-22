require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
  try {
    const { amount } = event.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      payment_method_types: ["card"],
    })

    return {
      statusCode: 200,
      body: JSON.stringify({paymentIntent}),
    };
  } catch (error) {
    console.log(`create-payment-intent.js:18 ~ exports.handler= ~ error`, error);

    return {
      statusCode: 400,
      body: JSON.stringify({error}),
    };
  }
};
