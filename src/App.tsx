import { useState, useEffect } from 'react'
import * as styles from './styles/styles.tsx';
import ColorBlock from './utils/colorChooser.tsx';

type Deck = {
  name: string,
  colors: string,
  links: {
    deckLink: string,
    imageLink: string
  }
}

function App() {
  const [data, setData] = useState<Deck[]>([]);
  const [error, setError] = useState(null);

  // Fetch deck data from the local server
  const fetchDeck = async () => {
    try {
      setError(null);
      const res = await fetch(`http://localhost:4000/decks`);
      if (!res.ok) throw new Error("Failed to fetch deck");

      const data = await res.json();
      setData(data);
    } catch (err) {
        //setError(err.message);
    }
  };

  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <div style={styles.containerStyle}>
      <div>
        <h1>Aktiiviset pakat</h1>
      </div>
      <div>
        {data?.map(deck => (
          <div key={deck.name} style={styles.deckPreviewStyle}>
            <a href={deck.links.deckLink}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={deck.links.imageLink} alt={deck.name} />          {/* Deck image */}
                <h2>{deck.name}</h2>                                        {/* Deck name with link */}
                <ColorBlock colorString={deck.colors} />                    {/* Color block */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
