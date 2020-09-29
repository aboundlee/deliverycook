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
    width: 16rem;
    height: 16rem;
    max-width: 400px;
    @media (max-width: 480px) {
        height: auto;
    
    }
`;
const LogoImg = styled.img`
    margin-top: 20px;
    width: 50%;
    height: auto;
    min-height: 1px;
`;


const MenuCarosuel = ({category, mobileItem}) => {


    return (
        <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={1000}
            transitionDuration={1500}
            focusOnSelect={false}
            infinite

            ssr={true}
            swipeable={false}

            draggable={false}
            className="Carosel"

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
                items: parseInt(mobileItem),
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
            >
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu1.png")} alt="menu1" />
            <LogoImg src={"/Images/".concat(category,"/p2_logo1.svg")} alt="logo1"/>

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu2.png")} alt="menu2"/>
            <LogoImg src={"/Images/".concat(category,"/p2_logo2.svg")} alt="logo2"/>

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu3.png")} alt="menu3"/>
            <LogoImg src={"/Images/".concat(category,"/p2_logo3.svg")} alt="logo3"/>

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu4.png")} alt="menu4"/>
            <LogoImg src={"/Images/".concat(category,"/p2_logo4.svg")} alt="logo4"/>

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu5.png")} alt="menu5"/>
            <LogoImg src={"/Images/".concat(category,"/p2_logo5.svg")} alt="logo5"/>

        </Item>
        </Carousel>
        );
}


export default MenuCarosuel;
