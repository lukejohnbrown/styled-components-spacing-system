import React from 'react'
import styled from "styled-components";

const IngredientsWrapper = styled.div`
  p {
    /* We need some spacing styles here */

    &:nth-child(odd) {
      background: #eee;
    }
  }
`

const Ingredients = () => (
  <IngredientsWrapper>
    <p>240g caster sugar</p>
    <p>220g butter</p>
    <p>4 eggs</p>
    <p>200g flour</p>
  </IngredientsWrapper>
)

export default Ingredients;