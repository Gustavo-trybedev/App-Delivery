import styled from 'styled-components';

const SForm = styled.form`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  span {
    font-size: 12px;
    font-weight: bold;
    color: #FF6442;
  }

  .address {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: lighter;
    padding: 0.5em;

    &:focus {
      outline: none;
      border: 1px solid #FF6442;
      box-shadow: 0 0 5px #FF6442;
  }
  }
  .address-number {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: lighter;
    padding: 0.5em;

    &:focus {
      outline: none;
      border: 1px solid #FF6442;
      box-shadow: 0 0 5px #FF6442;
  }
  }
  }
`;

export default SForm;
