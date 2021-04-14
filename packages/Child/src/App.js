import React from "react";
import styled, {keyframes} from 'styled-components'

function App() {
  const rotate = keyframes`
      from {
        transform: rotate3d(0deg);
      }

      to {
        transform: rotate3d(1, 1, 1, 360deg);
      }
    `;
  const Div = styled.ul`
        box-sizing: border-box;
        animation: ${rotate} 5s ease-in-out infinite;
        margin: 20px auto;
        border: solid 5px #F8FF13;
        color: #F8FF13;
        border-radius: 50px;
        width: 200px;
        height: 200px;
        padding: 55px;
        text-align: center;
        font-size: 4em;
     `

  return (
      <Div>
        MF
      </Div>
  );
}

export default App;
