import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { laptop, mobile, mobile_grande, mobile_medio, mobile_piccolo, mobile_piccolo_medio, tablet } from '../responsive'

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
margin:0 20px;

${mobile_piccolo({ height: "50vh" })}

`;

const Title = styled.h1`
font-size:70px;
margin-bottom:20px;

${laptop({ fontSize: 95 })}
${tablet({ fontSize: 80 })}
${mobile_grande({ fontSize: 75 })}
${mobile_medio({ fontSize: 65 })}
${mobile_piccolo_medio({ fontSize: 60 })}
${mobile({ fontSize: 50 })}
${mobile_piccolo({ fontSize: 40 })}
`;

const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
text-align:center;

${mobile_grande({ fontSize: 22 })}
${mobile_medio({ fontSize: 16 })}
${mobile_piccolo_medio({ fontSize: 15 })}
${mobile({ fontSize: 14 })}
${mobile_piccolo({ fontSize: 10 })}
`;

const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:center;
border:1px solid lightgray;

${mobile({ width: "80%" })}
${mobile_piccolo({ width: "60%" })}
`;

const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
`;

const Button = styled.button`
flex:2;
border:none;
background-color:teal;
color:white;

/* ${mobile_medio({ display: "flex", alignItems: "center", justifyContent: "center" })} */
`;

const Newsletter = () => {
    return (
        <Container id="footer">
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter