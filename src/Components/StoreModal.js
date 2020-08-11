import React from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';


const ModalContainer =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`;
const ModalHeader = styled.h1`
    margin: 3rem;
    color: #242424;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1rem;

`;


const ModalContents = styled.div`

	width: 100%;
        margin-bottom: 3rem;
`;
const ModalContent = styled.p`

    width: 100%;
    color: #242424;
    font-size: 1.25rem;
    line-height: 2rem;
    text-align: left;

`;

const Bold = styled.span`
    display: inline-block;
    font-weight: bold;
`;
const Close = styled.a`

    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    width: 30%;

    border: 2px solid #fff;
    border-radius: 6px;
     border: 2px solid #E50012;
    &:hover {
        background-color: #E50012;
	color: #fff;
    }


    @media (max-width: 480px) { 
        width: 70vw;
    } 

`;


const TextModal = ({store, show, handleClose}) =>  {

        return (
            <section>
                <Modal 
                    visible={show}
                    width="400"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => handleClose()}
                >
                    <ModalContainer>
                        <ModalHeader>{store.name}</ModalHeader>
			<ModalContents>
                        <ModalContent>
                            <Bold>주소    </Bold> :  {store.address}
                         </ModalContent>
                        <ModalContent>
                            <Bold>전화번호</Bold> : {store.phone_number}
                         </ModalContent>
                        <ModalContent>
			<Bold>서비스  </Bold> : 배달 & 테이크아웃
                         </ModalContent>
			</ModalContents>
                        <Close href="#" onClick={e => {e.preventDefault();handleClose()}}>닫기</Close>
                    </ModalContainer>
                </Modal>
            </section>
        );
};
      


export default TextModal;
