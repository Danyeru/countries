import React from 'react'
import { ContentScreen } from './ContentScreen'
import { Home } from './Home'

export const MainScreen = ({countrycode}) => {
  return (
    <div>
      { countrycode !== "" ? (
        <ContentScreen countrycode={countrycode} />
      ) : (
        <Home />
      )}
    </div>
  )
}
