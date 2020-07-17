import styled from 'styled-components';

const Container = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 40px;
`;

const WorkshopsCounter = styled.div`
  margin-top: -20px;

  span {
    font-weight: bold;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px 0;
`;

const LoadMore = styled.div``;

export { Container, Title, WorkshopsCounter, List, LoadMore };
