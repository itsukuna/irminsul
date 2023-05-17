import React, { useState } from 'react';
import { Grid } from '@mui/material';
import CharacterButton from '@/components/buttons/characterButton';
import characters from '@/data/characters/characterList';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import VisionFilter from '@/components/buttons/visionFilter';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const router = useRouter();

  const handleCharacterClick = (key) => {
    router.push(`/character/${encodeURIComponent(key)}`);
  };

  const [selectedVision, setSelectedVision] = useState('');

  const handleFilterChange = (vision) => {
    setSelectedVision(vision);
  };

  const filteredCharacters = selectedVision
    ? characters.filter((character) => character.vision === selectedVision)
    : characters;

  return (
    <>
      <Head>
        <title>Irmisul</title>
      </Head>
      <VisionFilter onFilterChange={handleFilterChange} />
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        {filteredCharacters.map((character) => (
          <Grid item key={character.key}>
            <div onClick={() => handleCharacterClick(character.key)}>
              <CharacterButton character={character} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
