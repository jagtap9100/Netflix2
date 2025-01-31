import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51QhAZFD5UswYFiRZWXmiElbZkywMztIEUigs4L776EZbj4FPln5SdnYACcRH0WaiCxx4XINrTrVfOHuj6GesrDxp00Zksb1ikP"
    );
  }
  return stripePromise;
};

export default getStripe;
