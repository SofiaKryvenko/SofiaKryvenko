import React from 'react'
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";




import Favourite from "../../pages/Favourite"

// const mapStateToProps = (state) => ({
// });


// const mapDispathToProps = dispath =>
// bindActionCreators(
//   {
//   },
//   dispath
// );


export default compose(
    withRouter,
    // connect( mapStateToProps,mapDispathToProps)
    )(Favourite)