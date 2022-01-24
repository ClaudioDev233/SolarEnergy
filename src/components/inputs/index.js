export default function Inputs({ type, placeholder, onChange }) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange}></input>
  );
}
