import React, { useState, useEffect } from 'react';

const Phrase = () => {
  const url = 'https://random-word-api.herokuapp.com/word?length=10';
  const [phrase, setPhrase] = useState('');

  const fetchPhrase = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(' error');
      }
      const data = await response.json();
      const resp = data[0];
      setPhrase(resp);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchPhrase();
  }, []);

  return <div>{phrase}</div>;
};

export default Phrase;
