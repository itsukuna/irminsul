import React from 'react';
import { Grid } from '@mui/material';
import CharacterButton from '@/components/buttons/characterButton';
import characters from '@/data/characters/characterList';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const router = useRouter();

  const handleCharacterClick = (key) => {
    router.push(`/character/${encodeURIComponent(key)}`);
  };

  return (
    <>
      <Head>
        <title>Irmisul</title>
      </Head>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        {characters.map((character) => (
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
