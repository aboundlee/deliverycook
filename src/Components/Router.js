import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
//import { connect } from 'react-redux';
//import { actionCreators } from './Store';

import BrandMain from "../Routes/Brand/Main/BrandMain";
import BrandAbout from "../Routes/Brand/BrandAbout";
import BrandStore from "../Routes/Brand/BrandStore";
import BrandNews from "../Routes/Brand/BrandNews";

import BusinessMain from "../Routes/Business/Main/BusinessMain";
import BusinessSuccess from "../Routes/Business/Success/BusinessSuccess";
import BusinessInfo from "../Routes/Business/BusinessInfo";
import BusinessConsult from "../Routes/Business/BusinessConsult";



const AppRouter = () => {
    return (
        <> 
            <Switch>
                 
        <Route exact path="/" component={withRouter(BrandMain)} />

        {/* <Route exact path="/brand" component={withRouter(BrandMain)} /> */}

        <Route exact path="/about" component={withRouter(BrandAbout)} />
        <Route exact path="/store" component={withRouter(BrandStore)} />
        <Route exact path="/news" component={withRouter(BrandNews)} />
        
        <Route exact path="/business" component={withRouter(BusinessMain)} />
        <Route exact path="/success" component={withRouter(BusinessSuccess)} />
        <Route exact path="/info" component={withRouter(BusinessInfo)} />
        <Route exact path="/consult" component={withRouter(BusinessConsult)} />
                 
            </Switch>
        </>
    );
};



AppRouter.propTypes = {
    isBrandPage: PropTypes.bool
};



export default AppRouter;

