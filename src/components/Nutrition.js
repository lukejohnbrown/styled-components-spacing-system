import React from 'react'
import styled from "styled-components";

const NutritionWrapper = styled.div`
  /* We need some spacing styles here */
`;

const NutritionItem = styled.div`
  border: 1px solid #eee;
  text-align: center;
  /* We need some spacing styles here */

  span {
    background: #fff59d;
    /* We need some spacing styles here */
  }
`

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

export default Nutrition
