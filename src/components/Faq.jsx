import styled from "styled-components"
import { tablet, mobile_grande, mobile, mobile_piccolo, laptop } from "../responsive";

const Container = styled.div`
background-color:#0f172a;
display:flex;
flex-direction:column;
height:100vh;
margin:20px;

${laptop({ height: "100vh" })}
${tablet({ height: "205vh" })}
${mobile_grande({ height: "260vh" })}
${mobile({ height: "285vh" })}
${mobile_piccolo({ height: "310vh" })}
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
   
`;

const Left = styled.div`
   flex: 1;
   margin-right:30px;
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
        <Container>
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
