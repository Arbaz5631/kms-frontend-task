import React, { lazy} from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router"
import SignUp from '../modules/SignUp';
import Login from '../modules/Login';
import { connect } from 'react-redux';
import Dasboard from '../modules/Dasboard';
import BarGraph from '../modules/BarGraph';
const SignUpPage = lazy(() => import("../modules/SignUp"))
const LoginPage = lazy(() => import("../modules/Login"))
const BarGraphPage = lazy(() => import("../modules/BarGraph"))
// const DashBoardPage = lazy(() => import("../modules/Dashboard"))
function Routes() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/dashboard" component={Dasboard} />
                <Route exact path="/bargraph" component={BarGraph} />

            </Router>

        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         email: state.email,
//         password: state.password,
//         isLoggedIn: state.isLoggedIn
//     }
// }
export default Routes;
