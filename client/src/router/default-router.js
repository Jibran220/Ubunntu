import React,{useEffect} from 'react'
import Index from '../views/dashboard/index'
import {Switch,Route,useHistory} from 'react-router-dom'
// user
import UserProfile from '../views/dashboard/app/user-profile';
import UserProfile2 from '../views/dashboard/app/UserProfile2';
import UserProfile3 from '../views/dashboard/app/UserProfile3';
import UserProfile4 from '../views/dashboard/app/UserProfile4';
import VendorProfile from '../views/dashboard/app/VendorProfile';
import Profile_Picture from '../views/dashboard/app/Profile_Picture';
import Appjs from '../views/dashboard/app/App';
import VendorQoute from '../views/dashboard/app/VendorQoute';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';
import Rfqmanges from '../views/dashboard/indexRFQ';
import Userrfq from '../views/dashboard/app/Userrfq';
import MASproduct_Category from '../views/dashboard/app/MASproduct Category';
import MASproduct_Category_Update from '../views/dashboard/app/MASproduct_Category_Update';
import MASApplicableStandards from '../views/dashboard/app/MASApplicableStandards';
import MASApplicableStandards_Update from '../views/dashboard/app/MASApplicableStandards_Update';
import MASW_x_D_x_H from '../views/dashboard/app/MASW x D x H';
import MASW_x_D_x_H_Update from '../views/dashboard/app/MASW x D x H_Update';
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
import Userrfqf from '../views/dashboard/from/Userrfq';
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
// import Billing from '../views/dashboard/special-pages/billing';
import Kanban from '../views/dashboard/special-pages/kanban';
import Pricing from '../views/dashboard/special-pages/pricing';
import Timeline from '../views/dashboard/special-pages/timeline';
import Calender from '../views/dashboard/special-pages/calender';
import QuoteTable from '../views/dashboard/app/QuoteTable';
import Invoice from '../views/dashboard/app/Invoice';
import App from '../views/dashboard/app/App';
import Post from '../components/Posts/Post';
//admin
import Admin from '../views/dashboard/admin/admin';

import POTable from '../views/dashboard/app/POTable';
const DefaultRouter = () => {
    const history=useHistory()
   
     
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={500}>
                <Switch>

                    <Route path="/" exact component={Index} />
                    <Route path="/dashboard/post" exact component={Post} />
                    {/* user */}
                    {/* <Route path="/dashboard/app/user-profile/:id"     exact component={UserProfile} />  */}
                    <Route path="/dashboard/app/Invoice/:id"     exact component={Invoice} />
                    <Route path="/dashboard/app/QuoteTable/:id"     exact component={QuoteTable} />
                    <Route path="/dashboard/app/UserProfile2/:id"     exact component={UserProfile2} />
                    <Route path="/dashboard/app/UserProfile3/:id"     exact component={UserProfile3} />
                    <Route path="/dashboard/app/UserProfile4/:id"     exact component={UserProfile4} />
                    <Route path="/dashboard/app/VendorProfile/:id"     exact component={VendorProfile} /> 
                    <Route path="/dashboard/app/VendorQoute/:id"     exact component={VendorQoute} />
                    <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
                    <Route path="/dashboard/app/appjs"         exact component={Appjs}/>
                    <Route path="/dashboard/app/user-list"        exact component={UserList}/>
                    <Route path="/dashboard/app/profilepicture"        exact component={Profile_Picture}/>
                    <Route path="/dashboard/app/Rfqmanges"        exact component={Rfqmanges}/>
                    {/* <Route path="/dashboard/app/Userrfq/:id"        exact component={Userrfq}/>  */}
                    <Route path="/dashboard/app/MASproduct_Category"        exact component={MASproduct_Category}/>
                    <Route path="/dashboard/app/MASproduct_Category_Update/:id"        exact component={MASproduct_Category_Update}/>
                    <Route path="/dashboard/app/MASApplicableStandards"        exact component={MASApplicableStandards}/>
                    <Route path="/dashboard/app/MASApplicableStandards_Update/:id"        exact component={MASApplicableStandards_Update}/>        
                    <Route path="/dashboard/app/MASW_x_D_x_H"        exact component={MASW_x_D_x_H}/>
                    <Route path="/dashboard/app/MASW_x_D_x_H_Update/:id"        exact component={MASW_x_D_x_H_Update}/>     
                    <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/>
                     {/* widget */}
                     <Route path="/dashboard/widget/widgetbasic"   exact component={Widgetbasic}/>
                     <Route path="/dashboard/widget/widgetcard"    exact component={Widgetcard}/>
                     <Route path="/dashboard/widget/widgetchart"   exact component={Widgetchart}/>
                     {/* icon */}
                     <Route path="/dashboard/icon/solid"           exact component={Solid}/>
                     <Route path="/dashboard/icon/outline"         exact component={Outline}/>
                     <Route path="/dashboard/icon/dual-tone"       exact component={DualTone}/>
                     {/* From */}
                     <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
                     <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
                     <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/>
                     <Route path="/dashboard/form/Rfqform"     exact component={Rfqform}/>
                     <Route path="/dashboard/form/Userrfq/:id"     exact component={Userrfqf}/>
                     {/* <Route path="/dashboard/app/POTable/:id"     exact component={POTable} /> */}
                     {/* table */}
                     <Route path="/dashboard/table/bootstrap-table" exact component={BootstrapTable}/>
                     <Route path="/dashboard/table/table-data"      exact component={TableData}/>
                     {/*special pages */}
                     {/* <Route path="/dashboard/special-pages/billing/:id" exact component={App}/> */}
                     <Route path="/dashboard/special-pages/kanban" exact component={Kanban}/>
                     <Route path="/dashboard/special-pages/pricing" exact component={Pricing}/>
                     <Route path="/dashboard/special-pages/timeline" exact component={Timeline}/>
                     <Route path="/dashboard/special-pages/calender" exact component={Calender}/>
                     {/* map */}
                     <Route path="/dashboard/map/vector" exact component={Vector}/>
                     <Route path="/dashboard/map/google" exact component={Google}/>
                     {/* extra */}
                     <Route path="/dashboard/extra/privacy-policy" exact component={PrivacyPolicy}/>
                     <Route path="/dashboard/extra/terms-of-service" exact component={TermsofService}/>
                     {/*admin*/}
                     <Route path="/dashboard/admin/admin" exact component={Admin}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
