import React from 'react'
import Card from './Card'
import './index.css'  


const App = () => {
  return (
    <>
      <h2 className='center'>Blockbuster Discount</h2>
    
    <div className='Col'>
      <Card heading="Apple iPhone 15 Pro:" listcnt="powerful A17 Bionic chip for exceptional performance" listcnt2="Preimium" idx={0}/>
      <Card heading="Samsung 65 Class Neo QLED 4K QN85B Series" listcnt="Boasts Quantum Matrix Technology for vibrant colors and deep blacks" listcnt2="Solid" idx={1}/>
      <Card heading="Sony WH-1000XM5 Headphones" listcnt="Offers industry-leading noise cancellation and exceptional sound quality" listcnt2="Modeling" idx={2}/>
      <Card heading="Dell XPS 15 Laptop" listcnt="InfinityEdge display and premium build quality" listcnt2="Expensive" idx={3}/>
    </div>
    </>
  )
}

export default App