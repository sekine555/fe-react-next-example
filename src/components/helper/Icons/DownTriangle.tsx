import React, { SVGProps } from "react";

const DownTriangle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.92093 8.04443L0.000257116 0.126022L13.8975 0.0978594L6.92093 8.04443Z"
        fill="#555555"
        className={"fill-current"}
      />
    </svg>
  );
};

export default DownTriangle;
