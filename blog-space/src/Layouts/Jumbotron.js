import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import mags from '../Assets/mags.jpeg';
// import { Nav } from 'react-bootstrap';

const Styles = styled.div`
  .jumbotron {
    background: url(${mags}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #e6ffff;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export default function Jumbotron () {
 return (
  <Styles>
   <Jumbo fluid className="jumbo">
    <div className="overlay">
     <Container>
     </Container>
    </div>
   </Jumbo>
  </Styles>
 )
}