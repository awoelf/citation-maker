import React from 'react'
import CitationForm from './CitationForm'

describe('<CitationForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CitationForm />)
  })
})