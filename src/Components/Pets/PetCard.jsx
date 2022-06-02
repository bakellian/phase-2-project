import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PetCard = ({ pet }) => {
    const card = (
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
              { pet.name }
            </Typography>
            <Typography variant="body2">
                { pet.description }
            </Typography>
            </CardContent>
        </React.Fragment>
);

  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default PetCard