import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getApod } from './actions';

function App(props) {
  console.log(props);
  const [date, setDate] = useState("");
  return (
    <div className="App">
      <h1> Nasa Photo of the Day </h1>
      <input type="text"
             palceholder="date"
             value={date}
             onChange={e => setDate(e.target.value)}/>
      {props.loading && <div>loading...</div>}
      {props.apod && (
        <div>
          <img src={props.apod.url}/>
          <p>{props.apod.explanation}</p>
        </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <button onClick={() => props.getApod(date)}>Get Photo of the Day</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getApod })(App);
