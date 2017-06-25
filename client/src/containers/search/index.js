import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import cssModules from 'react-css-modules';
import styles from './index.scss';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.makeRow = this.makeRow.bind(this);
    this.modelRow = this.modelRow.bind(this);
    this.onMakeSelect = this.onMakeSelect.bind(this);
    this.onModelSelect = this.onModelSelect.bind(this);
    this.state = {
      selectedCarMakeIds: [],
      models: [],
      selectedModelId: -1
    };
  }
  // query: gql`
  //           query getmodels($makeId: Int) {
  //             models(makeId: $makeId) {
  //               id
  //               name
  //             }
  //           }`,

  onMakeSelect(event) {

    // console.log('{makeId,models}', { makeId, models });
    const makeId = +event.target.value;
    const { makes } = this.props;
    console.log('makes', makes);
    const make = makes.find(make => +make.id === makeId);
    console.log('make', make);

    const models = make.models;
    this.setState({ models });
    // const { selectedCarMakeIds } = this.state;
    // const { makes } = this.props;
    // const itemIndex = selectedCarMakeIds.indexOf(makeId);
    // if (itemIndex === -1) { selectedCarMakeIds.push(makeId); }
    // else { selectedCarMakeIds.pop(itemIndex); }
    // // const arrayOfModels =
    // //   makes.filter(make => selectedCarMakeIds.indexOf(+make.id) > -1)
    // //     .map(make =>
    // //       make.models.map(model => Object.assign({}, model, { makeName: make.name })));
    // // const models = [].concat.apply([], arrayOfModels);
    // // console.log('models', models);

    // // this.setState({ models });
    // this.props.client.query({
    //   query: gql`
    //             query getmodels($makeId: Int) {
    //               models(makeId: $makeId) {
    //                 id
    //                 name
    //                 makeId
    //               }
    //             }`,
    //   variables: { makeId },
    // });
  }

  onModelSelect(event) {
    this.setState({ selectedModelId: +event.target.value });
  }

  // makeRow(make, index) {
  //   return (
  //     <div key={make.id}>
  //       <input type="checkbox" name={make.name} value={make.makeId} onChange={() => this.onMakeSelect(+make.id)} />
  //       <span>{make.name}</span>
  //     </div>
  //   );
  // }

  makeRow(make, index) {
    return (
      // <div key={make.id}>
      //   <input type="radio" name={make.name} value={make.makeId} onChange={() => this.onMakeSelect(+make.id, make.models)} />
      //   <span>{make.name}</span>

      // </div>
      <option key={make.id} value={make.id}>{make.name}</option>
    );
  }

  modelRow(model, index) {
    return (
      // <div key={model.id}>
      //   <input type="checkbox" name={model.name} value={model.modelId} />
      //   <span>{model.name}</span>
      // </div>
      <option key={model.id} value={model.id}>{model.name}</option>
    );
  }

  // <div className="col-md-3">
  //           {models.filter(model => {
  //             console.log('hey',model);

  //             if (selectedCarMakeIds.indexOf(model.makeId) > -1) {
  //               return model;
  //             }
  //             return null;
  //           })
  //             .map(this.modelRow.bind(this))}
  //         </div>


  render() {
    const { makes, changeModelDetailPage } = this.props;
    const { selectedModelId, models } = this.state;

    return (
      <div>
        <h1>Search</h1>
        <p>Select cars:</p>
        <div className="row">
          <div className="col-md-3">
            <select id="lang" onChange={this.onMakeSelect.bind(this)}
              defaultValue="-1" value={this.state.value}>
              <option value="-1">Select Car</option>
              {makes.map(this.makeRow.bind(this))}
            </select>
          </div>
          <div className="col-md-3">
            <select id="lang" onChange={this.onModelSelect.bind(this)}
              defaultValue="-1" value={this.state.value}>
              <option value="-1" >Select Model</option>
              {models.map(this.modelRow.bind(this))}
            </select>
          </div>
        </div>
        <div className="row top-margin">
          <div className="col-md-3">
            <button disabled={!selectedModelId || selectedModelId < 0}
              className="btn btn-primary"
              onClick={() => changeModelDetailPage(selectedModelId)}
            >View Car</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  makes: state.makes,
  models: state.models
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeModelDetailPage: modelId => push('/make/model/' + modelId)
}, dispatch);

const query = gql`
            query getMakes {
              makes {
                id
                name
                models {
                  id
                  name
                }
              }
            }
        `;

const SearchWithData = graphql(query, {
  props: ({ data: { loading, store } }) => ({
    store,
    loading,
  }),
})(withApollo(Search));
const SearchWithDataAndStyles = cssModules(SearchWithData, styles);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchWithDataAndStyles);

