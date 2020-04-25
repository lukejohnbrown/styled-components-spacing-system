import React from 'react'
import styled from "styled-components";

import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";

import cakeImage from "../images/cake.jpg";

const RecipeCardWrapper = styled.div`
  box-shadow: 0px 4px 20px rgba(222, 222, 222, 0.25);
  border: 1px solid #e8e8e8;
  border-radius: 15px;
`

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
