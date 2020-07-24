import styled from 'styled-components';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';
import colors from '../../constants/colors';
import StyledButton from '../../utils/style/components.style';

const Container = styled.div`
  ${sizeMixin('40vw', '70vh')}
  position: absolute;
  right: 30%;
  background-color: #fff;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 80px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 35px;
`;

const Heading = styled.div`
  ${flexMixin('center', 'space-between')}
  margin-bottom: 50px;
`;

const CloseCheckoutIcon = styled.img`
  cursor: pointer;
`;

const FlexContainer = styled.div`
  ${flexMixin('center', 'space-between')}
`;

const GenderSelect = styled.div`
  select {
    ${sizeMixin('300px', '30px')}
    position: relative;
    top: -17px;
    border: 0;
    border-bottom: 1px solid black;
    border-radius: 0;
    background-color: white;
    border-bottom: ${(props) =>
      props.isError ? '2px solid red' : '1px solid black'};
  }
`;

const GenderLabel = styled.div`
  position: relative;
  top: -24px;
  font-weight: bold;
`;

const AgreeChecbox = styled.div`
  input {
    ${sizeMixin('30px', '30px')}
  }

  span {
    position: relative;
    top: -8px;
    font-weight: bold;
  }
  margin-bottom: 20px;
`;

const CheckoutButton = styled(StyledButton)`
  width: 150px;
  background-color: ${colors.primary};
`;

export {
  Container,
  Heading,
  Title,
  CloseCheckoutIcon,
  FlexContainer,
  GenderSelect,
  GenderLabel,
  AgreeChecbox,
  CheckoutButton,
};
