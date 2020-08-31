import React from "react";
import styled, {css} from "styled-components";

//import Fade from 'react-reveal/Fade';
import BrandDetail from '../../Components/BrandDetail';
import BrandMenu from '../../Components/BrandMenu';
import { Link, withRouter, useLocation } from "react-router-dom";

const Page = styled.section`
    width: 100%;
    height: 100%;
`;


const Navigator = styled.div`
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    width: 5rem;
    height: 15rem;
    background-color: #fff;
    border: 1px solid #1D1D1D;
    z-index: 100;
    cursor: pointer;

`;
const BrandLinks = styled.div`
   width: 100%;
   hight: 15rem;
   overflow-y: scroll;
   -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 등
  }
`;

const BrandLinkWrapper = styled.div`
   width: 100%;
   hight: auto;
   padding: 0.5rem;
   border-bottom: 1px solid #1D1D1D;

    cursor: pointer;
   &:hover {
       background-color: #1D1D1D;
   }
   ${props => {
       if (props.clicked === props.brand_num) {
        return (css`background-color: #1D1D1D;`);
       }
    }} 
`;



const BrandLink = styled(Link)`
   width: 100%;
   height: 100%;
`;


const BrandLogo = styled.img`
    width: 100%;
    height: 100%;
`;

const Controller = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-contents: center;
`;
const Down = styled.img`

    width: 4.8rem;
    height: 1.3rem;
`;

export default ({match}) => {
    let brand = match.params.brand;


    let next = String(parseInt(brand)+1);

    if (parseInt(brand) >= 3){
        next = '1';
    }

    return (
        <Page>
            <BrandDetail brand={brand}/>
            <BrandMenu brand={brand}/>

            <Navigator>
                <BrandLinks>
                        <BrandLink to ={"/about/1"}>
                    <BrandLinkWrapper clicked={brand} brand_num={'1'}>
                            <BrandLogo src="/Images/Brand/About/Brand1/Navigator.png" />
                            {/* <ClickedLogo src="/Images/Brand/About/Brand1/Navigator.png" /> */}
                    </BrandLinkWrapper>
                        </BrandLink>    
                    
                    <BrandLink to ={"/about/2"}>
                    <BrandLinkWrapper clicked={brand} brand_num={'2'}>
                        <BrandLogo src="/Images/Brand/About/Brand2/Navigator.png" />
                            {/* <ClickedLogo src="/Images/Brand/About/Brand2/Navigator.png" /> */}
                    </BrandLinkWrapper>
                        </BrandLink>    

                    <BrandLink to ={"/about/3"}>
                    <BrandLinkWrapper clicked={brand} brand_num={'3'}>
                        <BrandLogo src="/Images/Brand/About/Brand3/Navigator.png" />
                            {/* <ClickedLogo src="/Images/Brand/About/Brand3/Navigator.png" /> */}
                    </BrandLinkWrapper>
                    </BrandLink>    
                </BrandLinks>
                <Controller>
                    <Link to ={`/about/${next}`}>
                    <Down src="/Images/Brand/About/down.png"/>
                    </Link>
                </Controller>
            </Navigator>
        </Page>
    );
  };
  
