import {createStore} from 'redux';


const BRAND_PAGE = "brandPage";
const BUSINESS_PAGE = "businessPage";

const CHANGE_BRAND = "nowBrandPage" ;
const CHANGE_BUSINESS = "nowBusinessPage" ;

const changePageTo = (pageCategory) => {
    switch (pageCategory) {
        case BRAND_PAGE:
            return {
                type: CHANGE_BRAND,
                isBrandPage: true
            };
        case BUSINESS_PAGE:
            return {
                type: CHANGE_BUSINESS,
                isBrandPage: false
            };
    }
  
};


const reducer = (state=[], action) => {
    switch (action.type) {
        case CHANGE_BRAND:
            //return [{isBrandPage: true}, ...state];

            return {isBrandPage: action.isBrandPage};
        case CHANGE_BUSINESS:
                //return [{isBrandPage: true}, ...state];
    
            return {isBrandPage: action.isBrandPage};
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    changePageTo
};

export default store;
