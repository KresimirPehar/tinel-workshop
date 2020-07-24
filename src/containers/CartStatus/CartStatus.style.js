import styled from 'styled-components';
import { flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  ${flexMixin('center')}
  cursor: pointer;
`;

const CartIcons = styled.div`
  position: relative;
`;

const CartIcon = styled.img``;

const CartIndicatorIcon = styled.img`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: -3px;
  right: -5px;
`;

const CartTitle = styled.div`
  margin-left: 10px;
  font-weight: ${(props) => (props.isHighlighted ? 'bolder' : 'bold')};
  font-size: ${(props) => (props.isHighlighted ? '20px' : '15px')};
`;

export { CartIcons, CartIcon, CartIndicatorIcon, Container, CartTitle };
