import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Children = styled.div`
  flex: 1;
  margin-top: 70px;
  overflow-y: auto;
`;

export { Container, Content, Children };
