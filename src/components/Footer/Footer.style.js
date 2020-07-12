import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  background-color: ${colors.shadow};
`;

const Content = styled.div`
  margin-left: 50px;
`;

export { Container, Content };
