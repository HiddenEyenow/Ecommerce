import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../photo/logo.jpg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { mobile } from "../responsive"

const Container = styled.div`
height:30px;
background-color:#010B24;
height : ${(props) => (props.extendedNavbar ? "80vh" : "63px")};
position:absolute;
top:0;
left:0;
right:0;
z-index:100;
color:#FFFFFF;



`;

const Wrapper = styled.div`
padding: 7px 15px;
display:flex;
justify-content:space-between;
align-items:center;


@media (max-width: 750px) {

}

@media (max-width: 715px) {
    padding-top:5px;
    padding-right:15px;

}
`;


const Left = styled.div`
flex:2.5;
display:flex;
align-items:center;

@media (max-width: 750px) {
flex:6;
}

@media (max-width: 750px) {
margin-top:10px;
align-items:flex-start;
}

`;

const Logo = styled.img`
width:80px;
height:45px;
max-width:180px;
margin-right:15px;


@media (max-width: 750px) {
    width:60px;
height:32px;

}

@media (max-width: 460px) {
    width:60px;
height:32px;
display:none;
}

`;

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-right:20px;
padding:2px 15px;
border-radius: 15px;
background-color:#374151;

@media (max-width: 800px) {
    margin-left:10px;
}

@media (max-width: 750px) {
   display:none;
}

`;

const SearchContainerExtended = styled.div`
border:0.5px solid lightgray;
border-radius: 15px;
display:flex;
align-items:center;
margin-top:5px;
margin-right:10px;
padding:5px;
height:17px;
`;

const Input = styled.input`
border:none;
padding:7px;
margin-right:5px;
background-color:#374151;


@media (max-width: 870px) {
    width:80px;
}
`;

const InputExtended = styled.input`
border:none;
width:70px;
color:black;
background-color:transparent;
`;


const Center = styled.div`
display:flex;
flex:5;
justify-content:flex-end;
`;

const NavbarLinkContainer = styled.div`
display:flex;
cursor:pointer;


`;

const NavbarLink = styled(Link)`
color:white;
font-size:large;
font-family:Arial, Helvetica, sans-serif;
text-decoration:none;
margin:10px;
margin-left:4px;
cursor:pointer;
@media (max-width: 800px) {
  
  font-size: small;
}

@media (max-width: 750px) {
    display:none;
}
`;

const NavbarLinkExtended = styled(Link)`
color:white;
font-size:small;
font-family:Arial, Helvetica, sans-serif;
text-decoration:none;
margin:5px 10px;
cursor:pointer;

`;

const OpenLinksButton = styled.button`

height:30px;
background:none;
color:white;
font-size:18px;
cursor:pointer;
border:none;

@media (min-width: 750px) {
    display:none;
}
`;

const NavBarExtendedContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-top:-3px;

@media (min-width:750px) {
    display:none;
}
`;

const Right = styled.div`
display:flex;
align-items: center;
justify-content:flex-end;
flex:1.8;
margin-left:10px;
margin-right:10px;

@media (max-width:900px ) {
    margin-left:0px;
   
}
   
@media (max-width:750px ) {
    flex:8;
   flex-direction:row; 
   margin-top:-100px;
   align-items: center;
   
}

`;

const ContainerItem = styled.div`
display:flex;
flex-direction:row;
margin-left:-30px;

@media (max-width:1024px) {
    display:flex;
    flex-direction:column;
}

@media (max-width:750px) {
    display:flex;
    flex-direction:row;
    margin-right:-15px; 
    align-items:center;
}

@media (max-width:460px) {
    display:flex;
    flex-direction:column;
align-items:center;
padding-top:10px;
}
    `;

const ContainerItemExtended = styled.div`

`;

const MenuItemExtended = styled.div`
color:white;
font-size:small;
font-family:Arial, Helvetica, sans-serif;
text-decoration:none;
margin:5px 10px;
cursor:pointer;
display:flex;
flex-direction:column;
align-items:center;
`;

const ContainerNavbarLinkExtended = styled.div`
display:flex;
flex-direction: column;
margin-right:10px;
align-items:center;
`;

const MenuItem = styled.div` 
font-size:14px;
cursor:pointer;
margin-left:25px;
margin-right:3px;
`;


const Navbar = () => {
    const [extendedNavbar, setExtendedNavbar] = useState(false);
    return (
        <Container extendedNavbar={extendedNavbar}>
            <Wrapper>
                <Left>
                    <OpenLinksButton onClick={() => {
                        setExtendedNavbar((curr) => !curr);
                    }}
                    > {extendedNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </OpenLinksButton>

                    {extendedNavbar && (
                        <NavBarExtendedContainer>
                            <SearchContainerExtended>
                                <InputExtended />
                                <Search style={{ color: "gray", fontSize: 16 }} />
                            </SearchContainerExtended>
                            <ContainerNavbarLinkExtended>
                                <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
                                <NavbarLinkExtended to='/products'>Prodcuts</NavbarLinkExtended>
                                <NavbarLinkExtended to='/reviews'>Reviews</NavbarLinkExtended>
                                <NavbarLinkExtended to='/footer'>About</NavbarLinkExtended>

                            </ContainerNavbarLinkExtended>

                        </NavBarExtendedContainer>
                    )}

                    <Logo src={logo} alt='logo' height='20%' width='20%'></Logo>
                    <h1 className='Nome_store_navbar'>Bush Store</h1>
                </Left>
                <Center>

                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: 20 }} />
                    </SearchContainer>

                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/products'>Prodcuts</NavbarLink>
                        <NavbarLink to='/reviews'>Reviews</NavbarLink>
                        <NavbarLink to='/footer'>About</NavbarLink>

                    </NavbarLinkContainer>

                </Center>
                <Right>
                    <ContainerItem>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>

                    </ContainerItem>

                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container >
    );
}

export default Navbar