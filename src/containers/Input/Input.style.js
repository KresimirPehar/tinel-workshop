import styled from 'styled-components';
import { sizeMixin, flexMixin } from '../../utils/style/mixins.style';
import colors from '../../constants/colors';

const Container = styled.div``;

const Heading = styled.div`
  ${flexMixin('center', 'space-between')}
`;

const Error = styled.div`
  color: red;
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  width: ${(props) => props.isLetters && '50%'};
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DateIcon = styled.img`
  position: absolute;
  top: 30px;
`;

const InputContainer = styled.div`
  position: relative;

  input {
    ${sizeMixin('100%', '30px')}
    border: 0;
    border-bottom: ${(props) =>
      props.isError ? '2px solid red' : '1px solid black'};
    transition: background-color 0.3s linear;
    background-color: 'none'
    transition: border-bottom 0.2s ease-out;
    margin-bottom: 40px;
    font-size: 18px;
    padding: ${(props) => (props.isDate ? '0 0 0 20px' : '0 10px')};

    :focus {
      border-bottom: ${(props) =>
        props.isError ? '2px solid red' : `2px solid ${colors.secondary}`};
      outline: 0;
      background-color: ${colors.shadow};
    }

    ::placeholder {
      font-size: 12px;
    }
  }
`;

export { Container, Heading, Error, InputContainer, Label, DateIcon };
