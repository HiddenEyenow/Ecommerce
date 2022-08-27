import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    YouTube,
    Room,
    Twitter,
} from "@material-ui/icons";

import styled from "styled-components"
import logo from '../photo/logo.jpg';
import { tablet } from "../responsive";

const Container = styled.div`
display: flex;

${tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display:flex;
flex-direction:column;
padding: 20px;
`;

const Logo = styled.img`

`;

const Desc = styled.p`
margin:20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;


`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;

${tablet({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src={logo} alt='logo' height='20%' width='20%'></Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus est nunc, id porttitor nisl tempor id. Nulla et sapien sit amet nisl ullamcorper tincidunt. Ut eu lacus magna. Ut tristique eleifend commodo. Sed molestie, velit mollis auctor viverra, purus nisi finibus magna, eget eleifend est sapien quis orci. Nam eget nisi ut diam tristique suscipit sed </Desc>
                <SocialContainer>
                    <SocialIcon color="1877f2">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="c32aa3">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="1da1f2">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="ff0000">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Sneakers</ListItem>
                    <ListItem>Sportive</ListItem>
                    <ListItem>Eleganti</ListItem>
                    <ListItem>Stivali</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} /> 622 Dixie path, South Tobinchester 98336</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} /> +1 234 56 78</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev</ContactItem>
                <Payment src="https://www.track-vr.it/uploads/images/pagamenti.jpg" width={270} height={65} />
            </Right>
        </Container>
    );
};

export default Footer