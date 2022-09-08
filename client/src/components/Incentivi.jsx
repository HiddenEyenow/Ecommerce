import styled from "styled-components";
import shipping from "../photo/free-delivery-badge-icon-gold-ribbon-113705089-removebg-preview.png"
import garanzia from "../photo/warrantly-2years-removebg-preview.png"
import refund from "../photo/free-shipping-golden-removebg-buono.png"

import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, computer, computer_grande, laptop_piccolo, laptop_piccolo_piccolo, mobile_piccolo_medio } from '../responsive'

const Container = styled.div` 
margin: 30px;
margin-top:60px;
margin-bottom:-80px;

`;

const Wrapper = styled.div` 
display: flex;
align-items: space-between;

${mobile_medio({ flexDirection: "column" })}
`;

const Left = styled.div` 
flex:1;
margin-right:40px;
${mobile_medio({ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 0 })}

`;

const Center = styled.div`
flex: 1;
margin-right: 40px;

${mobile_medio({ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 0 })}
`;

const Right = styled.div`
flex: 1;

${mobile_medio({ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 0 })}
`;

const Icona1 = styled.img`
width: 80px;
height: 100px;
margin-bottom: 10px;

`;

const Icona2 = styled.img`
width: 110px;
height: 100px;
margin-bottom: 10px;
`;

const Icona3 = styled.img`
width: 95px;
height: 100px;
margin-bottom: 10px;
`;

const Titolo = styled.div`
color:#1B2028;
margin-bottom: 20px;
font-weight: 600;
`;

const Desc = styled.div`
color:#7B7D84;

${mobile_medio({ textAlign: "center", marginBottom: 20 })}
`;

const Incentivi = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Icona1 src={shipping} alt="spedizione" height='100%' width='20%'></Icona1>
                    <Titolo>Free Shipping</Titolo>
                    <Desc>It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</Desc>
                </Left>
                <Center>
                    <Icona2 src={garanzia} alt="garanzia" height='100%' width='20%'></Icona2>
                    <Titolo>2-years warranty</Titolo>
                    <Desc>If it breaks in the first 10 years we'll replace it. After that you're on your own though.</Desc>
                </Center>
                <Right>
                    <Icona3 src={refund} alt="rimborso" height='100%' width='20%'></Icona3>
                    <Titolo >Refund 30 days</Titolo>
                    <Desc>If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</Desc>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Incentivi