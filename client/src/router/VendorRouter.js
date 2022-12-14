import React from 'react'
import Index from '../views/dashboard/index'
import {Switch,Route} from 'react-router-dom'
// user
import UserProfile from '../views/dashboard/app/user-profile';
import VendorProfile from '../views/dashboard/app/VendorProfile';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';
import Rfqmanges from '../views/dashboard/app/Rfqmanges';
import Userrfq from '../views/dashboard/app/Userrfq';
import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from '../views/dashboard/widget/widgetbasic';
import Widgetcard from '../views/dashboard/widget/widgetcard';
import Widgetchart from '../views/dashboard/widget/widgetchart';
// icon
import Solid from '../views/dashboard/icons/solid';
import Outline from '../views/dashboard/icons/outline';
import DualTone from '../views/dashboard/icons/dual-tone';
// Form
import FormElement from '../views/dashboard/from/form-element';
import FormValidation from '../views/dashboard/from/form-validation';
import FormWizard from '../views/dashboard/from/form-wizard';
import Rfqform from '../views/dashboard/from/Rfqform';
// table
import BootstrapTable from '../views/dashboard/table/bootstrap-table';
import TableData from '../views/dashboard/table/table-data';

// map
import Vector from '../views/dashboard/maps/vector';
import Google from '../views/dashboard/maps/google';

//extra
import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
import TermsofService from '../views/dashboard/extra/terms-of-service';

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";
//Special Pages
import Billing from '../views/dashboard/special-pages/billing';
import Kanban from '../views/dashboard/special-pages/kanban';
import Pricing from '../views/dashboard/special-pages/pricing';
import Timeline from '../views/dashboard/special-pages/timeline';
import Calender from '../views/dashboard/special-pages/calender';
import SignUp from '../views/dashboard/auth/sign-up'
import Post from '../components/Posts/Post';
//admin
import Admin from '../views/dashboard/admin/admin';

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={500}>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/ath/post" exact component={SignUp} />
                
                
                   
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
