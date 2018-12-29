import React from 'react'
import { connect } from 'react-redux'
//import sprite
import handleMovement from './movement'

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                // remove backgroundColor when adding sprites.
                // backgroundImage: `url('${<sprite image here>}')`,
                backgroundPosition: '0 0',
                backgroundColor: 'green',
                width: '40px',
                height: '40px'
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }    
}

export default connect(mapStateToProps)(handleMovement(Player))