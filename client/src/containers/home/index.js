import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loadCarOfTheWeek,
} from '../../actions/carActions';

const Home = props => (
  <div className="jumbotron">
    <h3>Car of the week</h3>
    <p>{props.review}</p>
  </div>
);

const mapStateToProps = state => ({
  review: state.carOw.review
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadCarOfTheWeek
  // ,changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)