import React from 'react'
import styled from "styled-components";

const IngredientsWrapper = styled.div`
  border: 1px solid #eee;
  /* We need some spacing styles here */

  p {
    &:nth-child(odd) {
      background: #f2f2f2;
    }

    /* We need some spacing styles here */
  }
`;

const Ingredients = () => (
  <IngredientsWrapper>
    <p>240g caster sugar</p>
    <p>220g butter</p>
    <p>4 eggs</p>
    <p>200g flour</p>
  </IngredientsWrapper>
);

export default Ingredients;