import { width } from '@mui/system';
import axios from 'axios';
import * as React from 'react';

export default function TableDetail(props) {

  const [stats, setStats] = React.useState(props.stats);

  const stTable = {
    width: '100%',
  }
  return (
    <table style={stTable}>
        
        <tr >
            <th colspan="2">{props.tipoTabela}</th>
            <th></th>
        </tr>
        <tr>
            <td>Peso: </td>
            <td>{props.weight}</td>
            <td>Altura: </td>
            <td>{props.height}</td>
        </tr>
        <tr>
            <td>{stats[0].stat.name}:</td>
            <td>{stats[0].base_stat}</td>
            <td>{stats[5].stat.name}:</td>
            <td>{stats[5].base_stat}</td>
            
        </tr>
        <tr>
            <td>{stats[1].stat.name}:</td>
            <td>{stats[1].base_stat}</td>
            <td>{stats[3].stat.name}:</td>
            <td>{stats[3].base_stat}</td>
        </tr>
        <tr>
            <td>{stats[2].stat.name}:</td>
            <td>{stats[2].base_stat}</td>
            <td>{stats[4].stat.name}:</td>
            <td>{stats[4].base_stat}</td>
        </tr>
    </table>
  );

}
