import styled from "styled-components";

type Props = {
  name: string;
  onChange: ({ target: { value, name } }: { target: { value: string; name: string } }) => void;
};

const Input = ({ name, onChange }: Props) => {
  return <StyledInput type='text' name={name} onChange={onChange} />;
};

export default Input;

const StyledInput = styled.input`
  border: 1px solid #6A6A6A;
  border-radius: 7px;
  width: 350px;
  height: 40px;
`