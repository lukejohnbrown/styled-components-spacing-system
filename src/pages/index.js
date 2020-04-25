import React from "react"
import styled from "styled-components";

import Layout from "../components/Layout"
import RecipeCard from "../components/RecipeCard"

const Recipes = styled.section`
  display: grid;
  grid-template-columns: 450px;
  justify-content: center;
  margin: 50px 0;
`
const IndexPage = () => (
  <Layout>
    <Recipes>
      <RecipeCard />
    </Recipes>
  </Layout>
)

export default IndexPage
