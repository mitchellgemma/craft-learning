import React from 'react';
import Box from './Box';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { request, gql } from 'graphql-request';
import { render } from 'react-dom';

const endpoint = 'https://bonfire-craft.nitro/api';

const boxQuery = gql`
  {
     entry(section: "home") {
    ... on home_home_Entry {
      boxes {
        ... on boxes_boxes_Entry {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    request(endpoint, boxQuery).then((res) => setData(res.entry.boxes));
  }, []);

  return (
    data.map((box) => <Box data={box} />)
  );
};

export default App;
