import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListing } from '../actions/listing'
import '../styles/App.css'

class Listing extends Component {


  componentDidMount() {
     getListing(this.props.match.params.id)
    }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
        getListing(newProps.match.params.id)
    }
  }

  render() {
    return (
      <div id="body1">
        <div id="img1"><img src={this.props.current.photo} id="img2" alt="picture of establishment"/></div>
        <div id="body2">
          <div id="name1"><h3>Name</h3><p id="name2">{this.props.current.name}</p></div>
          <div id="addy1"><h3>Address</h3><p id="addy2">{this.props.current.address}</p></div>
          <div id="hours1"><h3>Hours</h3><p id="hours2">{this.props.current.hours}</p></div>
          <div id="feats1"><h3>Bathroom Description</h3><p id="feats2">{this.props.current.features}</p></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
      current: appState.listingReducer.currentListing
   }
}

export default connect(mapStateToProps)(Listing)