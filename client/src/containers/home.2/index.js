import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import cssModules from 'react-css-modules';
import styles from './index.scss';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

// const mapQueriesToProps = ({ ownProps, state }) => ({
//   feed: {
//     query: `
//             query getCarOfTheWeek {
//               carOfTheWeek {
//                 modelId
//                 review
//               }
//             }
//         `,
//     variables: {
//       type: ownProps.params.type.toUpperCase(),
//     }
//   }
// });

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);

// const HomeWithData = graphql({
//   mapQueriesToProps,
//   mapStateToProps,
//   mapDispatchToProps
// })(Home);

const query = gql`
            query getCarOfTheWeek {
              carOfTheWeek {
                modelId
                review
              }
            }
        `;

const HomeWithData = graphql(query, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(Home);
const HomeWithDataAndStyles = cssModules(HomeWithData, styles);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeWithDataAndStyles);

// export default HomeWithData;
