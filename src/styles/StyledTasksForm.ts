import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
`;

export const Select = styled.select`
  padding: 5px;
`;

export const Error = styled.p`
  color: red;
  font-size: 12px;
`;