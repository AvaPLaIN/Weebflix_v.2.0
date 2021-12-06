const stripe = require('stripe')(process.env.STRIPE_PUBLIC_KEY);

const connectStripe = async () => {
  console.log('stripe connect');
};

module.exports = connectStripe;
