import React from 'react'
import styled from "styled-components";

const IngredientsWrapper = styled.div`
  background: #F8F8F8;
  /* We need some spacing styles here */

  p {
    /* We need some spacing styles here */
  }
`;



const Ingredients = () => (
  <IngredientsWrapper>
    <p><strong>Ingredients</strong></p>
    <p>240g caster sugar</p>
    <p>220g butter</p>
    <p>4 eggs</p>
    <p>200g flour</p>
  </IngredientsWrapper>
);

export default Ingredients;