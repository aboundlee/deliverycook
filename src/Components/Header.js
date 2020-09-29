import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";

import { Link, withRouter, useLocation } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { actionCreators } from './StoreRedux';

import { Event } from '../Utils/GaTracker';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


import '../Styles/Header.css';

const NavBar = styled.div`
    z-index: 1001;
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

    @media screen and (min-width:768px) {

      ${props => {
            if (props.hover && !props.brand) {
                return css `
		 background: #fff;
		 height: 109px;
                `;
            } else if (props.hover && props.brand) {
                return css `
		 background: #fff;
		 height: 15.5rem;
                `;
            }
      }}

    }

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

`;

const AdditionalMenu = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 500;
    display: none;

    -webkit-transition: display 0.4s ease;
    transition: display 0.4s ease;

    ${props => {
        if (props.hover) {
           return css `
              display: block;
           `;
        }
     }}
    ${props => {
        if (!props.brand) {
           return css `
              display: none;
           `;
        }
     }}
    
    @media screen and (max-width:768px) {
        display: none;
    }
`;

const AdditionalMenuItem = styled.li`
   width: auto;
    padding: 0;
    font-size: 1rem;
     height: 2rem;
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
     width: 10rem;
    iheight: 65px;
    padding: 0;
    font-size: 1.25rem;

    position: relative;
    @media screen and (max-width:768px) {
     width: auto;

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
            if (props.iswhiteheader){
                return css `
                    color: #242424;
                    text-shadow: none;
                `;
            }
        }}
    ${props => {
            if (props.hover){
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

const AdditionalHeaderLink = styled(HeaderLink)`

   line-height: 1rem;

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
       border: 1px solid #E50012;
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

const LinkHighLight = styled.img`
    position: absolute;
    left: 50%;
    bottom: 15%;
    transform: translate(-50%,0);
`;

const Header = ({changePageTo, history}) => {
    let menus = [];
    let links = [];
    const brandMenus = ["브랜드&메뉴", "매장안내", "딜쿡소식", "/Images/BusinessLink.svg", "창업 센터"];
    const brandLinks = ["/about/all", "/store", "/news", "/business"];
    const brandHeaders = ['/','/company', '/about', '/about/all', '/about/1','/about/2','/about/3','/store','/news'];

    const businessMenus = ["성공가이드북", "창업안내", "문의하기", "/Images/BrandLink.svg","브랜드"];
    const businessLinks = ["/success", "/info", "/consult", "/"];
    const businessHeaders = ['/business','/success','/info','/consult'];


    const whiteHeaders = ['/company', '/about','/about/all','/about/1','/about/2','/about/3','/store','/news'];

    let pageChanger = true;
    const [trigger, setTrigger] = useState();
    const [showMenu, setShowMenu] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(false);

    useEffect(() => {
    window.scrollTo(0, 0);
   }, [trigger]);

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

    function onClick (e) {
        changePageTo(pageChanger);
        setTrigger();
        setShowMenu(false);
    }

    function clickMenu () {
       setShowMenu(!showMenu);
    }

   function clearMenu () {
        setTrigger(Math.random());
        setShowMenu(false);
   }

  function hoverMenuIn () {
    setHoverMenu(true);
  }

  function hoverMenuOut () {
    setHoverMenu(false);

  }

  return (
        <NavBar active={showMenu} iswhiteheader={isWhiteHeader? 1 : 0} onMouseEnter={() => setHoverMenu(true)} onMouseLeave={() => setHoverMenu(false)} hover={hoverMenu} brand={isBrandPage}>
        <NavContainer>
                {isBrandPage 
		? (
		    <Link to="/" onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '브랜드 로고');}}>
			<Logo src="/Images/LogoBrand.png" alt="Logo"/>
		    </Link>

		)
		: (
		    <Link to="/business" onClick={() => {clearMenu(); Event('링크', '링크 클릭', '창업센터 로고');}}>
			<BusinessLogo src="/Images/LogoBusiness.png" alt="LogoBusiness"/>
		    </Link>
		)}


            <MenuBox active={showMenu}>
			{ isBrandPage  
                        ? (
                    <Menu className="navlinks">
                        <MenuItem>
                            <HeaderLink to={'/company'} onClick={()=> {Event('링크', '링크 클릭', '회사소개');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>회사소개</HeaderLink>
			    {headerLocation === '/company' && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
			<MenuItem>
                            <HeaderLink to={links[0]}  onClick={()=> {Event('링크', '링크 클릭', '브랜드&메뉴');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[0]}</HeaderLink>
			    {headerLocation.includes('/about')  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
				    <AdditionalMenu className="navlinks" hover={hoverMenu} brand={isBrandPage}>
					    <AdditionalHeaderLink to={'/about/all'} onClick={()=> {Event('링크', '링크 클릭', '딜리버리쿡');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>
					        <AdditionalMenuItem> 딜리버리쿡 소개</AdditionalMenuItem></AdditionalHeaderLink>
					    <AdditionalHeaderLink to={'/about/1'} onClick={()=> {Event('링크', '링크 클릭', '삼겹살쿡');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>
						<AdditionalMenuItem>딜리버리삼겹살쿡</AdditionalMenuItem>
					    </AdditionalHeaderLink>
				       <AdditionalHeaderLink to={'/about/2'} onClick={()=> {Event('링크', '링크 클릭', '돈까스쿡');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>
					  <AdditionalMenuItem>딜리버리돈까스쿡</AdditionalMenuItem>
					</AdditionalHeaderLink>
					<AdditionalHeaderLink to={'/about/3'} onClick={()=> {Event('링크', '링크 클릭', '떡볶이쿡');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>
				 	    <AdditionalMenuItem>딜리버리떡볶이쿡</AdditionalMenuItem>
					</AdditionalHeaderLink>
				    </AdditionalMenu>
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[1]} onClick={()=> {Event('링크', '링크 클릭', '매장안내');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[1]}</HeaderLink>
			    {headerLocation === links[1]  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[2]} onClick={()=> {Event('링크', '링크 클릭', '딜쿡소식');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[2]}</HeaderLink>
			    {headerLocation === links[2]  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
                        <MenuItem>
                        
				<HeaderLink to={links[3]} onClick={() => {onClick(); Event('링크', '링크 클릭', '창업센터 링크');}}>
					<LinkButton>
					<ButtonText>{menus[4]}</ButtonText></LinkButton>
			      	</HeaderLink>
		
                        </MenuItem>
                    </Menu>
		     )
                    : (
                    <Menu className="navlinks">
			<MenuItem>
                            <HeaderLink to={links[0]} onClick={()=> {Event('링크', '링크 클릭', '성공가이드북');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[0]}</HeaderLink>
			    {headerLocation === links[0]  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[1]} onClick={()=> {Event('링크', '링크 클릭', '창업안내');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[1]}</HeaderLink>
			    {headerLocation === links[1]  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
                        <MenuItem>
                            <HeaderLink to={links[2]} onClick={()=> {Event('링크', '링크 클릭', '문의하기');}} iswhiteheader={isWhiteHeader? 1 : 0} hover={hoverMenu}>{menus[2]}</HeaderLink>
			    {headerLocation === links[2]  && (<LinkHighLight src="/Images/HeaderHighLight.svg" />)}
                        </MenuItem>
                        <MenuItem>
				            <HeaderLink to={links[3]} onClick={()=> {onClick();Event('링크', '링크 클릭', '브랜드 링크');}}>
					            <LinkButton>
					                <ButtonText>{menus[4]}</ButtonText>
                                </LinkButton>
			      	        </HeaderLink>
				
                            
                        </MenuItem>
                    </Menu>

                   )}



                    {/* 모바일 메뉴 */}
                    <MobileMenu className="navlinks">
                        <MenuPart>
                            <MainMenuItem>
                                <HeaderLink to={'/business'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '창업센터 카테고리');}} iswhiteheader={isWhiteHeader? 1 : 0}>창업센터</HeaderLink>
                            </MainMenuItem>
                            <SubMenuItems>
                                <MenuItem>
                                    <HeaderLink to={'/business'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '창업센터');}} iswhiteheader={isWhiteHeader? 1 : 0}>창업센터</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/success'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '성공가이드북');}} iswhiteheader={isWhiteHeader? 1 : 0}>성공가이드북</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/info'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '창업안내');}} iswhiteheader={isWhiteHeader? 1 : 0}>창업안내</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/consult'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '문의하기');}} iswhiteheader={isWhiteHeader? 1 : 0}>문의하기</HeaderLink>
                                </MenuItem>
                            </SubMenuItems>

                        </MenuPart>
                        <MenuPart>
                            <MainMenuItem>
                                <HeaderLink to={'/'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '브랜드 카테고리');}} iswhiteheader={isWhiteHeader? 1 : 0}>브랜드</HeaderLink>
                            </MainMenuItem>
                            <SubMenuItems>
                                <MenuItem>
                                    <HeaderLink to={'/'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '브랜드');}} iswhiteheader={isWhiteHeader? 1 : 0}>브랜드</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/company'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '회사소개');}} iswhiteheader={isWhiteHeader? 1 : 0}>회사소개</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/about/all'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '브랜드&메뉴');}} iswhiteheader={isWhiteHeader? 1 : 0}>브랜드&메뉴</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/store'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '매장안내');}} iswhiteheader={isWhiteHeader? 1 : 0}>매장안내</HeaderLink>
                                </MenuItem>
                                <MenuItem>
                                    <HeaderLink to={'/news'} onClick={()=> {clearMenu(); Event('링크', '링크 클릭', '딜쿡소식');}} iswhiteheader={isWhiteHeader? 1 : 0}>딜쿡소식</HeaderLink>
                                </MenuItem>
                            </SubMenuItems>
                        </MenuPart>

                    </MobileMenu>
            </MenuBox>


           <MobileMenuUI active={showMenu} onClick={()=> {clickMenu(); Event('모바일 메뉴', '클릭', '모바일 메뉴 클릭');}}>
                <MenuUI/>
                <MenuUI/>
                <MenuUI/>
            </MobileMenuUI>
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
