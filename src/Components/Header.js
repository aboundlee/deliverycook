import React, { useState } from 'react';
import styled, {css} from "styled-components";

import { Link, withRouter, useLocation } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { actionCreators } from './StoreRedux';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


import '../Styles/Header.css';

const NavBar = styled.div`
    z-index: 101;
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;


    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    ${props => {
            if (props.iswhiteheader) {
                return css `
                    height: 109px;
                    background: #fff;
                `;
            }
    }}
    @media screen and (max-width:768px) {
       height: 80px;
        ${props => {
            if (props.active) {
                return css `
                    height: 100%;
                `;
            }
        }}
    }

`;

const NavContainer = styled.div`
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 0;
    }  
    @media screen and (max-width:768px) {
    height:100%;
    }
`;
const Logo = styled.img`
    float: left;
    width: 11.625rem;
    height: auto;
    padding-left: 3rem;

    @media screen and (max-width:768px) {
        float: none;
        padding-left: 0rem;
        width: 100px;
        height: auto;
    }
`;

const BusinessLogo = styled.img`
    float: left;
    width: 13.625rem;
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
                    height: 100%;
                    display: block;
                    position: absolute;
                    top: 0;                
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
        display: none;
    }
`;

const MobileMenu = styled.ul`
    display: none;
    @media screen and (max-width:768px) {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 500;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #E50012;

        /*same background color of navbar*/
        background-position: center top;
    } 
`;

const MainMenuItem = styled.li`


    height: 5rem;
        text-align: left;
        padding: 0;      
    width: 40%;
    font-weight: bold;
    font-size: 2.5rem;

${'' /* 
        a {
            text-align: center;

            display: block;
            margin: 0 auto;
            padding: 0;

            height: 5rem;

            color: #E50012; 
	    margin-top: 20px;

       	    line-height: 5rem;

            width: 80%;
	    background: url("/Images/mobile_HeaderLink.png") no-repeat; 
	    background-position: center;
	    background-size: contain;

        } */}
`;
const SubMenuItems = styled.div`
    width: 50%;
    text-align: left;

`;

const MenuPart = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: center;
    padding: 2rem 0;

    &:first-child {
        border-bottom: 1px solid rgba(255,255,255,0.4);
    }
`;

const MenuItem = styled.li`
   width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
    font-size: 1.25rem;

    @media screen and (max-width:768px) {

        height: 5rem;
        font-size: 2rem;

        padding: 0;      
    }

`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    cursor: pointer;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    ${props => {
            if (props.iswhiteheader) {
                return css `
                    color: #242424;
                    text-shadow: none;
                `;
            }
        }}
    &:hover {
        color: #E50012;
    }

    @media screen and (max-width:768px) {

        width: 100%;

        color: #fff;
    	text-shadow: none; 

        &:hover {
            color: #fff;
        }

   
    }
`;

const MobileMenuUI = styled.span`
    display: none;

    @media screen and (max-width:768px) {
        display: block;
    }
    cursor: pointer;
    width: 30px;
    height: 25px;
    margin-top: 20px;
    position: absolute;
    right: 30px;
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

const MenuUI = styled.i`
    background-color: #fff;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

`;

const MobileHeaderLink = styled(Link)`

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


const LinkButton = styled.div`
    vertical-align: middle;
    width: 6.875rem;
    height: 4.045rem;
background: #E50012;
border-radius: 2.719rem;

    -moz-box-shadow: 0px 0.188rem 0px 0px #FFFFFF;
    -webkit-box-shadow: 0px 0.188rem 0px 0px #FFFFFF;
    box-shadow: 0px 0.188rem 0px 0px #FFFFFF;
       transition: margin-top 0.5s;
   &:hover {

	color: #E50012;
    background: #ffffff;
    -moz-box-shadow: 0px 0px 0px 0px #E50012;
    -webkit-box-shadow: 0px 0px 0px 0px #E50012;
    box-shadow: 0px 0px 0px 0px #E50012;
       margin-top: 0.188rem;
   }

    @media screen and (max-width:768px) {
        display: block;
        width: 60px;
        height: auto;
    }
    
`;

const ButtonText = styled.p`
   line-height: 4.063rem;

`;
const Header = ({changePageTo}) => {
    let menus = [];
    let links = [];
    const brandMenus = ["브랜드소개", "매장안내", "딜쿡소식", "/Images/BusinessLink.svg", "창업 센터"];
    const brandLinks = ["/about/1", "/store", "/news", "/business"];
    const brandHeaders = ['/','/about','/about/1','/about/2','/about/3','/store','/news'];

    const businessMenus = ["성공가이드북", "창업안내", "문의하기", "/Images/BrandLink.svg","브랜드"];
    const businessLinks = ["/success", "/info", "/consult", "/"];
    const businessHeaders = ['/business','/success','/info','/consult'];


    const whiteHeaders = ['/about','/about/1','/about/2','/about/3','/store','/news'];

    let pageChanger = true;
    const [trigger, setTrigger] = useState();
    const [showMenu, setShowMenu] = useState(false);

    let isBrandPage; 
    let isWhiteHeader;

    let headerLocation = useLocation().pathname;
 
    if (businessHeaders.includes(headerLocation)) {
        isBrandPage = false;
    }
        
    else if (brandHeaders.includes(headerLocation)){
        isBrandPage = true;
    }

    if (whiteHeaders.includes(headerLocation)){
        isWhiteHeader = true;
    } else {
        isWhiteHeader = false;
    }


    if (isBrandPage) {
        menus = brandMenus;
        links = brandLinks;
        pageChanger = "businessPage";
    } else {
        menus = businessMenus;
        links = businessLinks;
        pageChanger = "brandPage";
    }
    window.scrollTo(0, 0);

    function onClick () {
        changePageTo(pageChanger);
        setTrigger();
        setShowMenu(false);
    }

    function clickMenu () {
       setShowMenu(!showMenu);
    }

   function clearMenu () {
        setShowMenu(false);
   }

  return (
        <NavBar active={showMenu} iswhiteheader={isWhiteHeader? 1 : 0}>
        <NavContainer>
                {isBrandPage 
		? (
		    <Link to="/" onClick={clearMenu}>
			<Logo src="/Images/LogoBrand.png" alt="Logo"/>
		    </Link>

		)
		: (
		    <Link to="/business" onClick={clearMenu}>
			<BusinessLogo src="/Images/LogoBusiness.png" alt="LogoBusiness"/>
		    </Link>
		)}


            <MenuBox active={showMenu}>
                    <Menu className="navlinks">
                        <MenuItem>
                            <HeaderLink to={links[0]} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>{menus[0]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[1]} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>{menus[1]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[2]} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>{menus[2]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            { showMenu 
                            ? (<p><HeaderLink to={links[3]} onClick={clearMenu}>{menus[4]}</HeaderLink></p>)
                            : (
				<HeaderLink to={links[3]} onClick={onClick}>
					<LinkButton>
					<ButtonText>{menus[4]}</ButtonText></LinkButton>
			      	</HeaderLink>
				)
                            }
                        </MenuItem>
                    </Menu>





                    <MobileMenu className="navlinks">
                        <MenuPart>
                            <MainMenuItem>
                                <HeaderLink to={'/'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>브랜드</HeaderLink>
                            </MainMenuItem>
                            <SubMenuItems>
                                <MenuItem>
                                    <HeaderLink to={'/about/1'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>브랜드소개</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/store'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>매장안내</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/news'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>딜쿡소식</HeaderLink>
                                </MenuItem>
                            </SubMenuItems>
                        </MenuPart>
                        <MenuPart>
                            <MainMenuItem>
                                <HeaderLink to={'/business'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>창업센터</HeaderLink>
                            </MainMenuItem>
                            <SubMenuItems>

                                <MenuItem>
                                    <HeaderLink to={'/success'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>성공가이드북</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/info'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>창업안내</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/consult'} onClick={clearMenu} iswhiteheader={isWhiteHeader? 1 : 0}>문의하기</HeaderLink>
                                </MenuItem>
                            </SubMenuItems>

                        </MenuPart>

                    </MobileMenu>
            </MenuBox>


           <MobileMenuUI active={showMenu} onClick={clickMenu}>
                <MenuUI/>
                <MenuUI/>
                <MenuUI/>
            </MobileMenuUI>
            
            {/* <MobileHeaderLink onClick={onClick} to={links[3]}><ToBusiness src={menus[3]} alt="Link"></ToBusiness></MobileHeaderLink> */}
        </NavContainer>
    </NavBar>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
    return {
        changePageTo: brandCategory => dispatch(actionCreators.changePageTo(brandCategory))
    };
}

export default compose(withRouter,connect(null,mapDispatchToProps))(Header);
