import styled from 'styled-components';
import tw from 'twin.macro';

export const SAdmin = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
`}
height: 100vh;
width: 100%;
gap: 1.5rem;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

}
`;

export default SAdmin;
