import React from "react";

function Search(props) {
  return (
    <div>
      <form>
        <label htmlFor='location'>get Co-ordination</label>
        <button onClick={props.location}></button>
        <br />
        <label htmlFor='location'>City:</label>
        <input
          type='text'
          name='city'
          value={props.city}
          onChange={props.change}
          placeholder='Search Location'
        />
        <br />
        <h3>Get Co-Ordinate</h3>
        <label>Latitude: </label>
        <input
          type='number'
          name='lat'
          value={props.lat}
          onChange={props.change}
        />
        <label>Longitude: </label>
        <input
          type='number'
          name='lon'
          value={props.lon}
          onChange={props.change}
        />
        <button className='btn btn-success'>Search</button>
      </form>
    </div>
  );
}
export default Search;