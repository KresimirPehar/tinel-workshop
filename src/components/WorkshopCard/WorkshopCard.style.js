import styled from 'styled-components';
import colors from '../../constants/colors';
import StyledButton from '../../utils/style/components.style';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';

const Container = styled.div`
  flex-basis: 33.333333%;
`;

const CardContainer = styled.div`
  ${sizeMixin('300px', '350px')}
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0;
  position: relative;
  top: 0;
  transition: box-shadow 1s, top 0.4s;

  a {
    text-decoration: none;
  }

  :hover {
    top: -10px;
    box-shadow: 1px 2px 16px rgba(127, 127, 127, 0.35);
  }
`;

const ImageContainer = styled.div`
  height: 40%;
  cursor: pointer;
`;

const BackgroundImage = styled.img`
  ${sizeMixin('100%', '100%')};
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
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: absolute;
  top: -10px;
  right: -15px;
  border-radius: 6px;

  svg {
    width: 18px;
    height: 18px;
  }

  path {
    fill: #fff;
  }
`;

const DateTime = styled.div`
  display: flex;
  margin: 5px 0 10px;
  font-size: 12px;
  color: #000;
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
  cursor: pointer;
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
  CardContainer,
  ImageContainer,
  BackgroundImage,
  Content,
  Details,
  Category,
  DateTime,
  Date,
  Time,
  Title,
  Price,
  AddButton,
};
