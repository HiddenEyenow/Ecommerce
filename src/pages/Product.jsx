import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div` 
margin-top:50px;
`;

const Wrapper = styled.div` 
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div` 
flex: 1;
`;

const Image = styled.img` 
width: 100%;
height: 100%;
object-fit: cover;
`;

const InfoContainer = styled.div` 
flex: 1;
padding: 0px 50px;

`;

const Title = styled.h1` 
font-weight: 200;
`;

const Desc = styled.p` 
margin: 20px 0px;
`;

const Price = styled.span` 
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://it.basketzone.net/zdjecia/2019/08/23/108/46/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_GYM_RED.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Air jordan</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae neque sit amet diam varius ultricies tincidunt sed justo. Suspendisse non erat massa. Duis cursus diam varius ante euismod eleifend. Mauris tincidunt dignissim urna vel commodo. Nam volutpat vulputate massa nec sollicitudin. Suspendisse tempus diam eu lacus scelerisque, eget convallis erat iaculis. Nullam lacinia quam vel dolor hendrerit, non gravida neque ornare. Nulla facilisi. Suspendisse diam ante, tempus nec lacus id, laoreet maximus ipsum. In feugiat, lectus nec venenatis fermentum, diam urna eleifend elit, vel porttitor quam metus ut nisl. Vivamus quis venenatis dui, sit amet efficitur neque.

                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>X</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product