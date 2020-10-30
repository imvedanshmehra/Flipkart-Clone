import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const stripe = require("stripe")(
  "sk_test_51HXPJiALBtiLlXJiAMfXXk7KzAdzl0L5prSrlQBHnP1duwnK40nkmherD2VtAW4vKgjO2n4RsKRIKLLRNqPRxJly00kxb58I7S"
);

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response): Promise<any> => {
    const total = request.query.total;

    console.log("Payment request recieved, TOTAL AMOUNT IS >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR"
    });
    
    response.status(201).send({
      clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);

// http://localhost:3001/sk-store-2b052/us-central1/api