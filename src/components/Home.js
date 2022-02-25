import React from 'react';
import { Grid } from '@material-ui/core';
import '../css/main.css';
const Home = () => {
  return (
    <>
      <div className="firstimage">
        <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="..."></img>
      </div>
      <div>
        <div className="container">
          <div className="imagediv">
            <img
              src="https://www.w3schools.com/w3images/tablesetting2.jpg"
              alt="abtcat_img"
              height={'50%'}
              width={'50%'}
            />
          </div>
          <div className="texts">
            <h1>About Catering</h1>
            <h4>Tradition since 1889</h4>
            <p className="para_one">
              <b>
                The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
                consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.We only use seasonal ingredients.
              </b>
            </p>
            <p className="para_two">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
              temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
