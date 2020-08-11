import React, {useState} from 'react';
import styled from "styled-components";


import { useForm } from 'react-hook-form';
import TextModal from '../../Components/Modal';

import KakaoMessage from '../../Components/KakaoMessage';

const Page = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #242424;
    color: #fff;

`;




const Bold = styled.span`
    font-weight: bold;

`;

const MainTextContainer = styled.div`
    width: 90%;
    margin-top: 3rem;

    margin-bottom: 3rem;
`;
const MainText = styled.p`
    font-size: 2.75rem;

`;
const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid #FFFFFF;
    flex-direction: row;

    width: 90%;
    padding: 25px;
`;


const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #FFFFFF;

    width: 90%;
    height: 40%;
    min-height: 300px;
    @media screen and (max-width:1080px) {
        height: 15%;
        min-height: 0px;

    }
`;

const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;


const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20%;
`;
  

const BrandIcon = styled.div`
    margin-top: 0;
    position: relative;
    width: 10vw;
    height: 10vw;
    display: inline-block;
    border-radius: 3px;
    margin-left: 2%;
    margin-right: 2%;

    cursor: pointer;

   &:hover rect {
     stroke-dasharray: 50 0;
     stroke-width: 3px;
     stroke-dashoffset: 0;
     stroke: #fff;
   }

   &:active {
    background: white;
   }


   @media screen and (max-width:480px) {
        svg {
            display: none;
        }
    }
`


 
  const Rectangle = styled.rect`
    stroke-width: 6px;
    fill: transparent;
    stroke-dasharray: 85 400;
    stroke-dashoffset: -220;
    transition: 1s all ease;
  
    width: 100%;
    height: 100%;
    @media screen and (max-width:480px) {
        display: none;
    }
  `;
  

const LogoImg = styled.img`
    width: 85%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

const BrandLabel = styled.p`
    color: #fff;
    font-size: 2rem;
`;

const FormLabel = styled.p`
    color: #fff;
    font-size: 2rem;
    display: inline-block;
    margin: 0 25px;
`;

const Form = styled.form`


`;

const Input = styled.input`

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px #242424 inset !important;
        -webkit-text-fill-color: #fff !important;

   }

    }
   -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: #242424;
    outline: 0;
    border-width: 0 0 2px;
   border-color: #fff;
   width: 20vh;
   margin: 0 25px;

   color: #fff;
   font-size: 1.5rem;
    &:focus {
        box-shadow: none;
    }

   &::-webkit-input-placeholder { /* Edge */
  color: #fff;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
    }

    &::placeholder {
    color: #fff;
    }

   
   @media screen and (max-width:480px) {
        margin: 10px auto;
        display: block;
        font-size: 2rem;
        width: 50vw;
   }
`;



const CheckBoxWrapper = styled.div`
    display: inline-block;
    margin: 10px; 
    width: 50%;
    text-align: center; 

    @media (max-width: 480px) { 
        width: 100%;
        margin-bottom: 20px;
    } 

`;

const Submit = styled.input`

    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;

    background-color: #242424;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 35px;
    margin-left: 3rem;

    &:hover {
        background-color: #E50012;
        border: 2px solid #fff;
        color: #fff;
    }


    @media (max-width: 480px) { 
    } 

`;


const AgreeDiv = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;


    @media (max-width: 480px) { 
        flex-direction: column;
        margin: 2rem 0;
        align-items: center;
        justify-content: center;
    } 

`;
const SVG = styled.svg`
    height:100%;
    width: 100%;
`;

const ModalButton = styled.img`
    -webkit-filter: invert(100%);
    filter: invert(100%);
    width: 20px;
    height: 20px;
    margin: 3px;
    cursor: pointer;
`;

export default () => {

    /* For Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const { register, errors, reset, handleSubmit } = useForm();
    const onSubmit = ({name, phone, address,check},e) => {
        if (errors.name) {
            alert ("성함을 입력해주세요.");
        } else if (errors.phone) {
            alert ("연락처를 입력해주세요.(예시 : 01099999999)");
        } else if (errors.address) {
            alert ("희망지역 입력해주세요.");
        } else if (errors.check) {
            alert ("개인정보 수집에 동의해주세요.");
        } 
        e.target.reset();
        KakaoMessage({name, phone, address});
    };


    return (
	  <Page> 
        <MainTextContainer>
        <MainText><Bold>딜리버리쿡</Bold>과 함께 시작해보세요.</MainText>
        </MainTextContainer>
        <BrandWrapper>
            <TextContainer>
            <BrandLabel>브랜드</BrandLabel>
            </TextContainer>
            <BrandContainer>

            <BrandIcon>
                <SVG xmlns="http://www.w3.org/2000/svg">
                    <Rectangle/>
                </SVG>
                <LogoImg src="/Images/Business/p2_logo1.svg" alt="logo"></LogoImg>

            </BrandIcon>

            <BrandIcon>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <Rectangle/>
                </svg>
                <LogoImg src="/Images/Business/p2_logo2.svg" alt="logo"></LogoImg>

            </BrandIcon>
            
            <BrandIcon>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <Rectangle/>
                </svg>
                <LogoImg src="/Images/Business/p2_logo3.svg" alt="logo"></LogoImg>

            </BrandIcon>

            
            <BrandIcon>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <Rectangle/>
                </svg>
                <LogoImg src="/Images/Business/p2_logo4.svg" alt="logo"></LogoImg>

            </BrandIcon>

                    
            <BrandIcon>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <Rectangle/>
                </svg>
                <LogoImg src="/Images/Business/p2_logo5.svg" alt="logo"></LogoImg>
            </BrandIcon>
            </BrandContainer>

        </BrandWrapper>

        <FormWrapper>
        <Form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="성함"
                        ref={register({ required: true, maxLength: 80 })}
                    />
                    {errors.name && "성함을 입력해주세요."}

                    <Input
                        type="tel"
                        name="phone"
                        max="11"
                        placeholder="연락처"
                        ref={register({ required: true, maxLength: 11,pattern: /^(010{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/})}
                    />
                    {errors.phone?.type === "required" && "연락처를 입력해주세요."}
                    {errors.phone?.type === "pattern" && "연락처 입력 예시 : 01011112222"}

                    <Input
                        type="text"
                        name="address"
                        placeholder="희망지역"
                        ref={register({ required: true, maxLength: 100 })}
                    />
                    {errors.address && "희망지역 입력해주세요."}

                    <AgreeDiv>                
                    
                            <CheckBoxWrapper>
                                <input type="checkbox" id="check" name="check" value="" ref={register({ required: true })} />
                                <label htmlFor="check">
                                <span></span>개인정보 수집에 동의합니다.
                                </label>
                                <ModalButton src="/Images/Business/paper_icon.png" alt="modal" onClick={handleShow}/>
                        </CheckBoxWrapper>
                        {errors.check && "개인정보 수집에 동의해주세요."}
          
			        <TextModal show={show} handleShow={handleShow} handleClose={handleClose}/>


                                
                        <Submit type="submit" value="가맹문의 하기"/>
                    </AgreeDiv>
                </Form>

        </FormWrapper>

    </Page>
          
    );
};
  

