import styled from "styled-components";

const Todo = styled.form`
  width: 600px;
  border: 0.5px solid #616161;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 10px 10px 30px #bebebe, -20px -20px 60px #ffffff;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export default Todo;
