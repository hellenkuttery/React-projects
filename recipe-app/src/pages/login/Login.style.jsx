import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex";

export const LoginContainer=styled(Flex)`
height: 100vh;
background-image: url("htps://picsum.photos/1600/900");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

export const FormContainer=styled(Flex)`
width: 40rem;
height: 40rem;
max-width: 50rem;
background: rgba(0,173,181,0.5);
border-radius:50%;
padding:0.5rem;
flex-direction:column;
`;

export const Header=styled.h1`
color:white;
font-size:3rem;`
;