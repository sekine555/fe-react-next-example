import { isObject } from "@/utils/isObject";
import React from "react";
import Image from "next/image";

interface Props<T> {
  value: T | undefined;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions: { label: string; value: T }[];
}

const Presenter = <T extends object | string>(props: Props<T>) => {
  const { value, onSelect, selectOptions } = props;
  return (
    <div className={"relative w-80 h-10"}>
      <select
        className={`appearance-none text-base border border-normal rounded shadow leading-tight focus:outline-none focus:shadow-outline bg-white hover:border-active w-80 h-10 px-2 py-2`}
        value={isObject(value) ? JSON.stringify(value) : value}
        onChange={(e) => onSelect(e)}
      >
        {selectOptions.map(({ label, value }, index) => (
          <option
            key={index}
            value={isObject(value) ? JSON.stringify(value) : value}
          >
            {label}
          </option>
        ))}
      </select>

      <div
        className={`mt-1 px-2 pointer-events-none absolute inset-y-0 right-0 flex items-center`}
      >
        <Image
          src="/icon/down-icon.svg"
          alt="drop-down-icon"
          width={9}
          height={7}
        />
      </div>
    </div>
  );
};

export default Presenter;
