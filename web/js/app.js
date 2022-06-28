import React from 'react';
import Box from './Box';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { request, gql } from 'graphql-request';
import { render } from 'react-dom';

const endpoint = 'https://bonfire-craft.nitro/api';

const boxQuery = gql`
  {
    entries {
      ... on boxes_boxes_Entry {
        boxTitle
        boxSubtext
        boxCategory {
          id
        }
        boxButton
        buttonUrl
      }
    }
  }
`;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request(endpoint, boxQuery).then((res) => setData(res.entries));
  }, []);

  return (
    data.map((box) => <Box data={box} />)
  );
};

export default App;
