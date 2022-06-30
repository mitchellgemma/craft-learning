import React from 'react';
import Box from './Box';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { request, gql } from 'graphql-request';
import { render } from 'react-dom';
const allButton = document.querySelector(".show-all")
const evenButton = document.querySelector(".show-even")
const oddButton = document.querySelector(".show-odd")


const endpoint = 'https://bonfire-craft.nitro/api';

const boxQuery = gql`
  {
     entry(section: "home") {
    ... on home_home_Entry {
      boxes {
        ... on boxes_boxes_Entry {
        id
        boxTitle
        boxSubtext
        boxCategory {
          title
        }
        boxButton
        buttonUrl
      }
      }
    }
  }
}
`;

const App = () => {
  const url = window.location.href
  const [data, setData] = useState([]);
  const baseUrl = "https://bonfire-craft.nitro/"

  const initialFilterState = () => {
    if (url === baseUrl){
      return 'all'
    }else if (url === `${baseUrl}type-of-number/even`){
      return 'even'
    } else if (url === `${baseUrl}type-of-number/odd`){
      return 'odd'
    }
  }
  const [filter, setFilter] = useState(initialFilterState)

  const getFilteredData = () => {
    if (filter === 'all') {
      return data
    } else if (filter === 'even'){
      return data.filter((box) => box.boxCategory[0].title === 'even')
    } else {
      return data.filter((box) => box.boxCategory[0].title === 'odd')
    }
  }

  useEffect(() => {
    console.log(filter)
    request(endpoint, boxQuery).then((res) => setData(res.entry.boxes))
      }, []);
  
  // useEffect(() => {
  //  if (url === baseUrl){
  //     setFilter('all')
  //   }else if (url === `${baseUrl}type-of-number/even`){
  //     setFilter('even')
  //   } else if (url === `${baseUrl}type-of-number/odd`){
  //     setFilter('odd')
  //   }
    // allButton.addEventListener("click", showAll)
    // evenButton.addEventListener("click", showEven)
    // oddButton.addEventListener("click", showOdd)
    
    
    // return () => {
    //   allButton.removeEventListener("click", showAll)
    //   evenButton.removeEventListener("click", showEven)
    //   oddButton.removeEventListener("click", showOdd)
    // }
  // }, [])

  if(!data){
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    getFilteredData().map((box, i) => <Box key={box.id} data={box} />)
    );
  };
  
  export default App;