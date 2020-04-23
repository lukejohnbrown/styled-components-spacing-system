import React from 'react'
import styled from "styled-components";

import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";

import cakeImage from "../images/cake.jpg";

const RecipeCardWrapper = styled.div`
  border: 1px solid #eee;
  display: inline-block;
  box-shadow: 0 2px 40px 0px rgba(14, 30, 37, 0.16);
  border-radius: 10px;
`;

const Body = styled.div`
  /* We need some spacing styles here */
`;

const RecipeCard = () => {
  return (
    <RecipeCardWrapper>
      <img src={cakeImage} alt="Victoria Sponge Cake" />
      <Body>
        <h3>Victoria Sponge Cake</h3>
        <p>Perfect for all occasions, the Victoria sponge is a family favorite.</p>

        <Nutrition />
        <Ingredients />
      </Body>
    </RecipeCardWrapper>
  )
};

export default RecipeCard;
