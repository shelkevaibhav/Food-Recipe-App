import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams, Link } from 'react-router-dom';

const Search = () => {
  const { searchTerm } = useParams(); // Correct usage of React hook
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await api.json();
            setData(data.meals);
        };
        fetchData();
    }, [searchTerm]);
  return (
    <>
           <Navbar />
           <div style={{
               width: '90%',
               margin: 'auto',
               display: 'grid',
               gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
               gridGap: '1rem',
               marginTop: '2rem'
           }}>
               {data && data.map((d) => (
                   <Link to={`/${d.idMeal}`} className='link' key={d.idMeal}>
                       <div>
                           <div className="img">
                               <img src={d.strMealThumb} alt={d.strMeal} style={{ width: '13rem' }} />
                           </div>
                           <h3 style={{ color: 'white' }}>{d.strMeal}</h3>
                       </div>
                   </Link>
               ))}
           </div>
           <TrendingSlider />
        </>
    );
};

export default Search