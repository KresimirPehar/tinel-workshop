import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 20px;

  svg {
    width: 35px;
    grid-column: 1;
  }

  path {
    fill: ${(props) => props.isActive && colors.secondary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
`;

const Label = styled.div`
  height: 24px;
  grid-column: 2;
  font-weight: bold;
  align-self: flex-end;
  color: ${(props) => props.isActive && colors.secondary};
  text-decoration: ${(props) => props.isActive && 'underline'};
  transition: color 0.3s linear, text-decoration 0.3s linear;
`;

export { Container, Grid, Label };
