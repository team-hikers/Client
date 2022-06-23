import styled from "styled-components";

type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #6A6A6A;
  color: #fff;
  border-radius: 7px;
  width: 350px;
  height: 40px;
`