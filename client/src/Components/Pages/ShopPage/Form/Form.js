import React from 'react'

import {connect} from 'react-redux'
import {filter,filterDefault } from '../../../../reduxStore/actions/filter'
 class Form extends React.Component{
    state = {
        sortbyPrice:''
    }

    componentDidMount(){
        this.props.filterDefault()
    }

    handleChange = (e)=>{
     
        const value = e.target.value;
        this.props.filter(value)
       this.setState(()=>{
        return {
            sortbyPrice: value
        }
    })

        
    }

render (){
    return(
        <form className="row">
            <label className="ml-auto">
               <h5 style={{display:'inline-block',fontWeight:'bold'}} className="pr-2">Sort By:</h5>
                <select  className="px-3 py-2" style={{cursor:'pointer' ,display:'inline-block',fontSize:'1.2rem', fontWeight:'bold',borderWidth:'2px'}} name={'sort-by'} value={this.state.sortbyPrice} onChange={this.handleChange}>
                     <option value=''>Recommended</option>
                    <option value="low-to-high">Price Low-High</option>
                    <option value="high-to-low">Price High-Low</option>

                </select>
            </label>
        </form>
    )
}
}

const mapDispatchToProps = {
    filter,
    filterDefault
}

export default connect(null, mapDispatchToProps)(Form) 