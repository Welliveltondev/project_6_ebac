import React from 'react'
import Card from '../../components/Card/Card'
import Order from '../Order/Order'
import Payment from '../Payment/Payment'

function Checkout() {
  return (
    <div className="container">
      <Card />
      <Order />
      <Payment />
    </div>
  )
}

export default Checkout
