import { InputContainer } from "./styles";

export default function Inputs({ label, ...otherProps }) {
  return (
    <InputContainer>
      {label}
      <input {...otherProps}></input>
    </InputContainer>
  );
}
