import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let dataContext=createContext()


export function DataContextProvider ({children}){

    let [dataList,setDataList]=useState([])
    let [newDataList,setNewDataList]=useState(dataList)
    //console.log(newDataList)
    let [category,setCategory]=useState('')
    let [brand,setBrand]=useState('')
 

    async function getData(){
        let {data}= await axios.get('./data.json')
        setDataList(data)
         setNewDataList(data)
         //return data

    }
    // ele.category.includes(val)==true || ele.brand.includes(val)==true || ele.price <= val)
 
    // useEffect(()=>{
    //     Filter()
    // },[])

    // function Filter(val){
    //         let newDataList = dataList.filter((ele)=>(category=='' || ele.category.includes(category)==true) && (brand == '' || ele.brand.includes(brand)==true))
    //         console.log(newDataList)
           
    //        console.log(val)
    //       console.log(category,brand)
    //         setNewDataList(newDataList)
    //     }

   

    




    return <dataContext.Provider value={{getData,dataList,newDataList,setNewDataList,category,setCategory,brand,setBrand}}>
        {children}
    </dataContext.Provider>
}