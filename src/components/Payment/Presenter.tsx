import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";
import { FormEvent } from "react";
import CheckBox from "@/components/helper/CheckBox";

interface Props {
  isDefaultSource: boolean;
  onChangeDefaultSource: () => void;
  onChangeCardNumberElement: (e: StripeCardNumberElementChangeEvent) => void;
  onChangeCardExpiryElement: (e: StripeCardExpiryElementChangeEvent) => void;
  onChangeCardCvcElement: (e: StripeCardCvcElementChangeEvent) => void;
  errors: {
    cardNumberElementErrorMessage: string;
    cardExpiryElementErrorMessage: string;
    cardCvcElementErrorMessage: string;
    formSubmitErrorMessage: string;
  };
  onSubmit: (event: FormEvent<Element>) => void;
}

const Presenter: React.FC<Props> = (props) => {
  const {
    isDefaultSource,
    onChangeDefaultSource,
    onChangeCardNumberElement,
    onChangeCardExpiryElement,
    onChangeCardCvcElement,
    errors,
    onSubmit,
  } = props;

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={"grid grid-cols-12 px-5 sm:px-20 pb-6"}>
          <div className={"col-span-12 md:col-span-8"}>
            <div className={"grid grid-cols-8 md:col-span-8 items-center mb-3"}>
              <span
                className={
                  "col-span-12 md:col-span-8 xl:col-span-3 text-2xl md:text-xl"
                }
              >
                カード番号
              </span>
              <CardNumberElement
                onChange={onChangeCardNumberElement}
                className={
                  "col-span-12 md:col-span-8 xl:col-span-5 xl:col-start-4 mt-1 xl:mt-0 h-8 border-0.5 form-input border-gray-darkest"
                }
              />
              {errors.cardNumberElementErrorMessage && (
                <div
                  className={
                    "col-span-12 md:col-span-8 xl:col-span-3 mt-1 text-xs text-red-500"
                  }
                >
                  {errors.cardNumberElementErrorMessage}
                </div>
              )}
            </div>

            <div className={"grid grid-cols-8 md:col-span-8 items-center mb-3"}>
              <span
                className={
                  "col-span-12 md:col-span-8 xl:col-span-3 text-2xl md:text-xl"
                }
              >
                有効期限
              </span>
              <CardExpiryElement
                onChange={onChangeCardExpiryElement}
                className={
                  "col-span-3 md:col-span-4 xl:col-span-2 xl:col-start-4 mt-1 xl:mt-0 md:mr-10 h-8 border-0.5 form-input border-gray-darkest"
                }
              />
              {errors.cardExpiryElementErrorMessage && (
                <div
                  className={
                    "col-span-12 md:col-span-8 xl:col-span-3 mt-1 text-xs text-red-500"
                  }
                >
                  {errors.cardExpiryElementErrorMessage}
                </div>
              )}
            </div>

            <div className={"grid grid-cols-8 md:col-span-8 items-center mb-3"}>
              <span
                className={
                  "col-span-12 md:col-span-8 xl:col-span-3 text-2xl md:text-xl"
                }
              >
                セキュリティコード
              </span>
              <CardCvcElement
                onChange={onChangeCardCvcElement}
                className={
                  "col-span-3 md:col-span-4 xl:col-span-2 xl:col-start-4 mt-1 xl:mt-0 md:mr-10 h-8 border-0.5 form-input border-gray-darkest"
                }
              />
              {errors.cardCvcElementErrorMessage && (
                <div
                  className={
                    "col-span-12 md:col-span-8 xl:col-span-3 mt-1 text-xs text-red-500"
                  }
                >
                  {errors.cardCvcElementErrorMessage}
                </div>
              )}
            </div>
            <div className={"grid grid-cols-8"}>
              <div className="col-span-12 xl:col-span-5 mt-4">
                <CheckBox
                  label={"既定のお支払い方法として設定"}
                  checked={isDefaultSource}
                  onCheck={onChangeDefaultSource}
                />
              </div>
            </div>

            <div className={"grid grid-cols-8"}>
              <div className={"col-span-12 mt-8"}>
                <button
                  className={
                    "w-full h-9 font-semibold rounded-medium border border-gray-darkest hover:bg-indigo-100"
                  }
                  type={"submit"}
                >
                  登録
                </button>
              </div>
            </div>

            {errors.formSubmitErrorMessage && (
              <div className={"mt-4 text-xs text-red-500"}>
                {errors.formSubmitErrorMessage}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Presenter;
