import React,{useState} from 'react';

// class SearchBar extends React.Component{

//     state = {term:''};

//     onSubmitForm = (e) =>{
//         e.preventDefault()
//         this.props.getSeacrh(this.state.term);
//     }

//     render(){
//         return(
//         <div className="search-bar ui segment">
//             <form className="ui form" onSubmit={this.onSubmitForm}>
//                 <div className="field">
//                     <label>Video Search</label>
//                     <input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
//                 </div>
//             </form>
//         </div>
//         )
//     }

// }

const SearchBar = ({getSeacrh}) => {

    const [term,setTerm] = useState('');

    const onSubmitForm = (e) =>{
        e.preventDefault()
        getSeacrh(term);
    }

return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmitForm}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={e=>setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
)

}

export default SearchBar;