import React from 'react'
import { useParams } from 'react-router-dom'

function Dashboard() {

  const useparams = useParams("id");

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-content center'>
          <h4>Hello, {useparams.id}</h4>
          <h5>Welcome to the Devship</h5>
        </div>
      </div>
    </div>
  )
}

export default Dashboard