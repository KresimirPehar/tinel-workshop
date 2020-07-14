import styled from 'styled-components';
import colors from '../../constants/colors';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  ${sizeMixin('100vw', '70px')}
  position: fixed;
  display: flex;
  background-color: ${colors.primary};
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  ${flexMixin('center', 'space-between')}
  width: 85%;
  margin-left: 20px;
`;

const CartStatus = styled.div`
  display: flex;
  cursor: pointer;
`;

const CartTitle = styled.div`
  margin-left: 10px;
  font-weight: bold;
  font-size: 15px;
`;

const CartContainer = styled.div`
  width: ${(props) => (props.isCartOpen ? '300px' : 0)};
  height: 100vh;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  right: 0;
  background-color: #ffffff;
`;

export {
  Container,
  LogoContainer,
  Content,
  CartStatus,
  CartTitle,
  CartContainer,
};
