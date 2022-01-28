import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KMRI3DU1mn4TxXQvyoodp2wJoEgC8sLs7QctslATmWbxDog80JIxgYMMWvtqGB7sbtVF4ocfCZCEnqy48adiFcG00gUlewyj2";
  const tokenHandler = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Joy Boutique"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={tokenHandler}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
