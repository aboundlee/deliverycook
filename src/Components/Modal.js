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
    margin: 20px;
    color: #242424;
    font-size: 20px;
    font-weight: bold;
`;


const ModalContents = styled.p`
    margin: 20px;

    width: 100%;
    color: #242424;
    font-size: 12px;
`;

const Bold = styled.span`
    font-weight: bold;
`;
const Close = styled.a`

    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    width: 30%;

    background-color: #E50012;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 6px;
    &:hover {
        background-color: #fff;
        border: 2px solid #E50012;
        color: #E50012;
    }


    @media (max-width: 480px) { 
        width: 70vw;
    } 

`;


const TextModal = ({show, handleShow, handleClose}) =>  {

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
                        <ModalHeader>개인정보수집관련 동의사항</ModalHeader>
                        <ModalContents>
                            <Bold>1. 개인정보의 수집 및 이용 목적</Bold>
                            <br/>가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.

                            <br/><br/><Bold>2. 처리하는 개인정보 항목</Bold>
                            <br/>- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
                            <br/>- 선택항목 : 이메일

                            <br/><br/><Bold>3. 개인정보의 처리 및 보유 기간</Bold>
                            <br/>① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
                            <br/>② 개인정보의 보유 기간은 5년입니다.
                         </ModalContents>
                        <Close href="#" onClick={e => {e.preventDefault();handleClose()}}>닫기</Close>
                    </ModalContainer>
                </Modal>
            </section>
        );
};
      


export default TextModal;
