import React from 'react';

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={entry:""};
    }
     onFormSubmit = (event) =>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
     }

    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} action='' className='ui form'>
                    <div className='field'>
                        <div className='ui masive icon input'>
                        <input 
                            type="text" 
                            placeholder='Search...'
                            onChange={(event)=>this.setState({entry:event.target.value.toUpperCase()})}
                            value = {this.state.value}/>
                        <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput
