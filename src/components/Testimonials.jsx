
import styled from "styled-components"
import testimonial from "../photo/shutterstock_73535212.jpg"
import icona from "../photo/quote.svg"
import './Testimonials.css';
import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, computer, computer_grande } from '../responsive'

const Container = styled.div`

margin:20px;
margin-top:150px;
margin-bottom:-30px;
height:700px;
position: relative;
${tablet({ marginBottom: -130, marginTop: 100 })}

${mobile_medio({ display: "flex", flexDirection: "column" })}
`;

const Wrapper = styled.div`


display:flex;
background-color:#1d4ed8;
height:400px;
margin:20px;
padding:50px;
border-radius:10px;
color:#e5e7eb;

${tablet({ height: "330px", })}
`;


const Left = styled.div`
flex:1;
`;

const ImgContainer = styled.img`

`;

const Logo = styled.img`
height:95vh;
width:32vw;
border-radius:10px;
position:absolute;
left:65px;
top:-32px;

${computer_grande({ height: 570 })}
${laptop({ width: "35vw" })}
${tablet({ width: "43vw", height: "107vh" })}
${mobile_medio({ height: "40vh", left: 45 })}
${mobile_piccolo({ height: "35vh", width: "50vw", })}
`;

const Right = styled.div`
flex:1.5;
display:flex;
flex-direction:column;
justify-content:space-around;

${laptop({ flex: 1 })}
${tablet({ flex: 0.6 })}
${mobile_medio({ flex: 8 })}
`;

const Icona = styled.img`
width:70px;
height:70px;

${mobile_medio({ marginBottom: -50, marginTop: 70, width: "40px" })}
${mobile_piccolo({ marginBottom: -30 })}
`;

const Titolo = styled.h1`
align-items:flex-end;
justify-content:flex-end;
font-weight:400;

${laptop({ fontSize: 30 })}
${tablet({ fontSize: 20 })}
${mobile_medio({ fontSize: 15 })}
`;

const H2 = styled.h2`
font-weight:200;

${tablet({ fontSize: 15 })}
${mobile_medio({ fontSize: 10 })}
`;

const P = styled.p`
font-size:20px;

${mobile_medio({ fontSize: 15 })}
`;


const Testimonials = () => {
    return (
        <Container>
            <Wrapper>

                <Left>

                    <Logo src={testimonial} alt="testimonial" height='100%' width='20%'></Logo>

                </Left>
                <Right>

                    <Icona src={icona} alt="icona"></Icona>
                    <Titolo>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                        feugiat est integer dolor auctor adipiscing nunc urna, sit.
                    </Titolo>
                    <H2>
                        Judith Black
                    </H2>
                    <P>
                        CEO at PureInsights
                    </P>

                </Right>


            </Wrapper>
        </Container >
    )
}

export default Testimonials