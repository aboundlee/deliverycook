
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';



import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../Next/Components/Header';
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components'
import Theme from "../Styles/Theme";
import CircleModal from '../Next/Components/CircleModal';

import 'react-multi-carousel/lib/styles.css'; // carousel 

/*css*/
import '../Next/Styles/global.scss';
import '../Next/Styles/global.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import ModalAnimation from '../Animations/ModalAnimation.js';

import config from 'react-reveal/globals';
config({ ssrFadeout: true });



const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export default class RootApp extends App {
    
   componentDidMount() {
        ModalAnimation();
    }

    render() {
        const { Component, ...pageProps } = this.props;
        return (
            <ThemeProvider theme={Theme}>
            <GlobalStyles />
                <Head>
                    <title>딜리버리쿡</title>
          <style>{`
            #__next { height: 100% }
          `}
          </style>
                </Head>
		    <Header/>
	      <Wrapper>
		<Component {...pageProps}/>
		<CircleModal/>
	      </Wrapper>
            </ThemeProvider>
        );
    }
}
