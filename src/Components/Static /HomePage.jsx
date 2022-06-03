import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const HomePage = () => {
  return (
    <div style={{textAlign:'center'}}>
        <iframe src="https://giphy.com/embed/8fKUpCxoHE4Dc2nZEO" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h1 className="title">Pet Creator</h1>
        <Button variant="contained" to='/petlist/new' component={ Link }>Create a Pet</Button>
    </div>
  )
}

export default HomePage