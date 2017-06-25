import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loadCarOfTheWeek,
} from '../../actions/carActions';

const Home = props => {
  if (!props.review || !props.model || !props.model.make) { return null; }

  return (
    <div>
      <h3>Car of the week!</h3>
      <div className="row">
        <div className="col-md-6">
          <p>{props.model.make.name} - {props.model.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={props.model.imageUrl} width="300px" alt={props.model.make.name} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>{props.review}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    review: state.carOw.review,
    model: state.carOw.model,
  });
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadCarOfTheWeek
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)