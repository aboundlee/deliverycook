import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import ClipLoader from "react-spinners/ClipLoader";



//import { gql } from 'apollo-boost';

import { ThemeProvider } from "styled-components";
import styled, {css} from "styled-components";

import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Router";
import Header from "./Header";
import PopUpModal from "./ImageModal";
import CircleModal from "./CircleModal";
//server-side rendering for react-reveal
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

//import Footer from './Footer'


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const App = () => {

  const [modalVisible, setModalVisible] =useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
    setTimeout(function(){
        setModalVisible(true);
    }, 1000);

    

  },[]);

//        <PopUpModal visible={modalVisible} setVisible={() => setModalVisible(false)}/>

  return (
  <ThemeProvider theme={Theme}>
         <GlobalStyles />
            <Helmet>
                <meta charSet="utf-8" />
                <title>딜리버리쿡</title>
		<meta property="og:url" content="https://deliverycook.com" />
		<meta property="og:site_name" content="딜리버리쿡" key="ogsitename" />

		<meta property="og:title" content="딜리버리쿡" key="ogtitle" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="https://www.deliverycook.kr/Images/thumbnail.png" />
		<meta property="og:description" content="딜리버리쿡 입니다."/>
                <meta name="description" content="딜리버리쿡 입니다." data-react-helmet="true"/>
		<meta name="keywords" content="web, web development, web design, web plan, community"/> 
            </Helmet>
         
      <Router>

        <Header/>
	{ loading 
        ? (
      <LoadingWrapper>
      <ClipLoader
          size={50}
          color={"#E50012"}
          loading={loading}
        />
      </LoadingWrapper>
	) 
	: (
      <Wrapper>
          <Routes/>
          <CircleModal/>
      </Wrapper>
	)}

      </Router>

      
  </ThemeProvider>
  );
};


export default App;

/*
<Button variant="primary" onClick={() => setModalShow(true)}>
Launch vertically centered modal
</Button>
*/
