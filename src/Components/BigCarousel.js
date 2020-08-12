import React,{useState, useEffect} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Loader from './Loader';



const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MenuImg = styled.img`
    z-index: 1;
    width: 60%;
    max-width: 400px;
    @media (max-width: 480px) {
    width: 50%;

   }
`;
const LogoImg = styled.img`
    margin-top: 20px;
    width: 30%;

`;

const delay = () => new Promise(resolve => setTimeout(() => resolve(false), 500));

function useAsync(asyncFn, onSuccess) {
  useEffect(() => {
    let isMounted = true;
    asyncFn().then(data => {
      if (isMounted) onSuccess(data);
    });
    return () => {
      isMounted = false;
    };
  }, [asyncFn, onSuccess]);
}

const MenuCarosuel = () => {

  const [loading, setLoading] = useState(true);
  useAsync(delay, setLoading);


    return (
	
	<div>
		{loading 
		? (
		    <Loader loading={loading}/>
		) 
		: (
	
        <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={500}
            transitionDuration={1000}
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
            >
        <Item>
            <MenuImg src="/Images/Brand/p2_menu1.png" />
            <LogoImg src="/Images/Brand/p2_logo1.svg" />

        </Item>
        <Item>
            <MenuImg src="/Images/Brand/p2_menu2.png" />
            <LogoImg src="/Images/Brand/p2_logo2.svg" />

        </Item>
        <Item>
            <MenuImg src="/Images/Brand/p2_menu3.png" />
            <LogoImg src="/Images/Brand/p2_logo3.svg" />

        </Item>
        <Item>
            <MenuImg src="/Images/Brand/p2_menu4.png" />
            <LogoImg src="/Images/Brand/p2_logo4.svg" />

        </Item>
        <Item>
            <MenuImg src="/Images/Brand/p2_menu5.png" />
            <LogoImg src="/Images/Brand/p2_logo5.svg" />

        </Item>
        </Carousel>
)}
</div>
        );
}


export default MenuCarosuel;
