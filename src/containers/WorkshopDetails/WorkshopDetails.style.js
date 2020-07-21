import styled from 'styled-components';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';
import colors from '../../constants/colors';
import StyledButton from '../../utils/style/components.style';

const BackIconContainer = styled.div`
  ${flexMixin('flex-start')}
  grid-column: 1;
  height: calc(100vh - 100px);
  margin: 40px 20px 0;
  font-weight: bold;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  grid-column: 2;
`;

const Content = styled.div`
  margin: 40px 20px 0;
`;

const WorkshopImage = styled.img`
  ${sizeMixin('100%', '300px')};
  border-radius: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
`;

const Details = styled.div`
  grid-column: 1;
`;

const Info = styled.div`
  ${flexMixin('center', 'space-between')}
  width: 70%;
  margin: 30px 0;
`;

const CategoryIconContainer = styled.div`
  ${sizeMixin('30px', '30px')}
  ${flexMixin('center', 'center')}
  background-color: #000;
  border-radius: 6px;

  svg {
    width: 18px;
    height: 18px;
  }

  path {
    fill: #fff;
  }
`;

const DateTimeContainer = styled.div`
  ${flexMixin('center')}
  font-weight: bold;

  img {
    margin-right: 5px;
  }
`;

const Title = styled.div`
  color: ${colors.secondary};
  font-size: 40px;
  font-weight: bold;
`;

const HostName = styled.div`
  font-weight: bold;
  margin: 20px 0;

  span {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  color: ${colors.font_darker};
  line-height: 150%;
  text-align: justify;
  margin-bottom: 30px;
`;

const AddToCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 20px;
`;

const AddToCartDetails = styled.div`
  ${sizeMixin('300px', '200px')}
  background: #ffffff;
  box-shadow: 1px 2px 16px rgba(127, 127, 127, 0.25);
  border-radius: 8px;
  margin-top: 30px;
  padding: 40px;

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;

const Price = styled.div`
  margin: 25px 0;
  font-weight: bold;

  span {
    font-size: 30px;
  }
`;

const NumberOfTickets = styled.div`
  ${flexMixin('center')}

  select {
    ${sizeMixin('60px', '50px')}
    margin-right: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    border: 1px solid ${colors.secondary};
  }
`;

const AddButton = styled(StyledButton)`
  background-color: ${colors.primary};
  width: 150px;
`;

const SubtotalContainer = styled.div`
  ${flexMixin(null, 'flex-end')};
  margin-right: 80px;
  color: ${colors.font_lighter};
`;

const SimilarWorkshops = styled.div`
  ${sizeMixin('100vw', '100%')}
  margin: 30px 0 1px;
  position: relative;
  left: calc(100% - 100vw + 20px);
  background-color: ${colors.shadow};

  h1 {
    margin: 30px 0;
  }
`;

const SimilarWorkshopsContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 25%;
  margin-left: 20px;

  div {
    flex-basis: 15%;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
`;

export {
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
};
