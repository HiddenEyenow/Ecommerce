import styled from "styled-components";

import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, computer, computer_grande } from '../responsive'

const Container = styled.div` 
height:70vh;
width:auto;
margin: 20px;
margin-top:130px;
/* background: linear-gradient(black, white); */
background-color:#86efac;

`;

const Wrapper = styled.div` 

height:70vh;
display: flex;
flex-direction:column;
align-items: center;

justify-content: center;


`;

const Title = styled.h1` 
font-size:60px;
margin-bottom:30px;

${computer_grande({ fontSize: 120 })}
${computer({ fontSize: 60 })}
${laptop({ fontSize: 50 })}
${tablet({ fontSize: 40 })}
${mobile_grande({ fontSize: 21 })}
${mobile({ fontSize: 17 })}
${mobile_piccolo({ fontSize: 14 })}
`;

const Desc = styled.h2` 
margin-left:25%;
margin-right:25%;
font-size:30px;
font-weight: 300;
text-align:center;

${computer_grande({ fontSize: 60 })}
${computer({ fontSize: 30 })}
${laptop({ fontSize: 25 })}
${tablet({ fontSize: 20 })}
${mobile_grande({ fontSize: 13 })}
${mobile({ fontSize: 10 })}
${mobile_piccolo({ fontSize: 8 })}
`;



const Promo = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Get 25% off during our one-time sale
                </Title>
                <Desc>
                    Most of our products are limited releases that won't come back. Get your favorite items while they're in
                    stock.
                </Desc>

            </Wrapper>
        </Container>
    )
}

export default Promo