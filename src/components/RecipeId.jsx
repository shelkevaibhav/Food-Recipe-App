import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'

const RecipeId = () => {
 // console.log(useParams())
 const {idMeal}=useParams()
 const [data, setData] = useState([])
 const [active, setActive] = useState('ingredient')

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json();
      setData(data.meals[0])
    }
    fetchData();
  }, [idMeal])
  return (
  <><Navbar/>
  <div
   style={{
    width:'90%',
    margin: 'auto',
    textAlign:'center',
    color:'white'
 }}>
  <h1>{data.strMeal}</h1>
  <div
   style={{
  display:'flex'
 }}>
 
  <div className="img"
    style={{width:'30%'}}
    >
      
      <img src={data.strMealThumb} alt="" style={{width:'15rem'}}/>
    </div>
    <div className="content" style={{width:'60%'}}>
    <button className='btn' onClick={()=>setActive('ingredient')}>Ingredient</button>
      <button className='btn'onClick={()=>setActive('instruction')}>Instruction</button>

      {
        active === 'ingredient'? ( 
        <div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient1}-{data.strIngredient1}</div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient2}-{data.strIngredient2}</div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient3}-{data.strIngredient3}</div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient4}-{data.strIngredient4}</div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient5}-{data.strIngredient5}</div>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient6}-{data.strIngredient6}</div>
        </div>
        ):(
          <p>{data.strInstructions}</p>
        )
      }
      
  </div>
  </div>
  </div>
  <TrendingSlider/>
  </>
  )
}

export default RecipeId