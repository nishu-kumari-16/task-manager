import { ChangeEvent, FC, forwardRef } from "react";
import Input from ".";
import { InputProps } from "@mui/material/Input";
import style from "./input.module.scss";

const NumberInput: FC<InputProps> = forwardRef((props, forwardedRef) => {
  const handleNumberInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = /[^0-9]/g;
    event.target.value = event.target.value.replace(regex, "");
    props.onChange?.(event);
  };

  return (
    <Input
      {...props}
      type="text"
      onChange={handleNumberInputChange}
      ref={forwardedRef}
      className={`${style.numberInputContainer} ${props.className}`}
      autoComplete="off"
    />
  );
});

export default NumberInput;
