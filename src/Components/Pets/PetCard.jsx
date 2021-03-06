import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const PetCard = ({ pet, deletePet, pets }) => {
    
    const handleDelete = () => {
        fetch('http://localhost:3001/pets/' + pet.id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => deletePet(pet))
        
    }

    const card = (
        <React.Fragment> 
            <CardMedia
                component="img"
                height="140"
                image="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
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
            <CardActions>
                <Button size="small" onClick={ handleDelete }>Delete</Button>
             </CardActions>
        </React.Fragment>
);

  return (
    <Box sx={{ 
        minWidth: 275, 
        maxWidth: 275,
        margin: 4,
        flexGrow: 1,
    }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default PetCard;