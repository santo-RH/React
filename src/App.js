import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadData></LoadData>
 
    </div>
  );
}

function LoadData(){
const [allData,setData] = useState([]);

useEffect(()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res=> res.json())
.then(data => setData(data.meals))
},[]
)
return(
  <div id='mainDiv'>
   {
    allData.map(datas => <MealDb  strMealThumb={datas.strMealThumb} strMeal={datas.strMeal} strTags={datas.strTags} strArea={datas.strArea}></MealDb>)
   }
  </div>
)

}

function MealDb(props){
  return(
    <div className='mealdb'>
      <img src={props.strMealThumb} alt="" />
      <h2>{props.strMeal}</h2>
      <h2>{props.strTags}</h2>
      <h4>{props.strArea}</h4>
    </div>
  )
}



export default App;
