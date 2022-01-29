import { Input, Label } from "./styles";

export default function InputDate({ label, ...otherProps }) {
  return (
    <Label>
      {label}
      <Input {...otherProps} />
    </Label>
  );
}
