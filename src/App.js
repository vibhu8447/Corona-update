
import React, { useState, useEffect } from 'react';
import './App.css';


const App=()=> {
      const [data,setdata]=useState([]);
      const getcoviddata=async ()=>
      {
        const res= await fetch('https://api.covid19india.org/data.json');
        const actualdata=await res.json();
        console.log(actualdata.statewise);
        setdata(actualdata.statewise);
        
      }
      useEffect(()  =>
        {
            getcoviddata();
        },[]);

  return(
  <>
  <div className='heading'>
    <h1 className='title' ><span>INDIA</span> CORONA UPDATE </h1>
  </div>
  <div className='table-responsive' >
      <table className='center'>
        <thead className='table-dark'>
        <tr>
          <th>State</th>
          <td>Confirmed</td>
          <td>Recovered</td>
          <td>Deaths</td>
          <td>Active</td>
          <td>Updates</td>
        </tr>

        </thead>
        <tbody>

          {

            data.map((curE,index)=>
            {
                return (
                    <tr>
                      <th>{curE.state}</th>
                      <td>{curE.confirmed}</td>
                      <td>{curE.recovered}</td>
                      <td>{curE.deaths}</td>
                      <td>{curE.active}</td>
                      <td>{curE.lastupdatedtime}</td>


                    </tr>
                )
            })
          }
        </tbody>

      </table>
  </div>
  
  </>
  );
}

export default App;
