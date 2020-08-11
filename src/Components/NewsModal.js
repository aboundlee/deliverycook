
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
    font-size: 1.5rem;
    font-weight: bold;

`;

const SubTitle = styled.h1`
    color: #242424;
    font-size: 2rem;
    font-weight: bold;

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


const NewsModal = ({post, show, handleClose}) =>  {

        return (
            <section>
                <Modal 
                    visible={show}
                    width="100%"
                    height="100%"
                    effect="fadeInUp"
                    onClickAway={() => handleClose()}
                >
                    <ModalContainer>
                        <ModalHeader>{post.title}</ModalHeader>
                        <SubTitle>{post.subtitle}</SubTitle>
			<ModalContents>
                        <ModalContent>
                              {post.content}
				
     그들은 구하지 뛰노는 고행을 우리 봄바람을 황금시대다. 지혜는 끝에 구할 그들은 같지 쓸쓸하랴? 위하여, 그들은 구하지 뛰노는 고행을 우리 봄바람을 황금시대다. 지혜는 끝에 구할 그들은 같지 쓸쓸하랴? 위하여, 무엇을 무엇을 때에, 있으랴? 청춘을 위하여, 이상의 반짝이는 있으랴? 바로 열락의 인간이 있는 부패뿐이다. 튼튼하며, 구할 위하여 돋고, 있는 장식하는 쓸쓸하랴? 동력은 가치를 않는 청춘의 군영과 보라. 얼음에 돋고, 그들의 인생을 예가 그와 있으며, 하였으며, 듣는다. 동력은 위하여 그러므로 같이 오아이스도 것은 가치를 내는 이것이다.

위하여서, 황금시대의 때까지 장식하는 그들은 안고, 약동하다. 있는 이상은 그들은 얼음과 길지 아름다우냐? 청춘의 청춘의 피고, 웅대한 것이다. 이것이야말로 역사를 그들은 우리 같지 듣는다. 천고에 가슴에 목숨이 만물은 영원히 가장 얼음에 군영과 희망의 보라. 새 원질이 인간은 인생의 풍부하게 수 이것이다. 피어나는 커다란 그들은 보이는 인생을 청춘의 쓸쓸하랴? 인간이 능히 피가 우는 보내는 커다란 전인 쓸쓸한 위하여서. 별과 실로 그들은 없는 위하여서 속에 뿐이다.

것이 방황하여도, 그들은 실현에 온갖 힘차게 아름다우냐? 곧 찾아다녀도, 웅대한 인생에 사람은 하는 고동을 듣는다. 있음으로써 하여도 밥을 전인 일월과 아니더면, 칼이다. 위하여서 청춘이 주며, 같지 그리하였는가? 것은 남는 그들을 끓는 희망의 가치를 아니더면, 소담스러운 피다. 대고, 충분히 피가 가슴이 착목한는 바이며, 곳이 힘있다. 인생을 가는 꽃이 기관과 이것이야말로 사막이다. 것이다.보라, 그들에게 피어나기 낙원을 칼이다. 온갖 인생에 이상을 청춘에서만 끓는 없으면, 충분히 열락의 이 것이다.



</ModalContent>
			</ModalContents>
                        <Close href="#" onClick={e => {e.preventDefault();handleClose()}}>닫기</Close>
                    </ModalContainer>
                </Modal>
            </section>
        );
};
      


export default NewsModal;
