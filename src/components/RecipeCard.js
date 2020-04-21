import React from 'react'
import styled from "styled-components";

import cakeImage from "../images/cake.jpg";

const NutritionWrapper = styled.div`

`;
const NutritionItem = styled.div`
  border: 1px solid #eee;
  text-align: center;
  span {
    background: #fff59d;
  }
`;
const Nutrition = () => (
  <NutritionWrapper>
    <h4>Nutrition</h4>
    <NutritionItem>
      <span>kcal</span>
      <p>558</p>
    </NutritionItem>
    <NutritionItem>
      <span>fat</span>
      <p>28g</p>
    </NutritionItem>
    <NutritionItem>
      <span>saturates</span>
      <p>17g</p>
    </NutritionItem>
    <NutritionItem>
      <span>carbs</span>
      <p>76g</p>
    </NutritionItem>
    <NutritionItem>
      <span>sugars</span>
      <p>57g</p>
    </NutritionItem>
  </NutritionWrapper>
);



const IngredientsWrapper = styled.div`
  p {
    &:nth-child(odd) {
      background: #eee;
    }
  }
`;

const Ingredients = () => (
  <IngredientsWrapper>
    <p>240g caster sugar</p>
    <p>220g butter</p>
    <p>4 eggs</p>
    <p>200g flour</p>
  </IngredientsWrapper>
)



const Wrapper = styled.div`
  border: 1px solid #eee;
  display: inline-block;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
const Body = styled.div`

`;
const RecipeCard = () => {
  return (
    <Wrapper>
      <img src={cakeImage} alt="Victoria Sponge Cake" />
      <Body>
        <h3>Victoria Sponge Cake</h3>
        <p>Perfect for all occasions, the Victoria sponge is a family favorite.</p>

        <Nutrition />
        <Ingredients />
      </Body>
    </Wrapper>
  )
}

export default RecipeCard
