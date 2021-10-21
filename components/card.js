import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CharacterCard({ character }) {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="h4" component="div" color="#0070f3" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          About Me:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Birthdate: {character.birth_year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Height: {character.height}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Weight: {character.mass}
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
          Species:
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          My Films:
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Starships Flown:
        </Typography>
      </CardContent>
    </Card>
  );
}






