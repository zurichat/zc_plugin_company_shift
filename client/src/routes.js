import React from 'react'
import { Route, Switch } from "react-router-dom";
import ManagementHome from './pages/shift_management/shift_management'
import Landpage from './pages/home/landing_page';
import CreateShift from './components/modal/CreateShift';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Landpage} exact/>
            <Route path='/dashboard' component={ManagementHome}  />
            <Route path='/createShift' component={CreateShift} />
            {/* <Route  path="*"><Error/></Route> */}
        </Switch>
    )
}


export default Routes