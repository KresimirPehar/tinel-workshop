import styled from 'styled-components';
import { flexMixin } from '../../utils/style/mixins.style';
import colors from '../../constants/colors';

const LoadingSpinnerContainer = styled.div`
  ${flexMixin('center', 'center')};
  height: 50vh;
  margin-right: 300px;

  div {
    border-color: ${colors.secondary} ${colors.secondary} transparent;
  }
`;

export default LoadingSpinnerContainer;
