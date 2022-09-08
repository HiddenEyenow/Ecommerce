import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import logo from '../photo/logo.jpg';
import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, laptop_piccolo, computer, computer_grande } from '../responsive'
import "./Slider.css";

const Container = styled.div` 
width:100%;
height:70vh;
display:flex;
position: relative;
overflow:hidden;
margin: 40px 0px;

${computer_grande({ height: "90vh", })}
${computer({ height: "70vh", marginTop: 150 })}
${laptop({ height: "70vh", marginTop: 150 })}
${laptop_piccolo({ height: "40vh", marginTop: 150 })}
${mobile_grande({ height: "60vh", marginTop: 90 })}
${mobile_medio({ height: "65vh", marginTop: 40, marginBottom: -40 })}
${mobile({ height: "75vh", marginTop: 80, alignText: "center", justifyContent: "center", marginBottom: -100 })}
${mobile_piccolo({ height: "75vh", marginTop: 30, alignText: "center", justifyContent: "center", marginBottom: -100 })}


`;

// const Container = styled.div` 
// width:100%;
// height:100vh;
// display:flex;
// position: relative;
// overflow:hidden;
// margin: 40px 0px;

// ${mobile({
//     display: "grid", gridTemplateColumns: "50 50 50 50",
//     gridTemplateRows: "auto",
// })}

// `;

const Wrapper = styled.div`
  height:100%;
  display: flex;
  `;

const Slide = styled.div`
width:100vw;
height: 100vh;
display:flex;
align-items:center;
margin-bottom:200px;

${laptop({ alignItems: "flex-start" })}
${mobile_grande({ flexDirection: "column", alignItems: "center" })}
${mobile_medio({ height: "90vh", alignItems: "center" })}
${mobile({ height: "100vh", alignItems: "center" })}
`;

const ImgContainer = styled.div`
display:flex;
margin-bottom:50px;
height:100%;
flex:1;
margin-right: 100px;

${tablet({ flexDirection: "column", alignItems: "center", justifyContent: "center", alignContent: "center" })}

${mobile({})}
`;

const Image = styled.img`
height: 70%;
width: 110%;
${computer_grande({ marginTop: 180, height: "90%", })}
${computer({ marginTop: 180, height: "50%", })}
${laptop({ height: 300, marginTop: 70, width: "130%" })}
${tablet({ height: 250, marginBottom: 165, marginLeft: 50, marginTop: -550 })}
${mobile_grande({ height: 200, width: 400, marginTop: -300, marginLeft: 100 })}
${mobile({ height: 175, width: 300, marginTop: -300, })}
`;

const InfoContainer = styled.div`
flex:1;
padding:50px;
margin-top:110px;

${computer({ marginTop: -20 })}
${laptop({ marginTop: 20 })}
${tablet({ marginTop: 0 })}

${mobile({ marginTop: -20, marginBottom: 50 })}
`;

const Title = styled.h1`
font-size:70px;
text-align:center;
${tablet({ fontSize: 35, marginBottom: -20, })}
${mobile_medio({ marginTop: 30, })}
${mobile({ fontSize: 20, })}
${mobile_piccolo({ marginTop: 30, })}

`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align:center;

  ${mobile_grande({ fontSize: 14, })}
  ${mobile_medio({ fontSize: 10, marginTop: 40, })}
  
  ${mobile({ display: "flex", alignItems: "center", justifyContent: "center", alignText: "center", fontSize: 10 })}
  

`;

const Slider = () => {
    return (
        <Container >
            <Wrapper>
                <Slide>

                    <InfoContainer>
                        <Title>SUMMERs SAL</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                    </InfoContainer>
                    <ImgContainer>

                        <Image src="https://i.pinimg.com/originals/5a/df/db/5adfdb9af547b0de271f1093236f1c30.jpg" alt='logo' />
                    </ImgContainer>
                </Slide>

            </Wrapper>
        </Container>
    );
};

export default Slider;