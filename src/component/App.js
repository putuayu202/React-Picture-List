import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImagesList from './ImagesList'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    async onSearchSubmit(entry){
        console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=35002551-74c55b1fa930e013d891755d4&q=${entry}&image_type=photo`)
        this.setState({images : response.data.hits})
    }
    render(){
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit = {this.onSearchSubmit}/>
                <ImagesList images = {this.state.images}/>
            </div>
        )
    }
}

export default App