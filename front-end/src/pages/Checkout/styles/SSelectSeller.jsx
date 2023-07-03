import styled from 'styled-components';
import Select from '../../../components/Select';

const SelectSeller = styled(Select)`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  select {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    background-color: #fff;
    color: black;
    font-size: 12px;
    text-align: center;

    &:focus {
      outline: none;
      border: 1px solid #FF6442;
      box-shadow: 0 0 5px #FF6442;
  }
  }
}
`;

export default SelectSeller;
