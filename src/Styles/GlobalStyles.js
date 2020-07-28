import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    @import url(https://cdn.jsdelivr.net/gh/theeluwin/NotoSansKR-Hestia@master/stylesheets/NotoSansKR-Hestia.css);

    * {
        box-sizing:border-box;
    }

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
/* reset */
        body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
        fieldset,img {border:0 none}
        dl,ul,ol,menu,li {list-style:none}
        blockquote, q {quotes:none}
        blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
        input,select,textarea,button {font-size:100%;vertical-align:middle}
        button {border:0 none;background-color:transparent;cursor:pointer}
        table {border-collapse:collapse;border-spacing:0}
        body {-webkit-text-size-adjust:none} /* 뷰표트 변환시 폰트크기 자동확대 방지 */
        input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0}
        input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
        button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file'] {-webkit-appearance:button; border-radius:0}
        input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
        
        body {background:#fff}
        body,th,td,input,select,textarea,button {font-size:14px;line-height:1.5;} /* color값은 디자인가이드에 맞게사용 */
        
        a {color: unset;text-decoration:none}
        a:active, a:hover {text-decoration:none}
        address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}


html {
    height: 100%;

    font-size: 16px;


  
    @media screen and (max-width:960px) {
       font-size: 14px;
    }

    @media (max-width: 480px) { 
        font-size: 10px;
    } 
}
#root {
    width: 100%;
    height: 100%;
}

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body {
        width: 100%;
        height: 100%;
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family: 'Noto Sans Korean', sans-serif  !important;
    }

    p {
        font-family: 'Noto Sans Korean', sans-serif  !important;
    }


    .modal_wrapper {
        z-index: 10;
    }
    .modal_wrapper > .modal-content {

        backgorund-color: #242424 !important;
    }

`;
