import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// if type === dog have image show dog. 

const PetCard = ({ pet }) => {
    console.log("pet card pet:", pet)
    const card = (
        <React.Fragment> 
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
            <Typography variant="h5" component="div">
              { pet.petsData.name }  
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { pet.petsData.type }
            </Typography>
            <Typography variant="body2">
                { pet.petsData.description }
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