import { Label, Input } from "./styles";

export default function Checkbox({ label, ...otherProps }) {
  return (
    <Label>
      <Input {...otherProps}></Input>
      {label}
    </Label>
  );
}
