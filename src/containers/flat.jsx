import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
      console.log(this.props.flat)
    if(this.props.selectFlat){
        this.props.selectFlat(this.props.flat)
    }
  }

  render(){
      let classes = "card"
      if (this.props.flat === this.props.selectedFlat){
        
          classes += " selected"
      }
      return(
          <img className={classes} src={this.props.flat.imageUrl} alt="" onClick={this.handleClick}/>   
      )
  }
}

function mapStateToProps(state) {
  return {
    //  passing to the Flat component the selected Flat info that is stored in the redux state as props
    selectedFlat: state.selectedFlat 
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators(
    //   passing to the Flat component the selectFlact action
    { selectFlat: selectFlat }, 
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Flat);