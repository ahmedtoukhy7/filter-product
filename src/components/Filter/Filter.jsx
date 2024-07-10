import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../Context/dataContext'

export default function Filter() {

 

  let {Filter,dataList,newDataList,setNewDataList,getData}=useContext(dataContext)
  const maxPrice = Math.max(...dataList.map(product => product.price));
  const minPrice = Math.min(...dataList.map(product => product.price));
  
  let [price,setPrice]=useState(69.99)
  let [category,setCategory]=useState('')
  let [brand,setBrand]=useState('')
 
   

    //  useEffect(()=>{
    //   handlePriceSort()
    //  },[])
    const [sortDirection, setSortDirection] = useState('asc');

    const handlePriceSort = () => {
      const newDataList = [...dataList].sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      setNewDataList(newDataList);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };
    useEffect(() => {
      handlePriceSort();
    }, []);
    useEffect(() => {
      FilterCa()
    }, [category,brand,price]);

  
    function FilterCa(){
      let newDataList = dataList.filter((ele)=>(category=="" || ele.category==category) && (brand == "" || ele.brand==brand) &&  ele.price >= parseFloat(minPrice) &&
       ele.price <= parseFloat(maxPrice))
      console.log(newDataList)
     
     
    console.log(category,brand)
      setNewDataList(newDataList)
  }
 console.log(price)

console.log(category,brand)
  return <div className='filter bg-danger p-2 mt-5 rounded'>
   
   <div className='row g-5 filterCont text-light  '>
        <div className='col-sm-4'>
        <label className='me-2'>Category : </label>
        <select onChange={(e)=>{
    setCategory(e.target.value)
    FilterCa()

     }} className='my-5' name="" id="">
       <option value="">All</option>
         <option value="Electronics">Electronics</option>
         <option value="Appliances">Appliances</option>
         <option value="Sports">Sports</option>
         <option value="Fashion">Fashion</option>
     </select>
        </div>
        <div className='col-sm-4'>
        <label className='me-2'>Brand : </label>
        <select onChange={(e)=>{
          
          setBrand(e.target.value)
          FilterCa()

     }} className='my-5' name="" id="">
      <option value="">All</option>
         <option value="TechCo">TechCo</option>
         <option value="HomeBrew">HomeBrew</option>
         <option value="ActiveGear">ActiveGear</option>
         <option value="AudioPro">AudioPro</option>
         <option value="CoffeeLuxe">CoffeeLuxe</option>
         <option value="OutdoorX">OutdoorX</option>
         <option value="SunShades">SunShades</option>
         <option value="FitLife">FitLife</option>
         <option value="KitchenAid">KitchenAid</option>
         <option value="UrbanStyle">UrbanStyle</option>
         
     </select>
        </div>

        <div className='col-sm-4'>
        <label className='me-2'>Price  </label>
          
          
            
            
            <p className=''>{minPrice} : {maxPrice}</p>
            
          
          
            
           <div className='row align-items-center'>
          
           
            <div className='col-sm-6'>
            <p className='bg-info px-2 py-1 rounded text-light my-3 w-50 text-center'>{price}</p>
            </div>
            <div className='col-sm-6'>
            <select onChange={()=>{
        handlePriceSort()
            }} name="" id="">
              <option  value="">Sort</option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
            </div>
           </div>
            <div className='d-flex gap-3'>
              <span>{minPrice}</span>
            <input id="customRange1" onChange={(e)=>{
                    setPrice(e.target.value)

                    FilterCa()
            }} type="range"  min={minPrice} max={maxPrice} className='form-range' />
            <span>{maxPrice}</span>
            </div>
        </div>
       
     </div>
    
  
  </div>
}
