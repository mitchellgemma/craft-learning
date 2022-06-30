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
  const [filter, setFilter] = useState('all')

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
    request(endpoint, boxQuery).then((res) => setData(res.entry.boxes))
      }, []);
  
  useEffect(() => {
    const showAll = (event) => {
      setFilter('all')
      document.querySelector('.checked').classList.remove('checked')
      event.currentTarget.classList.add("checked")
    }
    const showEven = (event) => {
      setFilter('even')
      document.querySelector('.checked').classList.remove('checked')
      event.currentTarget.classList.add("checked")
    }
    const showOdd = (event) => {
      setFilter('odd')
      event.currentTarget.classList.add("checked")
      document.querySelector('.checked').classList.remove('checked')
    }
    allButton.addEventListener("click", showAll)
    evenButton.addEventListener("click", showEven)
    oddButton.addEventListener("click", showOdd)
    
    
    return () => {
      allButton.removeEventListener("click", showAll)
      evenButton.removeEventListener("click", showEven)
      oddButton.removeEventListener("click", showOdd)
    }
  }, [])

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