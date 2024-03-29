import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
//import ClipLoader from "react-spinners/ClipLoader";
import Loader from './Loader';

import { initGA, PageView } from '../Utils/GaTracker';



import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
//import { BrowserRouter as Router} from "react-router-dom";
import {Router} from "react-router-dom";
import { createBrowserHistory } from 'history';


import Routes from "./Router";
import Header from "./Header";
import PopUpModal from "./ImageModal";
import CircleModal from "./CircleModal";
import ReactGA from 'react-ga';
//server-side rendering for react-reveal
import config from 'react-reveal/globals';
import dotenv from 'dotenv';
config({ ssrFadeout: true });

dotenv.config();

const history = createBrowserHistory();

history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
});


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;


const Thumbnail = styled.div`
   background: url("/Images/thumbnail.jpg") no-repeat; 
    width: 100%;
    height: 100%;
    display: none;

`;
const App = () => {

  const [modalVisible, setModalVisible] =useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
    PageView();


    setTimeout(function(){
    	setLoading(false);
        setModalVisible(true);
    }, 500);
  },[]);

        //<PopUpModal visible={modalVisible} setVisible={() => setModalVisible(false)} />


  return (
  <ThemeProvider theme={Theme}>
         <GlobalStyles />
            <Helmet>
                <meta charSet="utf-8" />
		        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>딜리버리쿡</title>
                <meta property="og:url" content="https://deliverycook.kr/" />
                <meta property="og:site_name" content="딜리버리쿡" key="ogsitename" />

                <meta property="og:title" content="딜리버리쿡" key="ogtitle" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.deliverycook.kr/Images/thumbnail.jpg" />
                <meta property="og:description" content="우리동네 작은 푸드코트, 딜리버리쿡으로 성공하세요!"/>

                <meta name="description" content="우리동네 작은 푸드코트, 딜리버리쿡으로 성공하세요!" data-react-helmet="true"/> <meta name="keywords" content="web, web development, web design, web plan, community"/> 
                <meta name="naver-site-verification" content="005e934209b78a32053989a501ca8bb2e006feab" />

                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="https://deliverycook.kr/" />
                <meta property="twitter:title" content="딜리버리쿡" />
                <meta property="twitter:description" content="우리동네 작은 푸드코트, 딜리버리쿡으로 성공하세요!"/>
                <meta property="twitter:image" content="https://www.deliverycook.kr/Images/thumbnail.jpg" />

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Type" content="text/xml; charset=utf-8" />

		<link rel="canonical" href="https://deliverycook.kr/" />

            </Helmet>
         
      <Router history={history}>


        <Header/>
	{ loading 
        ? (
            <Loader loading={loading}/>
	) 
	: (
      <Wrapper>
          <Routes/>
          <CircleModal/>

      </Wrapper>
	)}
     <Thumbnail/>
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
