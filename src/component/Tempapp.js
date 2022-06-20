import React, { useEffect, useState } from "react";
import "./css/style.css"

const Tempapp = () =>{

    const [city,setCity] = useState(null);
    const [search , setSearch] = useState("Lahore");


    useEffect(()=>{

        const fetchApi = async () =>{
            
            console.log(search);
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8926c0f2ce4f42e16a9e76df353ca1ca`;
            const response = await fetch(url);

            const resJson = await response.json();
            console.log(resJson);
             setCity(resJson.main);

        }
        
        fetchApi();
    },[search])


return(

<>
<div className="box">

    <div className="inputData">

    <input type="search"  className="inputField" value={search} onChange={(event)=>{ setSearch(event.target.value) }}/>

    </div>

{!city?(

<p>No data found</p>

):(
<div>
<div className="info">
<h2 className="location">
<i className="fas fa-street-view"></i>
{search}
 </h2>


<h1 className="temp">
 {city.temp}° cel

</h1>

<h3 className="temp-max">Min {city.temp_min}° | Max {city.temp_max}°</h3>
</div>





<div className="wave one">


</div>
<div className="wave two">

    
</div>
<div className="wave three">

    
</div>
</div>
)}

</div>

</>


)




}


export default Tempapp;
