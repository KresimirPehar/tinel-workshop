import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getWorkshopUser from '../../redux/actions/usersActions';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  BackIconContainer,
  Container,
  Content,
  WorkshopImage,
  Grid,
  Details,
  Info,
  CategoryIconContainer,
  DateTimeContainer,
  Title,
  HostName,
  Description,
  AddToCartContainer,
  AddToCartDetails,
  Price,
  AddButton,
  NumberOfTickets,
  SubtotalContainer,
  SimilarWorkshops,
  SimilarWorkshopsContent,
  List,
} from './WorkshopDetails.style';
import backIcon from '../../assets/back.svg';
import filterIcons from '../../assets/filters/index';
import dateIcon from '../../assets/date.svg';
import timeIcon from '../../assets/time.svg';
import { getSimilarWorkshops } from '../../redux/actions/workshopsActions';
import WorkshopCard from '../../components/WorkshopCard';

const WorkshopDetails = ({ location }) => {
  const {
    id,
    title,
    desc,
    price,
    date,
    time,
    category,
    userId,
    imageUrl,
  } = location.state;

  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.isLoading);
  const user = useSelector((state) => state.users.user);
  const similarWorkshops = useSelector(
    (state) => state.workshops.similarWorkshops
  );
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  useEffect(() => {
    dispatch(getWorkshopUser(userId));
    dispatch(getSimilarWorkshops(category, id));
  }, [dispatch, userId, category, id]);

  const CategoryIcon = filterIcons[category];

  const updateSubtotal = (e) => setNumberOfTickets(e.target.value);

  return (
    <>
      <BackIconContainer onClick={() => history.goBack()}>
        <img alt='back' src={backIcon} />
        <span>Natrag</span>
      </BackIconContainer>
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Content>
            <WorkshopImage src={imageUrl} />
            <Grid>
              <Details>
                <Info>
                  <CategoryIconContainer>
                    <CategoryIcon />
                  </CategoryIconContainer>
                  <DateTimeContainer>
                    <img src={dateIcon} alt='date' />
                    {date}
                  </DateTimeContainer>
                  <DateTimeContainer>
                    <img src={timeIcon} alt='time' />
                    {time}
                  </DateTimeContainer>
                </Info>
                <Title>{title}</Title>
                <HostName>
                  WITH <span>{user}</span>
                </HostName>
                <Description>{desc}</Description>
              </Details>
              <AddToCartContainer>
                <AddToCartDetails>
                  <span>Buy Your Ticket</span>
                  <Price>
                    <span>{price}</span> EUR
                  </Price>
                  <NumberOfTickets>
                    <select onChange={(e) => updateSubtotal(e)}>
                      {[...Array(10).keys()].map((item, key) => (
                        <option key={key.toString()}>{item + 1}</option>
                      ))}
                    </select>
                    <AddButton>Add to Cart</AddButton>
                  </NumberOfTickets>
                  <SubtotalContainer>
                    Subtotal: {price * numberOfTickets} EUR
                  </SubtotalContainer>
                </AddToCartDetails>
              </AddToCartContainer>
              <div />
            </Grid>
            {Object.keys(similarWorkshops).length > 0 && (
              <SimilarWorkshops>
                <SimilarWorkshopsContent>
                  <h1>Similar Workshops</h1>
                  <List>
                    {Object.keys(similarWorkshops)
                      .slice(0, 3)
                      .map((item, id) => (
                        <WorkshopCard
                          key={id.toString()}
                          id={similarWorkshops[item].id}
                          userId={similarWorkshops[item].userId}
                          title={similarWorkshops[item].title}
                          price={similarWorkshops[item].price}
                          imageUrl={similarWorkshops[item].imageUrl}
                          dateTime={similarWorkshops[item].date}
                          category={similarWorkshops[item].category}
                          desc={similarWorkshops[item].desc}
                        />
                      ))}
                  </List>
                </SimilarWorkshopsContent>
              </SimilarWorkshops>
            )}
          </Content>
        )}
      </Container>
    </>
  );
};

export default WorkshopDetails;
