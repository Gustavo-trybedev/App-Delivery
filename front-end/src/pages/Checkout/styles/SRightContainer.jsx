import styled from 'styled-components';
import tw from 'twin.macro';

const RightContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
      flex
      flex-col
      items-center
      gap-2
  `}


  button {
    height: 1.4rem;
    width: 1.4rem;
    font-size: 14px;
    border-radius: 5px;
    margin: 0.2rem;
    background-color: #de3131;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-shadow: 0.1rem 0.1rem 0.2rem #333333aa;
  }
    
.product-infos {
  ${tw`
      flex
      justify-start
      items-center
  `}
    
  button {
    background-color: rgb(255, 255, 255);
    color: red;
    border: none;
  }
}

.subTotal {
  color: #FF5833;
  font-size: 16px;
  width: auto;
}

}
  `;

export default RightContainer;
