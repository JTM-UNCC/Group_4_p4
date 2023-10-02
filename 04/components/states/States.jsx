import React, {memo} from 'react';
import './States.css';


/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */

class States extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: window.models.states(),
      searchVal: ""
    };

    console.log('window.models.states', window.models.states);
  }

  render() {
    return (
      <div id="main">
        <this.SearchBar/>
        <this.StateElements/>
      </div>
    );
  }



  SearchBar = () => {

    const search = (event) => {
      this.setState({
        list : window.models.states().filter((value) => {
          return value.toLowerCase().includes(event.target.value.toLowerCase());
        }),
        searchVal : event.target.value.toLowerCase()
      });
    };


    const Feedback = memo(function({ sVal }) {
      Feedback.displayName = "Feedback";
      if (sVal != null && sVal !== ""){
        return <span>Searching for &quot;{sVal}&quot;</span>;
      }
      else {return (<span>&nbsp;</span>);}
    });


    return (
        <div>
            <label htmlFor="search">Search:
              <input type="text" id="search" onChange={event => search(event)}/>
            </label>
            <Feedback sVal={this.state.searchVal}/>
        </div>
    );
  };


  StateElements = () => {

    const StateList = memo(function ( { list }) {
      StateList.displayName = "StateList";
      if (list.length !== 0) {
        return list.map((val, key) => <li key={key}>{val}</li>);
      }
      else return <li>No results found</li>;

    });


    return (
        <ul>
          <StateList list={this.state.list}/>
        </ul>
    );
  };
}





export default States;
