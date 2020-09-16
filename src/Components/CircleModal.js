


import React,{useState, useEffect} from 'react';
import styled, { css, keyframes } from 'styled-components';


import '../Styles/CircleModal.scss';
import ModalAnimation from '../Animations/ModalAnimation.js';
import ConsultForm from './ConsultForm';


const Wrapper = styled.div`
    width: 100%;
    height: 100%:
`;


const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

`;

const Img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 112%;
    height: 112%;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

`;

const CircleBtn = styled.button`

   z-index: 10001;

  ${props => {
		if (props.active) {
            return css `
            -webkit-animation:  ${scaleUpDown} 2s infinite linear alternate;
            -moz-animation:    ${scaleUpDown} 2s infinite linear alternate;
            -o-animation:       ${scaleUpDown} 2s infinite linear alternate;
            animation:         ${scaleUpDown}  2s infinite linear alternate;
            `;
		}
	}}


`;


const scaleUpDown = keyframes`
    from {
        transform: scale(0.7);
        -webkit-transform: scale(0.7);
    }
    to {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }

`;



export default () => {
    
    const [typing, setTyping] = useState(false);
    console.log(typing);

    ModalAnimation();
    return (
    <Wrapper>
        <CircleBtn active data-modal="nav" data-action="open" className="nav-open button button--circular" type="button" onClick={()=>setTyping(true)}>
            <Img src="/Images/Business/Link.png"  alt="Logo"/> 

        <span><i className="fa fa-bars"></i></span>
        
        </CircleBtn>

        <div className="overlay">
        <div className="overlay__ripple"></div>
        </div>


        <ModalWrapper className="modal-wrapper">
            <Modal className="modal" data-modal="nav">
                <ConsultForm start={typing} /> 
            </Modal>
            <a href="/" className="button button--circular close-button" data-action="close" onClick={()=>setTyping(false)}>
                <Img src="/Images/Business/closebutton.png"  alt="Close"/> 
            </a>
        </ModalWrapper>
    </Wrapper>
    );
};

