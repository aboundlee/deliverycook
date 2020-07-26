import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";



const Item = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MenuImg = styled.img`
    z-index: 1;
`;
const LogoImg = styled.img`
    margin-top: 20px;


`;
const MenuCarosuel = () => {

    return (
        <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={1000}
            transitionDuration={500}
            focusOnSelect={false}
            infinite

            ssr={true}
            swipeable={false}

            draggable={false}
            className=""

            containerClass="container"
            dotListClass=""
            
            itemClass=""
            keyBoardControl
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
                partialVisibilityGutter: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 2,
                partialVisibilityGutter: 1
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
        <Item>
            <MenuImg src={"/Images/Brand/p2_menu1.svg"} />
            <LogoImg src={"/Images/Brand/p2_logo1.svg"} />

        </Item>
        <Item>
            <MenuImg src={"/Images/Brand/p2_menu2.svg"} />
            <LogoImg src={"/Images/Brand/p2_logo2.svg"} />

        </Item>
        <Item>
            <MenuImg src={"/Images/Brand/p2_menu3.svg"} />
            <LogoImg src={"/Images/Brand/p2_logo3.svg"} />

        </Item>
        <Item>
            <MenuImg src={"/Images/Brand/p2_menu4.svg"} />
            <LogoImg src={"/Images/Brand/p2_logo4.svg"} />

        </Item>
        <Item>
            <MenuImg src={"/Images/Brand/p2_menu5.svg"} />
            <LogoImg src={"/Images/Brand/p2_logo5.svg"} />

        </Item>
        </Carousel>
        );
}


export default MenuCarosuel;
