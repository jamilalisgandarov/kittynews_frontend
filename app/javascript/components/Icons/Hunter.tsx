import * as React from "react"

const Hunter = (props) => (
  <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Hunter"}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z"
        fill="#21293C"
        fillRule="nonzero"
      />
      <path
        d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
        fill="#FFF"
      />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M4.55 10h1.18V7.625h2.54V10h1.18V4.363H8.27v2.29H5.73v-2.29H4.55z"
      />
    </g>
  </svg>
)

export default Hunter
