import styled from 'styled-components';
import colors from '../../constants/colors';
import { flexMixin } from '../../utils/style/mixins.style';

const LoadingSpinnerContainer = styled.div`
  ${flexMixin('center', 'center')};
  height: 50vh;
  margin-right: 300px;

  div {
    border-color: ${colors.secondary} ${colors.secondary} transparent;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 130px 1fr;
`;

const Info = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  grid-row: 1;
  margin-top: 40px;
`;

const WorkshopsCounter = styled.div`
  grid-row: 1;
  margin-top: -20px;
  color: ${colors.font_lighter};
  font-weight: bold;

  span {
    color: #000;
  }
`;

const List = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LoadMore = styled.div``;

export {
  LoadingSpinnerContainer,
  Grid,
  Info,
  Container,
  Title,
  WorkshopsCounter,
  List,
  LoadMore,
};
