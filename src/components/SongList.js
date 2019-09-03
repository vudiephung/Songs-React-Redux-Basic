import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button
                            onClick={() => this.props.selectSong(song)} // Pass an song Obj { Title: , Duration: }
                            className='ui button primary'
                        >
                            Select
                        </button>
                    </div>

                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='ui divided list'>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    // Rerun Whenever state (Redux store) is changed
    // state === this.props : Inclued songs and selectedSongs
    //State Obj included 'songs' and 'selectedSongs' which came from '../reducers'
    //console.log(state)
    return { songs: state.songs } // Show up as props inside SongList component 
}

export default connect(
    mapStateToProps, { selectSong }
    // The first arg must be mapStateToProp
    // The second one is Action Creators from '../actions'
    // The connect function automatically calls Dispatch funtion
)(SongList); // Pass Component as outer arg
