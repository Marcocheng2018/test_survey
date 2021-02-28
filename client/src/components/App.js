import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {connect} from 'react-redux';
import * as actions from '../actions';



const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>




class App extends Component {

    componentDidMount(){

        this.props.fetchUser();
                
    }
    
    render() {

        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" component={Landing} exact />
                        <Route path="/surveys" component={Dashboard} exact />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>


                </BrowserRouter>

            </div>
        );
    }
}

export default connect(null,actions)(App);