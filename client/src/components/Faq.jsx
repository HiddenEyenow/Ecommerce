import styled from "styled-components"
import { tablet, mobile_grande, mobile, mobile_piccolo, laptop, mobile_medio, mobile_piccolo_medio, computer, laptop_piccolo, laptop_piccolo_piccolo } from "../responsive";

const Container = styled.div`
background-color:#0f172a;
display:flex;
flex-direction:column;
height:100vh;
margin:20px;


${computer({ height: "90vh" })}
${laptop({ height: "100vh" })}
${laptop_piccolo({ height: "50vh" })}
${laptop_piccolo_piccolo({ height: "60vh" })}
${tablet({ height: "95vh" })}
${mobile_grande({ height: "140vh" })}
${mobile_medio({ height: "140vh" })}
${mobile_piccolo_medio({ height: "160vh" })}
${mobile({ height: "200vh" })}
${mobile_piccolo({ height: "250vh" })}
`;


const Wrapper = styled.div`
display: flex;
flex-direction:center;
align-items:center;
justify-content: space-between;
margin:20px;
/* margin-right:-10px; */
margin-top:50px;
padding:10px;


${tablet({ flexDirection: "column" })}
`;

const Titolo = styled.div`
margin-top:50px;
display: flex;
flex-direction:column;
align-items:center;
  justify-content:center;
  

`;
const Title = styled.h1`
color:#fff;
   margin-bottom:30px;
   text-align:center;
   
   ${mobile_medio({ fontSize: "30px" })}
   ${mobile_piccolo_medio({ fontSize: "25px" })}
`;

const Left = styled.div`
   flex: 1;
  
`;

const Right = styled.div`
   flex: 1;
`;

const H1 = styled.h1`
    color:white;
    font-size:20px;
    font-weight:500;
    margin-bottom:20px;
    margin-top:40px;
    text-align:center;
`;

const H2 = styled.h2`
    color:#9ca3af;
    font-size:15px;
    font-weight:300;
    text-align:center;
`;

const H3 = styled.h2`
    color:#9ca3af;
    font-size:15px;
    font-weight:300;
    margin-bottom:-20px;
text-align:center;
    ${tablet({ marginLeft: 20, marginRight: 20 })}
    
`;

const Faq = () => {
    return (
        <Container id="faq">
            <Titolo>
                <Title>Frequently asked questions</Title>
                <H3> Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                    Urna, sed a lectus elementum blandit et.</H3>
            </Titolo>
            <Wrapper>
                <Left>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>
                </Left>
                <Right>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>
                    <H1>What's the best thing about Switzerland?</H1>
                    <H2>I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</H2>

                </Right>

            </Wrapper>
        </Container>
    )
}

export default Faq
