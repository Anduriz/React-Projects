 import React, { useEffect, useState } from 'react'
 import styled from 'styled-components';
 //Motion helps whit the transitions
 import {motion} from 'framer-motion';
 import {Link, useParams} from 'react-router-dom';

 function Cuisine() {
   
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  // name comes from the keyword that we will get with useParams
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    )
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    // We are gonna pass here the name
    getCuisine(params.type);
    console.log(params.type);
    // We pass params type so when the params change it changes
  },[params.type])

  return (
    // This div its gonna have an animated transition
     <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
     >
       {cuisine.map((item) => {
         return(
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
         )
       })}
     </Grid>
   )
 }
 
const Grid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 grid-grap: 3rem;
`
const Card = styled.div`
 img{
  width: 100%;
  border-radius: 2rem;
  padding: 1rem;
 }
 a{
   text-decoration: none;
 }
 h4{
   text-align: center;
   padding: 1rem;
 }
`

 export default Cuisine