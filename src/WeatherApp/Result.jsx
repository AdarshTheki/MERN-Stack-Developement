import React from 'react'

export default function Result(props) {
  const {weatherData: data} = props;
  console.log(data.main.temp);
  return (
    <div className='Home'>
      <h1>Result</h1>
      <p></p>
      <table style={{width:"100%"}}>
        <thead style={{border:"1px solid black", textAlign:"center"}}>
          <tr>
            <th>City:  Description</th>
          </tr>
        </thead>
        <tbody style={{border:"1px solid black"}}>
          <tr>
            <th>Feels Like</th>
            <td>temp</td>
          </tr>
          <tr style={{border:"1px solid gray"}}>
            <th>Minimum Temp</th>
            <td>min temp</td>
          </tr>
          <tr>
            <th>Maximum Temp</th>
            <td>max temp</td>
          </tr>
          <tr style={{border:"1px solid gray"}}>
            <th>Sun Rise</th>
            <td>sun rise time</td>
          </tr>
          <tr>
            <th>Sun Sat</th>
            <td>sun sat time</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
