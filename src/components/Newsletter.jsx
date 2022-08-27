import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile, mobile_medio } from '../responsive'

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
margin:0 20px;

`;

const Title = styled.h1`
font-size:70px;
margin-bottom:20px;

${mobile({ fontSize: 50 })}
`;

const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;

${mobile({ textAlign: "center", fontSize: "15" })}
`;

const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;

${mobile({ width: "80%" })}
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
        <Container>
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