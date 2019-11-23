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
        <form>
            <label>
               <h5>Sort By:</h5>
                <select  name={'sort-by'} value={this.state.sortbyPrice} onChange={this.handleChange}>
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