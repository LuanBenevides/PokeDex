import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TableDetail from '../TableDetail';
import { CardMedia } from '@mui/material';

const style = {
    with: '100%',
    height: "600px",
    display: 'flex',
    flexWrap: 'wrap',
    position: 'left',
    padding: 0,
}
export default function CardDetail(props) {
  return (
    <Card sx={style}>
      <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt="green iguana"
          border="solid 1px #181818"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TableDetail tipoTabela="Dados de combate" weight={props.weight} height={props.height} stats={props.stats}/>
        </Typography>
      </CardContent>

      
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
