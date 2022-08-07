import { FormEvent, FormEventHandler, useState } from "react";
import Presenter from "./Presenter";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";

const Payment: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isDefaultSource, setIsDefaultSource] = useState(true);

  const [errors, setErrors] = useState<{
    cardNumberElementErrorMessage: string;
    cardExpiryElementErrorMessage: string;
    cardCvcElementErrorMessage: string;
    formSubmitErrorMessage: string;
  }>({
    cardNumberElementErrorMessage: "",
    cardExpiryElementErrorMessage: "",
    cardCvcElementErrorMessage: "",
    formSubmitErrorMessage: "",
  });

  const handleChangeCardNumberElement = (
    e: StripeCardNumberElementChangeEvent,
  ) => {
    setErrors((prev) => ({
      ...prev,
      cardNumberElementErrorMessage: e.error?.message ?? "",
    }));
  };

  const handleChangeCardExpiryElement = (
    e: StripeCardExpiryElementChangeEvent,
  ) => {
    setErrors((prev) => ({
      ...prev,
      cardExpiryElementErrorMessage: e.error?.message ?? "",
    }));
  };

  const handleChangeCardCvcElement = (e: StripeCardCvcElementChangeEvent) => {
    setErrors((prev) => ({
      ...prev,
      cardCvcElementErrorMessage: e.error?.message ?? "",
    }));
  };

  const handleChangeDefaultSource = () => {
    setIsDefaultSource((prev) => !prev);
  };

  const handleSubmit: FormEventHandler = async (event: FormEvent<Element>) => {
    event.preventDefault();

    const cardNumberElement = elements?.getElement("cardNumber");
    if (!stripe || !cardNumberElement) {
      return;
    }

    const { error, token } = await stripe.createToken(cardNumberElement);

    setErrors((prev) => ({
      ...prev,
      formSubmitErrorMessage: error?.message ?? "",
    }));

    if (!token) return;

    // NOTE: Stripeに生成されたtoken（トークン）をバックエンドでAPIを用意して送ればよい
    console.log("stripe token: ", token);
  };

  return (
    <Presenter
      isDefaultSource={isDefaultSource}
      onChangeDefaultSource={handleChangeDefaultSource}
      onChangeCardNumberElement={handleChangeCardNumberElement}
      onChangeCardExpiryElement={handleChangeCardExpiryElement}
      onChangeCardCvcElement={handleChangeCardCvcElement}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
};

export default Payment;
