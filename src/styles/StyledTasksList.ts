import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ff5050;
  color: white;
  border: none;
  cursor: pointer;
`;