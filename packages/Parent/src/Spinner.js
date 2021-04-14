import React from "react";

import styled, {keyframes} from 'styled-components'

function Spinner() {
    const rotate = keyframes`
      from {
        transform: rotate3d(0deg);
        border-bottom-color: #F8FF13;
      }
      50% {
        border-bottom-color: black;
      }
      to {
        transform: rotate3d(0, 0, 1, 360deg);
        border-bottom-color: #F8FF13;
      }
    `;
    const Div = styled.ul`
        animation: ${rotate} 2s ease infinite;
        margin: 20px auto;
        border: solid 5px #F8FF13;
        color: #F8FF13;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        
     `

    return (
        <Div>
        </Div>
    );
}

export default Spinner;
