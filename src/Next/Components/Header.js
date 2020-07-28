import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styled, {css} from "styled-components";
import { withRouter } from 'next/router'




const NavBar = styled.div`
    z-index: 30;
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;

    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;

`;

const NavContainer = styled.div`
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 0;
    }  
`;
const Logo = styled.img`
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;

    @media screen and (max-width:768px) {
        float: none;
        padding-left: 0rem;
        width: 100px;
        height: auto;
    }
`;

const MenuBox = styled.div`
    height: 65px;
    float: right;
    @media screen and (max-width:768px) {

        width: 100%;
        height: 0;
        overflow: hidden;
        
        ${props => {
            if (props.active) {
                return css `
                    height: auto;
                    display: block;
                    position: absolute;
                    top: 0;
                    ul li {
                        margin-top: 5%; 
                    }
                
                `;
            }
        }}
    }

`;

const Menu = styled.ul`
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 500;
    @media screen and (max-width:768px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #E50012;
        opacity: 0.9;

        filter:alpha(opacity=90);
        -moz-opacity:0.9;
        -khtml-opacity: 0.9;
        /*same background color of navbar*/
        background-position: center top;
    }
`;
const MenuItem = styled.li`
   width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
    @media screen and (max-width:768px) {
        width: 100%;
        text-align: left;
        padding: 0;

        &:first-child {
        margin-top: 15%;
         }

        &:last-child a {
            text-align: center;

            display: block;
            margin: 0 auto;
            padding: 0;

            border: 2px solid #fff;
            border-radius: 35px;
            color: #fff;
            margin-top: 20px;
            width: 80%;
        }
      
    }

`;

const HeaderLink = styled.a`
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    font-size: 20px;

    &:hover {
        color: #E50012;
        cursor: pointer;
    }
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    @media screen and (max-width:768px) {
        text-align: center;
        width: 100%;
        font-size: 4rem;
        padding: 20px;
        &:hover {
            color: #fff;
        }

   
    }
`;

const MobileMenu = styled.span`
    display: none;

    @media screen and (max-width:768px) {
        display: block;
    }
    cursor: pointer;
    width: 30px;
    height: 25px;
    margin: auto;
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;

    i {
        background-color: #fff;
        border-radius: 2px;
        content: '';
        display: block;
        width: 100%;
        height: 4px;
    }

    i:nth-child(1) {
        -webkit-animation: outT 0.8s backwards;
        animation: outT 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }

    i:nth-child(2) {
        margin: 5px 0;
        -webkit-animation: outM 0.8s backwards;
        animation: outM 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }

    i:nth-child(3) {
        -webkit-animation: outBtm 0.8s backwards;
        animation: outBtm 0.8s backwards;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }


    ${props => {
            if (props.active) {
                return css`i:nth-child(1) {
                -webkit-animation: inT 0.8s forwards;
                animation: inT 0.8s forwards;
                };
                i:nth-child(2) {
                -webkit-animation: inM 0.8s forwards;
                animation: inM 0.8s forwards;
                };
                i:nth-child(3) {
                -webkit-animation: inBtm 0.8s forwards;
                animation: inBtm 0.8s forwards;
                };`
              
            }
          
        }}
  
`;

const MobileMenuItem = styled.i`
    background-color: #fff;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

`;

const MobileHeaderLink = styled.a`

    display: none;

    @media screen and (max-width:768px) {
        display: block;
    }

    text-decoration: none;
    line-height: 65px;

    cursor: pointer;
    margin: auto;
    position: absolute;
    right: 20px;
    top: 14px;

`;


const ToBusiness = styled.img`
    vertical-align: middle;

    @media screen and (max-width:768px) {
        display: block;
        width: 60px;
        height: auto;
    }
`;



const Header = ({ router }) => {
    let menus = [];
    let links = [];
    let pageChanger = true;
    let [trigger, setTrigger] = useState();
    let [showMenu, setShowMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    let isBrandPage; 
    const brandHeaders = ['/','/about','/store','/news'];
    const businessHeaders = ['/business','/success','/info','/consult'] ;

    let headerLocation = router.pathname;
 

    if (businessHeaders.includes(headerLocation)) {
        isBrandPage = false;
    }
        
    else if (brandHeaders.includes(headerLocation)){
        isBrandPage = true;
    }


    if (isBrandPage) {
        menus = ["브랜드소개", "매장안내", "딜쿡소식", "/Images/BusinessLink.svg", "창업 센터"];
        links = ["about", "store", "news", "/business"];
        pageChanger = "businessPage";
    } else {
        menus = ["성공가이드북", "창업안내", "문의하기", "/Images/BrandLink.svg","브랜드"];
        links = ["success", "info", "consult", "/"];
        pageChanger = "brandPage";
    }
    //window.scrollTo(0, 0);

    function onClick () {


        setTrigger();
        setShowMenu(false);
    }

    function clickMenu () {

       setShowMenu(!showMenu);
    }

   function clearMenu () {
        setShowMenu(false);
   }
   useEffect (()=>{
    setLoading(true);


   },[]);
   if (loading) {
    window.scrollTo(0, 0);
   }

  return (
        <NavBar>
        <NavContainer>
            <Link href="/">
                <HeaderLink onClick={clearMenu}>
                <Logo src="/Images/Logo.svg"  alt="Logo"/> 
                </HeaderLink>
            </Link>
            <MenuBox active={showMenu}>
                    <Menu className="navlinks">
                        <MenuItem>
                            <Link href={links[0]}><HeaderLink onClick={clearMenu}>{menus[0]}</HeaderLink></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={links[1]}><HeaderLink onClick={clearMenu}>{menus[1]}</HeaderLink></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={links[2]}><HeaderLink onClick={clearMenu}>{menus[2]}</HeaderLink></Link>
                        </MenuItem>
                        <MenuItem>
                            { showMenu 
                            ? (<p><Link href={links[3]}><HeaderLink onClick={clearMenu}>{menus[4]}</HeaderLink></Link></p>)
                            : (<Link href={links[3]}><HeaderLink  onClick={onClick}><ToBusiness src={menus[3]} alt="Link"></ToBusiness></HeaderLink></Link>)
                            }
                        </MenuItem>
                    </Menu>
            </MenuBox>
            <MobileMenu active={showMenu} onClick={clickMenu}>
                <MobileMenuItem></MobileMenuItem>
                <MobileMenuItem></MobileMenuItem>
                <MobileMenuItem></MobileMenuItem>
            </MobileMenu>
            
            <Link href={links[3]}><MobileHeaderLink  onClick={onClick}><ToBusiness src={menus[3]} alt="Link"></ToBusiness></MobileHeaderLink></Link>
        </NavContainer>
    </NavBar>
  );
};


export default  withRouter(Header);
