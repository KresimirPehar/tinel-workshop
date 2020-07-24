import styled from 'styled-components';
import colors from '../../constants/colors';
import { flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  display: flex;
  height: 150px;
  margin: 20px 0;
`;

const DeleteCheckoutItemIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 30px;
  cursor: pointer;
`;

const Details = styled.div`
  ${flexMixin(null, 'center')}
  flex-direction: column;
  width: 60%;
  position: relative;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  background-color: ${colors.shadow};
`;

const Image = styled.img`
  width: 40%;
  border-radius: 8px 0 0 8px;
`;

const Title = styled.div`
  width: 92%;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${colors.secondary};
`;

const PriceContainer = styled.div`
  ${flexMixin('center')}

  select {
    height: 40px;
    font-weight: bold;
    border: 1px solid ${colors.secondary};
    margin-right: 10px;
  }
`;

const Price = styled.div`
  font-size: 12px;

  span {
    font-weight: bold;
    font-size: 18px;
  }
`;

export {
  Container,
  DeleteCheckoutItemIcon,
  Details,
  Image,
  Title,
  PriceContainer,
  Price,
};
