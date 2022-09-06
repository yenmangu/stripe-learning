require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET);
console.log('secret: ', process.env.STRIPE_SECRET);

(async () => {
    console.log(stripe.plans.list());
})();