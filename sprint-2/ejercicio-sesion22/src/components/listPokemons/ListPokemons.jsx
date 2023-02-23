import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../services/data";

const ListPokemons = ({ data = [] }) => {
    const navigate = useNavigate()
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.length &&
        data.map((pokemon, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 345 }}
            onClick={() => navigate(`${URL_BASE}/${pokemon.name}`)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    pokemon &&
                    pokemon.types.length &&
                    pokemon.types.map((type) => (
                      <Chip
                        key={type.slot}
                        icon={<FaceIcon />}
                        label={type.type.name}
                        variant="outlined"
                      />
                    ))
                  }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};

export default ListPokemons;
