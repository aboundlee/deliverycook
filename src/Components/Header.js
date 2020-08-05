import React, { useState } from 'react';
import styled, {css} from "styled-components";

import { Link, withRouter, useLocation } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { actionCreators } from './Store';


import '../Styles/Header.css';

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
    @media screen and (max-width:768px) {
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
const MenuItem = styled.li`
   width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
    @media screen and (max-width:768px) {
        width: 100%;
        text-align: center;
        padding: 0;


        &:last-child a {
            text-align: center;

            display: block;
            margin: 0 auto;
            padding: 0;


            color: #E50012; 
	    margin-top: 20px;
	    height: 130px;
       	    line-height: 130px;

            width: 80%;
	    background: url("/Images/mobile_HeaderLink.png") no-repeat; 
	    background-position: center;
	    background-size: contain;

        }
      
    }

`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover {
        color: #E50012;
    }
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    @media screen and (max-width:768px) {
        text-align: center;
        width: 100%;
        font-weight: bold;

    	text-shadow: none; 
        font-size: 3rem;
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
    margin-top: 20px;
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


const ToBusiness = styled.img`
    vertical-align: middle;
    width: 5.875rem;
    @media screen and (max-width:768px) {
        display: block;
        width: 60px;
        height: auto;
    }
`;


const Header = ({changePageTo}) => {
    let menus = [];
    let links = [];
    let pageChanger = true;
    let [trigger, setTrigger] = useState();
    let [showMenu, setShowMenu] = useState(false);

    let isBrandPage; 
    // const brandHeaders = ['/','/about','/store','/news'];
    // const businessHeaders = ['/','/business','/success','/info','/consult'] ;
    const brandHeaders = ['/','/about','/store','/news'];
    const businessHeaders = ['/business','/success','/info','/consult'] ;
    let headerLocation = useLocation().pathname;
 
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
        menus = ["성공가이드북", "창업안내", "문의하기", "/Images/BrandLink.svg","브랜드 홈페이지"];
        links = ["success", "info", "consult", "/"];
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
        <NavBar active={showMenu}>
        <NavContainer>
            <Link to="/" onClick={clearMenu}>
                <Logo src="/Images/Logo_KR.png"  alt="Logo"/> 
            </Link>
            <MenuBox active={showMenu}>
                    <Menu className="navlinks">
                        <MenuItem>
                            <HeaderLink to={links[0]} onClick={clearMenu}>{menus[0]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[1]} onClick={clearMenu}>{menus[1]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[2]} onClick={clearMenu}>{menus[2]}</HeaderLink>
                        </MenuItem>
                        <MenuItem>
                            { showMenu 
                            ? (<p><HeaderLink to={links[3]} onClick={clearMenu}>{menus[4]}</HeaderLink></p>)
                            : (<HeaderLink to={links[3]} onClick={onClick}><ToBusiness src={menus[3]} alt="Link"></ToBusiness></HeaderLink>)
                            }
                        </MenuItem>
                    </Menu>
            </MenuBox>
           <MobileMenu active={showMenu} onClick={clickMenu}>
                <MobileMenuItem></MobileMenuItem>
                <MobileMenuItem></MobileMenuItem>
                <MobileMenuItem></MobileMenuItem>
            </MobileMenu>
            
            <MobileHeaderLink onClick={onClick} to={links[3]}><ToBusiness src={menus[3]} alt="Link"></ToBusiness></MobileHeaderLink>
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
