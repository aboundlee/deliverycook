import PropTypes from "prop-types";
import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { actionCreators } from './Store';

import BrandMain from "../Routes/Brand/Main/BrandMain";
import BrandAbout from "../Routes/Brand/BrandAbout";
import BrandStore from "../Routes/Brand/BrandStore";
import BrandNews from "../Routes/Brand/BrandNews";

import BusinessMain from "../Routes/Business/Main/BusinessMain";
import BusinessSucess from "../Routes/Business/Sucess/BusinessSucess";
import BusinessInfo from "../Routes/Business/BusinessInfo";
import BusinessConsult from "../Routes/Business/BusinessConsult";

const BrandRoutes = ({changePageTo}) => {

    return (
    <>
        <Route exact path="/" component={BrandMain} />

        <Route exact path="/about" component={BrandAbout} />
        <Route exact path="/store" component={BrandStore} />
        <Route exact path="/news" component={BrandNews} />
        
        <Route exact path="/business" component={BusinessMain} />
        <Route exact path="/success" component={BusinessSucess} />
        <Route exact path="/info" component={BusinessInfo} />
        <Route exact path="/consult" component={BusinessConsult} />
    </>
    )
};


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                 
                <BrandRoutes/> 
                 
            </Switch>
        </Router>
    );
};



/*function mapStateToProps(state, ownProps) {
    return { isBrandPage: state.isBrandPage };
  }
  
  
  
function mapDispatchToProps(dispatch, ownProps) {
    return {
        changePageTo: brandCategory => dispatch(actionCreators.changePageTo(brandCategory))
    };
}
  export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);

*/

AppRouter.propTypes = {
    isBrandPage: PropTypes.bool
};



export default AppRouter;

