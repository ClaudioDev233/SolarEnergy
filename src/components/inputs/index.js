import { Label, Input } from "./styles";

export default function Inputs({ label, ...otherProps }) {
  return (
    <Label>
      {label}
      <Input {...otherProps}></Input>
    </Label>
  );
}
