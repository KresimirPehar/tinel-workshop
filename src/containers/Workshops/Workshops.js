import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkshopCard from '../../components/WorkshopCard';
import {
  getWorkshops,
  getFilteredWorkshops,
} from '../../redux/actions/workshopsActions';
import {
  Grid,
  Info,
  Container,
  Title,
  WorkshopsCounter,
  List,
  LoadMore,
} from './Workshops.style';
import LoadingSpinner from '../../components/LoadingSpinner';

const Workshops = () => {
  const isLoading = useSelector((state) => state.workshops.isLoading);
  const allWorkshops = useSelector((state) => state.workshops.workshopsData);
  const filteredWorkshops = useSelector(
    (state) => state.workshops.filteredWorkshopsData
  );
  const filter = useSelector((state) => state.filters.appliedFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch all workshops initially
    dispatch(getWorkshops());
  }, [dispatch]);

  useEffect(() => {
    // fetch filtered workshops in case of some filter
    if (filter !== 'all') dispatch(getFilteredWorkshops(filter));
  }, [filter, dispatch]);

  const displayedWorkshops = useMemo(
    () => (filter === 'all' ? allWorkshops : filteredWorkshops),
    [filteredWorkshops, allWorkshops, filter]
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid>
          <Info>
            <Title>Workshops</Title>
            <WorkshopsCounter>
              Displayed: <span>{Object.keys(displayedWorkshops).length}</span>
            </WorkshopsCounter>
          </Info>
          <List>
            {Object.keys(displayedWorkshops).map((item, key) => (
              <WorkshopCard
                key={key.toString()}
                id={displayedWorkshops[item].id}
                userId={displayedWorkshops[item].userId}
                title={displayedWorkshops[item].title}
                price={displayedWorkshops[item].price}
                imageUrl={displayedWorkshops[item].imageUrl}
                dateTime={displayedWorkshops[item].date}
                category={displayedWorkshops[item].category}
                desc={displayedWorkshops[item].desc}
                numberOfTickets={1}
              />
            ))}
            {Object.keys(displayedWorkshops).length > 8 && (
              <LoadMore>Load More</LoadMore>
            )}
          </List>
        </Grid>
      )}
    </Container>
  );
};

export default Workshops;
