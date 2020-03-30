import React from 'react';
import { connect } from "react-redux";
import {compose} from "ramda";

import  Loading  from "../components/Loading";
import NotFound from "../components/NotFound"



const WithAutorization = () =>{
    return WrappedComponent => {
        class WithAuth extends React.Component {

            componentDidMount(){}

            render(){
                const {auth,firebaseLoaded} = this.props;

                if(!firebaseLoaded || !auth.profileLoaded)  return <Loading fullScreen visible />

                if(auth.loggedIn) return <WrappedComponent {...this.props}/>

                return <NotFound/>
            }

        }


        return compose(
            connect(mapStateToProps)
        )(WithAuth)
}
}

const mapStateToProps = state => ({
    firebaseLoaded: state.firebase.loaded,
    auth: state.auth
  });
  



export default WithAutorization;