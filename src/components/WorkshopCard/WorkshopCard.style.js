import styled from 'styled-components';
import colors from '../../constants/colors';
import StyledButton from '../../utils/style/components.style';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  ${sizeMixin('250px', '300px')}
  box-shadow: 1px 2px 16px rgba(127, 127, 127, 0.35);
  border-radius: 8px;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  height: 40%;
`;

const Content = styled.div`
  ${sizeMixin('80%', '60%')}
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Details = styled.div`
  flex-grow: 1;
  height: 100%;
  position: relative;
`;

const Category = styled.div`
  ${sizeMixin('24px', '24px')}
  position: absolute;
  top: -10px;
  right: 0;
`;

const DateTime = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
`;

const Date = styled.div`
  ${flexMixin('center')};
  margin-right: 10px;
  font-weight: bold;

  img {
    margin-right: 5px;
  }
`;

const Time = styled.div`
  ${flexMixin('center')};
  font-weight: bold;

  img {
    margin-right: 5px;
  }
`;

const Title = styled.div`
  color: ${colors.secondary};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  color: ${colors.font_darker};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  span {
    font-size: 12px;
  }
`;

const AddButton = styled(StyledButton)`
  background-color: ${colors.primary};
`;

export {
  Container,
  Content,
  Details,
  Category,
  ImageContainer,
  DateTime,
  Date,
  Time,
  Title,
  Price,
  AddButton,
};
