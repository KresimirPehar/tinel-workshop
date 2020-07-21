import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  overflow-y: auto;
  height: calc(100vh - 70px);
`;

export default Container;
