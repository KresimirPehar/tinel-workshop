import React from 'react';
import { Link } from 'react-router-dom';
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
import filterIcons from '../../assets/filters/index';

const WorkshopCard = ({ id, title, price, dateTime, category, imageUrl }) => {
  const { date, time } = getDateAndTime(dateTime);

  const Icon = filterIcons[category];
  const workshopDetails = {
    id,
    title,
    price,
    date,
    time,
    category,
    imageUrl,
  };

  return (
    <Container>
      <CardContainer>
        <Link
          to={{
            pathname: `/workshops/${id}`,
            state: workshopDetails,
          }}
        >
          <ImageContainer>
            <BackgroundImage alt='workshop' src={imageUrl} />
          </ImageContainer>
        </Link>
        <Content>
          <Details>
            <Category>{Icon && <Icon />}</Category>
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
            <Link
              to={{
                pathname: `/workshops/${id}`,
                state: workshopDetails,
              }}
            >
              <Title>{title}</Title>
            </Link>
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
