import React, { Component, PropTypes } from 'react'
import { PersonalDetails } from './Steps/PersonalDetails.jsx'
import { PhysicalFitness } from './Steps/PhysicalFitness.jsx'
import { HealthFacts } from './Steps/HealthFacts.jsx'
import { DietInfo } from './Steps/DietInfo.jsx'

const steps = 
    [
        {name: 'Health Facts', component: <HealthFacts/>},
      {name: 'Personal Details', component: <PersonalDetails/>},
      {name: 'Physical Fitness', component: <PhysicalFitness/>},
      {name: 'Diet Information', component: <DietInfo/>}
    ]

export { steps }