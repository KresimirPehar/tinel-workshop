import styled from 'styled-components';
import colors from '../../constants/colors';
import { flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  ${flexMixin('center')}
  height: 30px;
  background-color: ${colors.shadow};
  grid-column: 1/3;
`;

const Content = styled.div`
  margin-left: 50px;
`;

export { Container, Content };
