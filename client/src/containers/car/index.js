import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import cssModules from 'react-css-modules';
import styles from './index.scss';

const Car = props => {
  console.log('props', props);
  if (!props.car.make) { return null }
  return (
    <div>
      <h1>{props.car.make.name} - {props.car.name}</h1>
      <p>{props.car.price}</p>
      <img src={props.car.imageUrl} width="300px"/>
    </div>
  )
};

const mapStateToProps = state => ({
  car: state.car
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const query = gql`
query getmodel($id: Int) {
  model(id: $id) {
    id
    makeId
    name
    price
    imageUrl
    make {
      id
      name
    }
  }
}
        `;

const CarWithData = graphql(query, {
  options: (props) => ({
    variables: {
      id: +props.match.params.id
    }
  }),
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(Car);
const CarWithDataAndStyles = cssModules(CarWithData, styles);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarWithDataAndStyles);

// export default HomeWithData;

