
import React,{useState} from "react";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Title = styled.h1`
   font-size: 1.5rem;
`;
export default () => {

  return ( 
	<VerticalTimeline>
	  <VerticalTimelineElement
	    className="vertical-timeline-element--work"
	    date="2020 - present"
	    contentStyle={{ background: '#E50012', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #E50012' }}
	    iconStyle={{ background: '#E50012', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">딜리버리쿡 브랜드 런칭</Title>
	  </VerticalTimelineElement>

	  <VerticalTimelineElement
	    className="vertical-timeline-element--work"
	    date="2019.10"
	    contentStyle={{ background: '#242424', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
	    iconStyle={{ background: '#242424', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">갈통삼 브랜드 리뉴얼</Title>
	  </VerticalTimelineElement>

	  <VerticalTimelineElement
	    className="vertical-timeline-element--work"
	    date="2019.09"
	    contentStyle={{ background: 'transparent', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
	    iconStyle={{ background: '#242424', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">가맹 54호점 계약</Title>
	  </VerticalTimelineElement>
	  <VerticalTimelineElement
	    className="vertical-timeline-element--work"
	    date="2019.01.02"
	    contentStyle={{ background: '#E50012', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #E50012' }}
	    iconStyle={{ background: '#E50012', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">㈜드림위드 FC 법인 전환</Title>
	  </VerticalTimelineElement>

	  <VerticalTimelineElement
	    className="vertical-timeline-element--education"
	    date="2018.05"
	    contentStyle={{ background: 'transparent', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
	    iconStyle={{ background: '#242424', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">갈통삼겹살 초벌 공급 시스템완성 </Title>
	  </VerticalTimelineElement>

	  <VerticalTimelineElement
	    className="vertical-timeline-element--education"
	    date="2017.04"
	    contentStyle={{ background: '#E50012', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #E50012' }}
	    iconStyle={{ background: '#E50012', color: '#fff' }}
	  >
	    <Title className="vertical-timeline-element-title">배달삼겹갈통삼 가맹 1호점 오픈</Title>
	  </VerticalTimelineElement>

	  <VerticalTimelineElement
	    className="vertical-timeline-element--education"
	    date="2017.02.01"
	    contentStyle={{ background: 'transparent', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
	    iconStyle={{ background: '#242424', color: '#fff' }}
           >
	    <Title className="vertical-timeline-element-title">드림위드 FC 프랜차이즈 사업본부 런칭</Title>
	  </VerticalTimelineElement>
	  <VerticalTimelineElement
	    className="vertical-timeline-element--education"
	    date="2014.10.01"
	    contentStyle={{ background: '#E50012', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #E50012' }}
	    iconStyle={{ background: '#E50012', color: '#fff' }}
           >
	    <Title className="vertical-timeline-element-title">갈통삼 행신 직영점 오픈</Title>
	  </VerticalTimelineElement>
	  <VerticalTimelineElement
	    className="vertical-timeline-element--education"
	    date="2013.02~ 2014.03"
	    contentStyle={{ background: 'transparent', color: '#fff' }}
	    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
	    iconStyle={{ background: '#242424', color: '#fff' }}
           >
	    <Title className="vertical-timeline-element-title">삼겹살 숙성법 개발</Title>
	  </VerticalTimelineElement>
	  <VerticalTimelineElement
	    iconStyle={{ background: '#fff', color: '#fff' }}
	  />
	</VerticalTimeline>
    )
};

