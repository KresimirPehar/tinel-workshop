import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkshopCard from '../../components/WorkshopCard';
import { getWorkshops } from '../../redux/actions/workshopsActions';
import {
  Grid,
  Info,
  Container,
  Title,
  WorkshopsCounter,
  List,
  LoadMore,
} from './Workshops.style';

const Workshops = () => {
  const workshops = useSelector((state) => state.workshops.workshopsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkshops());
  }, [dispatch]);

  return (
    <Container>
      <Grid>
        <Info>
          <Title>Workshops</Title>
          <WorkshopsCounter>
            Displayed: <span>{Object.keys(workshops).length}</span>
          </WorkshopsCounter>
        </Info>
        <List>
          {Object.keys(workshops).map((item, id) => (
            <WorkshopCard
              key={id.toString()}
              title={workshops[item].title}
              price={workshops[item].price}
              imageUrl={workshops[item].imageUrl}
              dateTime={workshops[item].date}
            />
          ))}
          {Object.keys(workshops).length > 8 && <LoadMore>Load More</LoadMore>}
        </List>
      </Grid>
    </Container>
  );
};

export default Workshops;
