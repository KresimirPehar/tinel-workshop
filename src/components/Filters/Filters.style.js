import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  display: grid;
  grid-template-rows: 130px 1fr;
`;

const Title = styled.div`
  align-self: flex-end;
  margin-bottom: 35px;
  margin-left: 60px;
  color: ${colors.font_lighter};
  font-weight: bold;
`;

const FilterList = styled.div``;

export { Container, Title, FilterList };
