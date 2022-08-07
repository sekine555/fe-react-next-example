import Layout from "@/components/helper/Layout";
import Payment from "@/components/Payment";
import { NextPage } from "next";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/getStripe";

const PaymentPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Elements stripe={getStripe()}>
          <Payment />
        </Elements>
      </Layout>
    </>
  );
};

export default PaymentPage;
