import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import Flat from './flat.jsx';
import { setFlats } from '../actions';



class FlatList extends Component {
    componentWillMount(){
        // triggers an action to update Reduz State tree(flats)
        // we call the action setFlats that will update the redux state tree
        this.props.setFlats();
    }
    
    render() {
        return (
            <div className="flat-list col-10">
                {this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />)}
            </div>
        );
    }
};


// Outside the class
function mapDispatchToProps(dispatch) { 
    // mapDispacthToProps its what allows us to bind the action setFlats to the props of the FlatList
    return bindActionCreators( 
        { setFlats: setFlats },
        dispatch 
    );
};

// mapStateToPros it's what allows us to read the state of the store in redux. the flats fetched from the action setFlats update the redux store but we still need to be able to read from that store
function mapReduxStateToProps(reduxState) { 
    return {
        flats: reduxState.flats 
    };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);


    
  
  
    