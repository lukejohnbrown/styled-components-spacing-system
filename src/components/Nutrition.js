import React from 'react'
import styled from "styled-components";

const NutritionWrapper = styled.div`
  display: grid;
`;

const NutritionItem = styled.div`
  border: 1px solid #F8F8F8;
  border-radius: 10px;
  text-align: center;

  /* We need some spacing styles here */

  span {
    /* We need some spacing styles here */
  }

  p {
    /* We need some spacing styles here */
  }
`;

const Nutrition = () => (
  <NutritionWrapper>
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
    <NutritionItem>
      <span>fibre</span>
      <p>0.65g</p>
    </NutritionItem>
  </NutritionWrapper>
)

export default Nutrition;
