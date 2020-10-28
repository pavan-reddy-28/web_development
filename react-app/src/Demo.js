import React, { Component } from 'react'

export function Demo(){

   

const Welcome =(props)=><h1>hello {props.name}</h1>

  {
        return (
          <div>
            <Welcome name="pavan"/>
            <div>
       <div>

         <input type="text" id="empId" /> <button onclick={()=>{}}>get details </button>
       </div>
                <table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
            </div>
            </div>
        )
    }
}





export default Demo
