import React, { Component } from 'react';
import { connect } from 'react-redux';
//import GoogleMapReact from 'google-map-react';
import { incrementCounter, decrementCounter } from './testActions';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Button, Icon } from 'semantic-ui-react';

const mapStateToProps = state => ({
  data: state.test.data
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
  incrementCounter, 
  decrementCounter
}

//const Marker = () => <Icon name='marker' size='big' color='red' />

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
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <Script 
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyC26ZVKmAhuL0iEWW3bQMZYWUR46BcQB8Y&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color='green' content="increment" />
        <Button onClick={decrementCounter} color='red' content="decrement" />
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

/**<div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC26ZVKmAhuL0iEWW3bQMZYWUR46BcQB8Y' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div> */
