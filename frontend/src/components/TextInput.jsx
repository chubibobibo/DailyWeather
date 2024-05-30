import { Input } from "@material-tailwind/react";

function TextInput({ label, name, type, size, required }) {
  return (
    <main>
      <Input label={label} name={name} size={size} required={required} />
    </main>
  );
}
export default TextInput;
