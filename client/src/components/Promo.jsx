import styled from "styled-components";

import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, computer, computer_grande, mobile_piccolo_medio } from '../responsive'

const Container = styled.div` 
height:70vh;
width:auto;
margin: 20px;
margin-top:130px;
/* background: linear-gradient(black, white); */
background-color:#86efac;

${computer({ display: "flex", alignItems: "center" })}
${laptop({ maxHeight: 500, display: "flex", alignItems: "center" })}
${tablet({ maxHeight: 500, display: "flex", alignItems: "center", marginTop: "20vh" })}
${mobile_grande({ maxHeight: 400, display: "flex", alignItems: "center", marginTop: "35vh", })}

${mobile_medio({ maxHeight: 300, display: "flex", alignItems: "center", marginTop: "25vh" })}
${mobile_piccolo_medio({ maxHeight: 300, display: "flex", alignItems: "center", marginTop: "25vh" })}
${mobile({ maxHeight: 350, display: "flex", alignItems: "center", marginTop: "35vh" })}
${mobile_piccolo({ maxHeight: 250, display: "flex", alignItems: "center" })}
`;

const Wrapper = styled.div` 

height:70vh;
display: flex;
flex-direction:column;
align-items: center;

justify-content: center;

/* ${mobile({ maxHeight: 30 })} */
`;

const Title = styled.h1` 
font-size:60px;
margin-bottom:30px;
text-align:center;

${computer_grande({ fontSize: 120 })}
${computer({ fontSize: 60 })}
${laptop({ fontSize: 50 })}
${tablet({ fontSize: 40 })}
${mobile_grande({ fontSize: 21 })}
${mobile_medio({ fontSize: 19 })}
${mobile({ fontSize: 17 })}
${mobile_piccolo({ fontSize: 13, })}
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
${mobile_medio({ fontSize: 12 })}
${mobile({ fontSize: 10 })}
${mobile_piccolo({ fontSize: 9 })}
`;



const Promo = () => {
    return (
        <Container id='Home'>
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