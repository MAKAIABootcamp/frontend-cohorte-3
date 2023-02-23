import React, {useEffect, useState} from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AddPokemon from '../components/addPokemon/AddPokemon'
import DetailPokemon from '../components/detailPokemon/DetailPokemon'
import ListPokemons from '../components/listPokemons/ListPokemons'
import Pokemons from '../components/pokemons/Pokemons'
import { URL_BASE } from '../services/data'
import getPokemons from '../services/getPokemons'

const AppRouter = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons().then(response => setPokemons(response)) 
        
    },[])
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL_BASE} element={<Pokemons />}>
          <Route index element={<ListPokemons data={pokemons} />} />
          <Route
            path=":namePokemon"
            element={<DetailPokemon data={pokemons} />}
          />
          <Route path="addPokemon" element={<AddPokemon />} />
        </Route>
        <Route path="*" element={<Navigate to={URL_BASE} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter