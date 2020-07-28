import axios from 'axios';
//import dotenv from 'dotenv';
// dotenv.config({ path: path.join(__dirname,'../.env') });
//dotenv.config();

const getNow = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1 ;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return (`${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`);

};


const KakaoMessage = async ({name, phone, address}) => {

    const key = process.env.REACT_APP_ORANGE_MSG_KEY;
    const url = "https://www.apiorange.com/api/send/notice.do";
    const temp_number = 11754;
    const time = getNow();

    const postConfig = {
        headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization' : `${key}`
        }
    };

    /* 대표님 */
    const postData1 = JSON.stringify(
    {
        tmp_number : temp_number,
        kakao_sender : process.env.REACT_APP_KAKAO_SENDER,
        kakao_name : name,
        kakao_phone : process.env.REACT_APP_KAKAO_PHONE_1,
        kakao_add1 : time,
        kakao_add2 : phone,
        kakao_add3 : address,
        kakao_add4 : "",
        kakao_add5 : "",
        kakao_add6 : "",
        kakao_add7 : "",
        kakao_add8 : "",
        kakao_add9 : "",
        kakao_add10 : "",
        kakao_080 : "N",
        kakao_res : "",
        kakao_res_date : "",
        TRAN_REPLACE_TYPE : ""
    });

    /* 부장님 */
    const postData2 = JSON.stringify(
        {
            tmp_number : temp_number,
            kakao_sender : process.env.REACT_APP_KAKAO_SENDER,
            kakao_name : name,
            kakao_phone : process.env.REACT_APP_KAKAO_PHONE_2,
            kakao_add1 : time,
            kakao_add2 : phone,
            kakao_add3 : address,
            kakao_add4 : "",
            kakao_add5 : "",
            kakao_add6 : "",
            kakao_add7 : "",
            kakao_add8 : "",
            kakao_add9 : "",
            kakao_add10 : "",
            kakao_080 : "N",
            kakao_res : "",
            kakao_res_date : "",
            TRAN_REPLACE_TYPE : ""
        });


    //const result1 = await axios.post(url, postData1, postConfig);
    const result2 = await axios.post(url, postData2, postConfig);
console.log(result2);
/*
    if (result1.error) {
        console.log( "error: " + result1.error);
        alert( "error: " + result1.error);
        alert ("에러가 발생하였습니다. 다시 시도해주세요.");

    } else {
        alert ("성공적으로 문의하였습니다.")
    }
*/
  
    if (result2.error) {
        console.log( "error: " + result2.error);
        alert( "error: " + result2.error);
        alert ("에러가 발생하였습니다. 다시 시도해주세요.");

    } else {
        alert ("성공적으로 문의하였습니다.")
    }
};


export default KakaoMessage;



