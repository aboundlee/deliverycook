import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';

import Table from "../../Components/Table";

const Wrapper = styled.div`
 height: 100%;
 width: 100%;


    background-color: #242424;

`;

const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #242424;


`;

const Caption = styled.div`
  display: flex;
  height: 100px;
  width: 80%;
    align-items: center;
    justify-content: center;

`;
const CaptionTitle = styled.p`
  color: #E50012;
  font-size: 1rem;
  width: 20%;
`;

const CaptionContents = styled.p`
  color: #fff;
  font-size: 1rem;
  width: 80%;
`;

const FullFade = styled(Fade)`
  height: 100%;
  padding: 100px;

`;
export default () => {
  
    return (
        <Wrapper>
            <FullFade bottom distance={'10%'}> 
	  <Page> 
	    <Table/>
            <Caption>           
               <CaptionTitle>**업종변경창업비용</CaptionTitle>
               <CaptionContents>기존 운영중인 점포 업종변경시 시설 및 간판, 주장집기, 기기 사용이 가능해서 일부만 수정후 창업이 가능합니다. 
		<br/>매장상황에 따라 비용이 다르기 때문에 상담을 통해 안내 받으세요!</CaptionContents>
            </Caption>
          </Page>
            </FullFade>
          
	</Wrapper>
    );
};
  
