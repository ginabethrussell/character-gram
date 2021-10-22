import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard({ character, species, films, starships, vehicles }) {

  return (
    <Card id="profile-card" sx={{ minWidth: 300, maxWidth: 450 }}>
      <div style={{ padding: "2rem" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://i.stack.imgur.com/34AD2.jpg"
              alt="user profile"
              sx={{ borderRadius: "20px", marginBottom: "1rem", maxWidth: 300 }}
            />
          </div>
          <Typography id="character-name" variant="h4" component="div" color="#0070f3" gutterBottom>
            {character.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            About Me:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Birthdate: {character.birth_year}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Height: {character.height} cm
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Weight: {character.mass} kg
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hair Color: {character.hair_color}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Skin Color: {character.skin_color}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Eye Color: {character.eye_color}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Species: {species}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            My Films:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {films}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Starships Flown:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {starships}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Vehicles Driven:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vehicles}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}






