import { Input, Label, Error } from "./styles";

export default function InputDate({ label, errorMessage, ...otherProps }) {
  return (
    <Label>
      {label}
      <Input {...otherProps} />
      <Error>{errorMessage}</Error>
    </Label>
  );
}
