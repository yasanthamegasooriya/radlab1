const express = require("express");
let cors = require("cors")
const stripe = require("stripe")("")
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Serve React build static files
app.use(express.static(path.join(__dirname, "store/build")));

app.post("/checkout", async (req, res) => {
     console.log(req.body)
     const items = req.body.items;
     const lineItems = [];
     items.forEach((item) => {
        lineItems.push(
            {
                price: item.price_id,
                quantity: item.quantity
            }
        )
     });

     const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "https://cakeit-shop.vercel.app/success",
        cancel_url: "https://cakeit-shop.vercel.app/cancel"
     });

     res.send(JSON.stringify({
        url: session.url
     }))
});

// Catch-all: serve React index.html for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "store/build", "index.html"));
});

app.listen(4000, '0.0.0.0', () => console.log("Running on port 4000"))