import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  width: 250px;
  height: 300px;
  box-shadow: 1px 2px 16px rgba(127, 127, 127, 0.35);
  border-radius: 8px;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  height: 40%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  margin: 0 auto;
`;

const Details = styled.div`
  flex-grow: 1;
  height: 100%;
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  width: 24px;
  height: 24px;
`;

const DateTime = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;

  img {
    margin-right: 5px;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
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

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${colors.primary};
  box-shadow: 1px 2px 8px rgba(127, 127, 127, 0.25);
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
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
