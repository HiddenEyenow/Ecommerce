import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import logo from '../photo/logo.jpg';
import { mobile_piccolo, mobile, tablet, mobile_grande, mobile_medio, laptop, computer } from '../responsive'
import "./Slider.css";

const Container = styled.div` 
width:100%;
height:100vh;
display:flex;
position: relative;
overflow:hidden;
margin: 40px 0px;

${mobile_medio({ marginTop: 40, marginBottom: -40 })}

${mobile({ marginTop: 80, alignText: "center", justifyContent: "center", marginBottom: -100 })}

${mobile_piccolo({ marginTop: 30, alignText: "center", justifyContent: "center", marginBottom: -100 })}


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

${mobile_grande({ flexDirection: "column", })}
`;

const ImgContainer = styled.div`
display:flex;
margin-top:250px;
height:100%;
flex:1;
margin-right: 100px;

${tablet({ flexDirection: "column", alignItems: "center", justifyContent: "center", alignContent: "center" })}

${mobile({ marginTop: 190 })}
`;

const Image = styled.img`
height: 70%;
width: 110%;
${computer({ marginTop: 30 })}
${laptop({ height: 300, marginTop: 70 })}
${tablet({ height: 250, width: 400, marginBottom: 165, marginLeft: 50, marginTop: 0 })}
${mobile_grande({ height: 200, width: 400, marginTop: -300, marginLeft: 100 })}
${mobile({ height: 175, width: 300 })}
`;

const InfoContainer = styled.div`
flex:1;
padding:50px;
margin-top:110px;

${tablet({ marginTop: 0 })}
${tablet({ marginBottom: -120 })}
${mobile({ marginTop: -20 })}
`;

const Title = styled.h1`
font-size:70px;
${tablet({ fontSize: 35, marginBottom: -20, })}
${mobile_medio({ marginLeft: 37, marginTop: 30, })}
${mobile({ fontSize: 25, marginLeft: 50, })}
${mobile_piccolo({ marginTop: 30, marginLeft: 26, })}

`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${mobile_medio({ fontSize: 10, marginLeft: 30, marginTop: 40, marginBottom: 160 })}
  
  ${mobile({ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 200, alignText: "center", marginLeft: 18 })}
  

`;

const Slider = () => {
    return (
        <Container>
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