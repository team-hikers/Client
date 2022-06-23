type Props = {
  name: string;
  onChange: ({ target: { value, name } }: { target: { value: string; name: string } }) => void;
};

const Input = ({ name, onChange }: Props) => {
  return <input type='text' name={name} onChange={onChange} />;
};

export default Input;
