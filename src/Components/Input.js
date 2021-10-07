import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  color: #616161;
  border: 0.5px solid #616161;
  box-shadow: 10px 10px 30px #bebebe, -20px -20px 60px #ffffff;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default Input;
