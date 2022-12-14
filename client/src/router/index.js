import React from 'react'


//router
import { Switch,Route } from 'react-router'
//layoutpages
import Index from '../views/index'
import Default from '../layouts/dashboard/default'
import Horizontal from '../layouts/dashboard/horizontal'
import Boxed from '../layouts/dashboard/boxed'
import DualHorizontal from '../layouts/dashboard/dual-horizontal'
import DualCompact from '../layouts/dashboard/dual-compact'
import BoxedFancy from "../layouts/dashboard/boxed-fancy"
import Simple from '../layouts/dashboard/simple'
import Vendor from '../layouts/dashboard/Vendor'
import Athvend from '../layouts/dashboard/Athvend'
import Layout from '../layouts/dashboard/layout-rfq'
import VendorQuoteLIst from '../layouts/dashboard/VendorQuoteLIst'
import VendorQuote from '../layouts/dashboard/VendorQuote'
import Approver from '../layouts/dashboard/Approver'
import ApproverAhead from '../layouts/dashboard/ApproverAhead'
import Admin_Vendor_List from '../layouts/dashboard/Admin_Vendor_List'
import Admin_Vendor_Profile from '../layouts/dashboard/Admin_Vendor_Profile'
import Admin_po_list from '../layouts/dashboard/Admin_po_list'
import Admin_Generate_po from '../layouts/dashboard/Admin_Generate_po'
import Admin_Quote from '../layouts/dashboard/Admin_Quote'
import User_Add from '../layouts/dashboard/User_Add'

const IndexRouters = () => {
    return (
        <>
            <Switch>
            <Route exact path="/" component={Default}></Route>
                <Route exact path="/ath" component={Vendor}></Route>
                <Route exact path="/dashboard/app/Userrfq/:id" component={Admin_Vendor_List}></Route>
                <Route exact path="/athpro/:id" component={Athvend}></Route>
                <Route exact path="/layout/rfq" component={Layout}></Route>
                <Route exact path="/athquote/:id" component={VendorQuote}></Route>
                <Route exact path="/VendorQuoteLIst/:id" component={VendorQuoteLIst}></Route>
                <Route exact path="/approver" component={Approver}></Route>
                <Route exact path="/ApproverAhead/:id" component={ApproverAhead}></Route>

                <Route exact path="/dashboard/app/user-profile/:id" component={Admin_Vendor_Profile}></Route>
                <Route exact path="/dashboard/app/POTable/:id" component={Admin_po_list}></Route>
                <Route exact path="/dashboard/special-pages/billing/:id" component={Admin_Generate_po}></Route>
                <Route exact path="/dashboard/app/QuoteTable/:id" component={Admin_Quote}></Route>
                 <Route exact path="/dashboard/app/user-add" component={User_Add}></Route>



                <Route  path="/dashboard" component={Default}></Route>
                <Route  path="/boxed" component={Boxed}></Route>
                <Route  path="/horizontal" component={Horizontal}></Route>
                <Route  path="/dual-horizontal" component={DualHorizontal}></Route>
                <Route  path="/dual-compact" component={DualCompact} ></Route>
                <Route  path="/boxedFancy" component={BoxedFancy} ></Route>
                <Route  path="/auth" component={Simple}></Route>
                <Route  path="/errors" component={Simple}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
