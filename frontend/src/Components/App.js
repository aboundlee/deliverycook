import React, {useState, useEffect} from 'react';
//import { gql } from 'apollo-boost';

import { ThemeProvider } from "styled-components";
import styled from "styled-components";

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

/*
const styles = {
  
  overlay?: CSSProperties | undefined; 
  modal?: CSSProperties | undefined; 
  closeButton?: {CSSProperties} | undefined; 
  closeIcon?: CSSProperties | undefined; 
};
*/

const App = () => {

  const [modalVisible, setModalVisible] =useState(false);


  useEffect(() => {
    setTimeout(function(){
        setModalVisible(true);
    }, 1000);

    

  },[]);

//        <PopUpModal visible={modalVisible} setVisible={() => setModalVisible(false)}/>

  return (
  <ThemeProvider theme={Theme}>
         <GlobalStyles />
         
      <Router>

        <Header/>
      <Wrapper>
        <Routes/>
        <CircleModal/>

      </Wrapper>
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