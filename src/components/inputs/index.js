export default function Inputs({ type, placeholder, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={name}
    ></input>
  );
}
