import React, {useState} from 'react';
import styled from "styled-components";


import { useForm } from 'react-hook-form';
//import '../Styles/ConsultForm.module.scss';

import KakaoMessage from './KakaoMessage';
import TextModal from './Modal';
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;



`;
const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;


    width: 100%;
    height: 100%;
    min-height: 100px;
`;

const MainTextContainer = styled.div`
    width: 90%;
    margin-bottom: 5rem;
`;
const MainText = styled.p`
    font-size: 2.75rem;

    @media (max-width: 480px) { 
        font-size: 2rem;

    }

`;

const Bold = styled.span`
    font-weight: bold;
`;
const BrandLabel = styled.p`
    color: #fff;
    font-size: 2rem;
`;

const FormLabel = styled.p`
    color: #fff;
    font-size: 1.3rem;
    display: inline-block;
    margin: 0 25px;
`;

const Form = styled.form`


    @media (max-width: 480px) { 

        display: flex;
        flex-direction: column;
    } 
`;

const ModalButton = styled.img`
    -webkit-filter: invert(100%);
    filter: invert(100%);
    width: 20px;
    height: 20px;
    margin: 3px;
    cursor: pointer;
`;

const Input = styled.input`

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px #E50012 inset !important;
        -webkit-text-fill-color: #fff !important;

   }

    }
   -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    outline: 0;
    border-width: 0 0 2px;
   border-color: #fff;
   width: 22vh;
   margin: 0 25px;
   padding: 10px;

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

   
    @media (max-width: 480px) { 

        width: 70vw;
        margin: 7px 25px;
        border-width: 0 0 1px;
        font-size: 16px;

    }
`;

const AgreeDiv = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-direction: row;


    @media (max-width: 480px) { 
        flex-direction: column;
        margin: 2rem 0;
        align-items: center;
        justify-content: center;
    } 

`;

const Submit = styled.input`

    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    width: 30%;

    background-color: #E50012;
        border: 2px solid #fff;
        color: #fff;
    &:hover {
        background-color: #fff;
    border: 2px solid #fff;
    color: #E50012;
    }


    @media (max-width: 480px) { 
        width: 70vw;
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

const FootContainer = styled.div`
    position: absolute;
    left: 5%;
    bottom: 6%;

    @media (max-width: 480px) { 
        left:8%;
    } 
`;

const SubText = styled.p`
    font-size: 2rem;
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
        console.log({name, phone, address,check});

        e.target.reset();
        KakaoMessage({name, phone, address});
    };

     
    return (
        <Wrapper>
            <MainTextContainer>
            <MainText><Bold>딜리버리쿡</Bold>과 함께 시작해보세요.</MainText>
            </MainTextContainer>
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
                                <input type="checkbox" className="check" id="check" name="check" value="" ref={register({ required: true })} />
                                <label className="label" htmlFor="check">
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
            <FootContainer>
            <SubText><Bold>가맹문의 : 1661 - 1758</Bold></SubText>
            </FootContainer>
   
        </Wrapper>

    );
};
