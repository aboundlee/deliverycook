import React,{useState} from "react";
import styled from "styled-components";

//import Fade from 'react-reveal/Fade';
import Post from "../../Components/Post";
import NewsModal from "../../Components/NewsModal";
import { Posts } from "../../Data/News";
import Grid from '@material-ui/core/Grid';

const Page = styled.section`
    width: 100%;
    text-align: center;
    display: flex;

    flex-direction: column;
    padding: 0 5rem;
    color: #242424;
    background-color: #FFFFFF;

`;

const TitleWrapper = styled.div`
   display: flex;
    align-items: center;
    margin-top: 20vh;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1rem;
    align-items: center;
`;

const Text = styled.h1`
    font-size: 2.75rem;
    font-weight: bold;
    line-height: 4rem;
`;
const HighLight = styled.img`
        width: 12.625rem;
`;

const SubTitle = styled.div`
    margin-left: 1.5rem;
    @media (max-width:480px) {
        margin-left: 0px;

    }
`;


const SubText = styled.h2`
    font-size: 1.5rem;

    display: inline;
    @media (max-width:480px) {
        width: 13rem;

        display: block;

    }
`;

const GridPosts = styled(Grid)`
    margin: 3rem 0;
`;
export default () => {
    const [selectedPost, setSelectedPost] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onPostClick = (post) => {
	handleShow();
	setSelectedPost(post);

    };

    return (
        <Page>
            <TitleWrapper>
                <Title>
                    <Text>딜쿡소식</Text>
                    <HighLight src="/Images/Brand/store_highlight.svg" alt="highlight"/>
                </Title>
                <SubTitle><SubText>딜리버리쿡의 </SubText><SubText>이야기를 전해드려요.</SubText></SubTitle>
            </TitleWrapper>
            <GridPosts container>
                { Posts  && Posts.slice(0).reverse().map((post, index) => (
                    <Post index={post.index} title={post.title} subtitle={post.subtitle} key={index} post={post} onPostClick={onPostClick}/>
                            ))}
            </GridPosts>

	{ selectedPost && (
	<NewsModal post={selectedPost} show={show} handleClose={handleClose}/>)}

        </Page>
    );
  };
  
