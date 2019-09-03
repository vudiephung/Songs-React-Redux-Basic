import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'Jump', duration: '3:28' },
        { title: 'All Star', duration: '2:49' },
        { title: 'Before The Dawn', duration: '3:22' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})