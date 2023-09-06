import * as React from "react";
import {
  Unstable_NumberInput as NumberInput,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";

const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  props,
  ref
) {
  return (
    <NumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: (
            <svg
              style={{ border: "2px solid #D9D9D9", color: "#D9D9D9" }}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        decrementButton: {
          children: (
            <svg
              style={{ border: "2px solid #D9D9D9", color: "#D9D9D9" }}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                fill="currentColor"
              />
            </svg>
          ),
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const InputNumber = () => <CustomNumberInput aria-label="Demo number input" />;
export default InputNumber;

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === "dark" ? "#afb8c1" : "#24292f"};
  background: ${theme.palette.mode === "dark" ? "#24292f" : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#00B078" : "#afb8c1"};
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  width:90px;
  overflow:hidden;

  &.${numberInputClasses.focused} {
    border-color: "#00B078";
    box-shadow: 0 0 0 3px #63C861;
    border-radius: 3px;
  }

  &:hover {
    border-color: ${"#00B078"};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.mode === "dark" ? "#afb8c1" : "#24292f"};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
  width:71px;
`
);

const StyledButton = styled("button")(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.2;
  background: ${theme.palette.mode === "dark" ? "#24292f" : "#fff"};
  border: 0;
  color: ${theme.palette.mode === "dark" ? "#afb8c1" : "#24292f"};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? "#32383f" : "#f6f8fa"};
    border-color: ${theme.palette.mode === "dark" ? "#57606a" : "#afb8c1"};
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  
  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`
);
