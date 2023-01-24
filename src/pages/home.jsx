import { Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import PokePagination from "../components/PokePagination";
import { Skeletons } from "../components/Skeletons";


export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(54);
    const [offSet, setOffSet] = useState(0);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        getPokemons();
    }, [pagina]);

    const getPokemons = () => {

        var endpoints = [];

        let offset = pagina * limit - limit;

        for (var i = offset + 1; i <= limit * pagina; i++){
            endpoints.push( `https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res))
        .catch(err => console.log("Não foi possível obter os dados dos pokemons...", err));

    }
    
    const pokemonFilter = (name) => {

        var filteredPokemons = [];

        if(name===""){
            getPokemons();
        }
        for(var i in pokemons){
            if(pokemons[i].data.name.includes(name.toLowerCase())){
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    }

    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Skeletons/> : 
                      pokemons.map((pokemon, key) => (
                        <Grid item  xs={12} sm={6} md={4} lg={2} key={key}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                        </Grid>
                      ))
                    }
                </Grid>
                
            </Container>
            <PokePagination page={pagina} setPagina={setPagina}/>
        </div>
    );
    
}
