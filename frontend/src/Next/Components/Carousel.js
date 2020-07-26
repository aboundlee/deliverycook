

import Carousel from 'react-multi-carousel';
//import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";


import MobileDetect from "mobile-detect";



const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MenuImg = styled.img`
    z-index: 1;
    width: 80%;
    max-width: 400px;
`;
const LogoImg = styled.img`
    margin-top: 20px;
    width: 40%;

`;


const MenuCarosuel = ({category, mobileItem, deviceType}) => {

	console.log(deviceType);


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
            deviceType={deviceType}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu1.png")} />
            <LogoImg src={"/Images/".concat(category,"/p2_logo1.svg")} />

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu2.png")} />
            <LogoImg src={"/Images/".concat(category,"/p2_logo2.svg")} />

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu3.png")} />
            <LogoImg src={"/Images/".concat(category,"/p2_logo3.svg")} />

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu4.png")} />
            <LogoImg src={"/Images/".concat(category,"/p2_logo4.svg")} />

        </Item>
        <Item>
            <MenuImg src={"/Images/".concat(category,"/p2_menu5.png")} />
            <LogoImg src={"/Images/".concat(category,"/p2_logo5.svg")} />

        </Item>
        </Carousel>
        );

}


export default MenuCarosuel;

MenuCarosuel.getInitialProps = async (ctx) => {
	    let userAgent;
	    let deviceType;
	    if (req) {
	      userAgent = req.headers["user-agent"];
	    } else {
	      userAgent = navigator.userAgent;
	    }
	    const md = new MobileDetect(userAgent);
	    if (md.tablet()) {
	      deviceType = "tablet";
	    } else if (md.mobile()) {
	      deviceType = "mobile";
	    } else {
	      deviceType = "desktop";
	    }
	    return { deviceType };

}


