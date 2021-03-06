import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from './testActions';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Button } from 'semantic-ui-react';
import { openModal } from '../modals/modalActions';

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.test.loading
})

/*const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementCounter())
    },
    decrement: () => {
      dispatch(decrementCounter())
    }
  }
}*/

const action = {
  incrementAsync, 
  decrementAsync,
  openModal
}

class TestComponent extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: '',
    scriptLoaded: false
  }

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  onChange = (address => this.setState({address}))

  render() {

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    //const { data, increment, decrement } = this.props;
    const { data, incrementAsync, decrementAsync, openModal, loading } = this.props;
    return (
      <div>
        <Script 
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyC26ZVKmAhuL0iEWW3bQMZYWUR46BcQB8Y&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h3>The answer is: {data}, delay 1000ms</h3>
        <Button loading={loading} onClick={incrementAsync} color='green' content="incrementAsync" />
        <Button loading={loading} onClick={decrementAsync} color='red' content="decrementAsync" />
        <Button onClick={() => openModal('TestModal', {data: 43})} color='teal' content="Open Modal" />
        <br/> <br/>
        <form onSubmit={this.handleFormSubmit}>
          
          {this.state.scriptLoaded && <PlacesAutocomplete inputProps={inputProps} />}
          
          <button type="submit">Submit</button>
        </form>

        
      </div>
    )
  }
}

export default connect(mapStateToProps, action)(TestComponent);

