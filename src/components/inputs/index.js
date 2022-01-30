import { Label, Input, Error } from "./styles";

export default function Inputs({ label, errorMessage, ...otherProps }) {
  return (
    <Label>
      {label}
      <Input {...otherProps}></Input>
      <Error>{errorMessage}</Error>
    </Label>
  );
}
