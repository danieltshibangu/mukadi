import React from 'react'

const MoneyDisplay = ({dollar, cents}) => {
  return (
    <span>${dollar}<span style={{ 'color':'rgb(0, 0, 0, 0.3)' }}>.{cents}</span></span>
  )
}

export default MoneyDisplay