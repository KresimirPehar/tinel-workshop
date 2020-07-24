import styled from 'styled-components';
import StyledButton from '../../utils/style/components.style';
import colors from '../../constants/colors';
import { flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  overflow-y: scroll;
  height: 100vh;
  padding: 40px;
`;

const Heading = styled.div`
  ${flexMixin(null, 'space-between')}
  margin-bottom: 40px;
`;

const CloseCheckoutIcon = styled.img`
  cursor: pointer;
`;

const SubtotalContainer = styled.div`
  margin-bottom: 30px;
`;

const SubtotalTitle = styled.div`
  color: ${colors.font_lighter};
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`;

const Subtotal = styled.div`
  font-size: 12px;
  font-weight: bold;

  span {
    font-size: 24px;
  }
`;

const CheckoutButton = styled(StyledButton)`
  width: 100%;
  background-color: ${colors.secondary};
  margin-bottom: 120px;
`;

export {
  Container,
  Heading,
  CloseCheckoutIcon,
  CheckoutButton,
  SubtotalContainer,
  SubtotalTitle,
  Subtotal,
};
