import React, {  useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { dataContext } from '../../Context/dataContext'




export default  function Table() {

    let {getData,newDataList,dataList}=useContext(dataContext)
  
   

    useEffect(()=>{
        getData()
    },[])

     
   
   
   return <>
    

    

     <div className='tableCont my-5'>
     
      <table className='table '>
        <thead>
         <tr className='fw-bold '>
             <td>#</td>
             <td>Name</td>
             <td>Category</td>
             <td>Price</td>
             <td>Brand</td>
         </tr>
        </thead>
        <tbody>
        {newDataList.length >0  ? newDataList.map((ele)=> <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.category}</td>
            <td>{ele.price}</td>
            <td>{ele.brand}</td>
        </tr>):<h2>No Data</h2>}
       </tbody>
     </table>

     <button onClick={()=>{
        getData()
     }} className='btn btn-danger text-light d-block w-25 mx-auto'>Reset</button>
     </div>
    
   </>
}
