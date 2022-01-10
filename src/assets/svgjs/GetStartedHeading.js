import * as React from "react";

const SvgGetStartedheading = (props) => (
  <div className="svg-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 543.621 135"
      {...props}
    >
      <g data-name="Get Started heading">
        <text
          data-name="Get Started"
          transform="translate(14.621)"
          fill="#4f46e5"
          fontSize={100}
          fontFamily="Lora"
          fontWeight={600}
          fontStyle="italic"
        >
          <tspan x={0.8} y={101}>
            {"Get Started"}
          </tspan>
        </text>
        <g
          data-name="Less than sign"
          fill="none"
          stroke="#4f46e5"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <path data-name="Line 5" d="m2.121 34.586 7.173-7.173" />
          <path data-name="Line 6" d="m2.121 34.586 7.173 7.173" />
        </g>
        <g
          data-name="Greater than sign"
          fill="none"
          stroke="#4f46e5"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <path data-name="Line 7" d="m102.999 34.587-7.173 7.173" />
          <path data-name="Line 8" d="m102.999 34.586-7.173-7.173" />
        </g>
      </g>
    </svg>
  </div>
);

export default SvgGetStartedheading;
