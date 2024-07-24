import styled from "styled-components";

export const TimeIndecator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 64px;
  height: 32px;
  margin: 10px;
  color: ${(props) => props.cl};
  /* color: ${({ cl }) => cl}; distrac */
  background-color: ${(props) => {
    return props.bg;
  }};
`;
