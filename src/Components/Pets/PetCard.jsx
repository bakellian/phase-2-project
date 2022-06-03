import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// if type === dog have image show dog. 

const PetCard = ({ pet, deletePet, }) => {
    
    const handleDelete = () => {
        //delete from back end using fetch request - with a DELETE request 
        fetch('http://localhost:3001/pets/' + pet.id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => deletePet(pet)) //remove it from the front end - delete pet handed down from APP - we pass deletePet the clicked on pet we want to delete
        
    }

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
            <CardActions>
                <Button size="small" onClick={ handleDelete }>Delete</Button>
             </CardActions>
        </React.Fragment>
);

  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default PetCard;