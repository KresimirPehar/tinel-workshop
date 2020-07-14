import React from 'react';
import {
  Container,
  ImageContainer,
  Content,
  Details,
  Category,
  DateTime,
  Date,
  Time,
  Title,
  Price,
  AddButton,
} from './WorkshopCard.style';
import dateIcon from '../../assets/date.svg';
import timeIcon from '../../assets/time.svg';

const WorkshopCard = () => {
  return (
    <Container>
      <ImageContainer>
        <img alt='workshop' />
      </ImageContainer>
      <Content>
        <Details>
          <Category>
            <img alt='workshop category' />
          </Category>
          <DateTime>
            <Date>
              <img alt='date' src={dateIcon} />
              date
            </Date>
            <Time>
              <img alt='time' src={timeIcon} />
              time
            </Time>
          </DateTime>
          <Title>Interaction design workshop</Title>
          <Price>
            123 <span>EUR</span>
          </Price>
        </Details>
        <AddButton type='button'>Add to Cart</AddButton>
      </Content>
    </Container>
  );
};

export default WorkshopCard;
