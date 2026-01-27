function DeckDescription(data) {

    return (
        <div style={{ padding: 20 }}>
            <h1>Archidekt Deck Viewer</h1>

            <input
                placeholder='Enter deck ID'
                value={deckId}
                onChange={(e) => setDeckId(e.target.value)}
            />

            <button onClick={fetchDeck}>Fetch</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {deck && (
                <div>
                    <h2>{deck.name}</h2>
                    <p>Commander: {deck.commander}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <p>Colors: {deck.colors}</p>
                        <div style={{ width: '30px', height: '30px', backgroundColor: GetColorValue(deck.colors), border: '2px solid #ccc' }}></div>
                    </div>
                    <p>Color value: {GetColorValue(deck.colors)}</p>
                    <p>Cards: {deck.cards}</p>
                    <p>Salt: {deck.salt}</p>
                </div>
            )}
        </div>
    );
} 