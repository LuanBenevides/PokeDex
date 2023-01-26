import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { CardMedia } from '@mui/material';
import CardDetail from '../CardDetail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  display: 'flex',
  flexDirection: 'row',
  alginItems: 'center',
  justifyContent: 'space-between',

  backGroundColor: "#181818",

};

const styleImg = {
    width: '50%',
    boxSizing: 'border-box',
}

const stylePokeDatas = {
    textAligin: 'center',
}

export default function PokeModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);


  return(
    <div>
      <Button onClick={handleOpen} sx={{color: "#000"}}>    
        <SearchIcon sx={{color: "#000"}}/>...
      </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <CardMedia sx={styleImg}
                    component="img"
                    image={props.image}
                    boxSizing="border-box"
                    alt="Imagem do pokemon"
                    /> */}
                
                    <Box sx={stylePokeDatas}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>      
                            <CardDetail name={props.name} weight={props.weight} height={props.height} stats={props.stats} image={props.image}/>
                        </Typography>
                    </Box>
                </Box>
            </Modal>
    </div>
  );
}
