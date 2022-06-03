import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const HomePage = () => {
  return (
    <div style={{
        position: 'absolute', left: '50%', top: '20%',
        transform: 'translate(-50%, -50%)'
    }}>
        <h1 className="title">Pet Creator</h1>
        <Button variant="contained" to='/petlist/new' component={ Link }>Create a Pet</Button>
    </div>
  )
}

export default HomePage