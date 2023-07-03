import styled from 'styled-components';
import tw from 'twin.macro';

const QuantityContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {

  ${tw`
    flex
    flex-1
    justify-center
    items-center
  `}
  align-items: center;
  button {
    ${tw`
      h-7
      w-7
      m-auto
    `}
    font-size: 1.2em;
    border-color: #433f5a;
    background-color: #433f5a;
    color: #fff;
    border-radius: 10px;
    &:focus {
      outline: none;
      color: rgb(255, 197, 0);
      border: 1px solid rgb(255, 197, 0);
      box-shadow: 0 0 5px rgb(255, 197, 0);
  }
  }

  input {
    ${tw`
      w-6
      h-6
      text-black
    `}
    text-align: center;
    border: 2px solid #433f5a;
    padding: 0.5em;
  }
}
`;

export default QuantityContainer;
