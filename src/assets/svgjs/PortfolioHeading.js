import * as React from "react";

const SvgPortfolioheading = (props) => (
  <div className="svg-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 135" {...props}>
      <text
        transform="translate(22.121)"
        fill="#4f46e5"
        fontSize={100}
        fontFamily="Lora"
        fontWeight={600}
        fontStyle="italic"
      >
        <tspan x={0} y={101}>
          {"Web Portfolio"}
        </tspan>
      </text>
      <g fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth={3}>
        <path d="M2.121 36.173 9.294 29M2.121 36.173l7.173 7.173" />
      </g>
      <g fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth={3}>
        <path d="m147.294 36.173-7.173 7.173M147.294 36.173 140.121 29" />
      </g>
    </svg>
  </div>
);

export default SvgPortfolioheading;
