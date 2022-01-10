import * as React from "react";

const SvgHowheading = (props) => (
  <div className="svg-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.295 135"
      {...props}
    >
      <g data-name="How heading">
        <text
          data-name="How?"
          transform="translate(9.295)"
          fill="#4f46e5"
          fontSize={100}
          fontFamily="Lora"
          fontWeight={600}
          fontStyle="italic"
        >
          <tspan x={1.95} y={101}>
            {"How?"}
          </tspan>
        </text>
        <g
          data-name="Less than sign"
          fill="none"
          stroke="#6366f1"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <path data-name="Line 5" d="m2.122 34.586 7.173-7.173" />
          <path data-name="Line 6" d="m2.122 34.586 7.173 7.173" />
        </g>
        <g
          data-name="Greater than sign"
          fill="none"
          stroke="#6366f1"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <path data-name="Line 7" d="m105.517 34.587-7.173 7.173" />
          <path data-name="Line 8" d="m105.517 34.586-7.173-7.173" />
        </g>
      </g>
    </svg>
  </div>
);

export default SvgHowheading;
