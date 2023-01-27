import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PokePagination(props) {
  //const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    props.setPagina(value);
  };

  return (
    <Stack spacing={2} display="flex" alignItems="center" margin="2em">
      <Pagination count={10} page={props.page} onChange={handleChange} variant="outlined" shape="rounded" size="large"/>
    </Stack>
  );
}