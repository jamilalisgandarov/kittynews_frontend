import * as React from "react"

const Voter = (props) => (
  <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Upvoter"}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z"
        fill="#FDD1BE"
        fillRule="nonzero"
      />
      <path
        d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
        fill="#FFF"
      />
      <path
        d="M7.206 4.102a.259.259 0 0 0-.412 0l-2.75 4a.25.25 0 0 0 .206.392h5.5a.25.25 0 0 0 .206-.392l-2.75-4Z"
        fill="#F64900"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default Voter
