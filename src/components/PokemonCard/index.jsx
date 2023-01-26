import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import PokeModal from '../PokeModal';
import axios from 'axios';

export default function PokemonCard({ keyId ,name, image, types, abilities, weight, height, stats}) {

  const typeHandler = () => {
    if(types[1]){
        return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  }

  
  return (

    <div>

      <Card sx={{ maxWidth: 450 }} id="card">
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            height="300"
            padding="30"
            boxSizing="border-box"
            alt="Imagem do pokemon"
            border="solid 1px #181818"
          />
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography gutterBottom variant="h5" component="div">
                  {name}
              </Typography>
              <Typography gutterBottom variant="caption" component="div">
                  {typeHandler()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <PokeModal name={name} image={image} abilities={abilities} weight={weight} height={height} stats={stats}/>
      </Card>
    </div>
  );
}
