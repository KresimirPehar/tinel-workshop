import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 20px;

  svg {
    margin-right: 10px;
  }
`;

const Label = styled.div`
  font-weight: bold;
  align-self: flex-end;
`;

export { Container, Label };
