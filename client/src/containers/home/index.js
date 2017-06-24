import React from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../actions/counter';
import {
  loadCarOfTheWeek,
} from '../../actions/carActions';


// const Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Count: {props.count}</p>

//     <p>
//       <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
//     </p>

//     <p>
//       <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
//     </p>

//     <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
//   </div>
// )
// <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
const Home = props => (
  <div className="jumbotron">
    <h3>Car of the week</h3>
    <p>{props.review}</p>
  </div>
)

// class Home extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//   }

//   componentDidMount() {
//     this.props.loadCarOfTheWeek();
//   }

//   render() {
//     return (
//       <div>hi</div>
//     );
//   }
// }

const mapStateToProps = state => ({
  count: state.counter.count,
  review: state.carOw.review,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadCarOfTheWeek
  // ,changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)