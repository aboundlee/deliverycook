import PropTypes from "prop-types";
import React, { Suspense }  from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Loader from "./Loader";
//import { connect } from 'react-redux';
//import { actionCreators } from './Store';

const BrandMain = React.lazy(() => import("../Routes/Brand/Main/BrandMain"));
const BrandAbout = React.lazy(() =>  import("../Routes/Brand/BrandAbout"));
const BrandStore = React.lazy(() => import("../Routes/Brand/BrandStore"));
const BrandNews = React.lazy(() => import("../Routes/Brand/BrandNews"));

const BusinessMain = React.lazy(() => import("../Routes/Business/Main/BusinessMain"));
const BusinessSuccess = React.lazy(() =>  import("../Routes/Business/Success/BusinessSuccess"));
const BusinessInfo = React.lazy(() =>  import("../Routes/Business/BusinessInfo"));
const BusinessConsult = React.lazy(() => import("../Routes/Business/BusinessConsult"));



const AppRouter = () => {
    return (
      <Suspense fallback={<Loader/>}>


            <Switch>
                 
        <Route exact path="/" component={BrandMain} />

        {/* <Route exact path="/brand" component={withRouter(BrandMain)} /> */}
        <Route path="/about/:brand" component={BrandAbout} />

        {/* <Route path="/about" component={BrandAbout} /> */}
        <Route path="/store" component={BrandStore} />
        <Route path="/news" component={BrandNews} />
        
        <Route path="/business" component={BusinessMain} />
        <Route path="/success" component={BusinessSuccess} />
        <Route path="/info" component={BusinessInfo} />
        <Route path="/consult" component={BusinessConsult} />
                 
            </Switch>
      </Suspense>

    );
};



AppRouter.propTypes = {
    isBrandPage: PropTypes.bool
};



export default AppRouter;

