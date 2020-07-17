import React from 'react';
import {
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
} from './WorkshopCard.style';
import dateIcon from '../../assets/date.svg';
import timeIcon from '../../assets/time.svg';
import getDateAndTime from '../../utils/helpers';

const WorkshopCard = ({ title, price, dateTime, category, imageUrl }) => {
  const { date, time } = getDateAndTime(dateTime);

  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <BackgroundImage alt='workshop' src={imageUrl} />
        </ImageContainer>
        <Content>
          <Details>
            <Category>
              <img alt='workshop category' />
            </Category>
            <DateTime>
              <Date>
                <img alt='date' src={dateIcon} />
                {date}
              </Date>
              <Time>
                <img alt='time' src={timeIcon} />
                {time}
              </Time>
            </DateTime>
            <Title>{title}</Title>
            <Price>
              {price} <span>EUR</span>
            </Price>
          </Details>
          <AddButton type='button'>Add to Cart</AddButton>
        </Content>
      </CardContainer>
    </Container>
  );
};

export default WorkshopCard;
