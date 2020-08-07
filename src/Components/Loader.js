import React, {useState, useEffect} from 'react';



import ClipLoader from "react-spinners/ClipLoader";

import styled, {css} from "styled-components";

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


 const Loader = ({loading}) => {

    return (
        <LoadingWrapper>
        <ClipLoader
            size={50}
            color={"#E50012"}
            loading={loading}
        />
        </LoadingWrapper>
    );
}

export default Loader;