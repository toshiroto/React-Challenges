import React from "react";
import Entry from "./Entry";
//1. Create Entry Component
//2. Craate Props to replace the hard coded data
//3a. Import emojipedia <const></const>
//3. Map through emojipedia array and render entry components

function createTerm(emoji) {
  return (
    <Term
    id={emoji.id}
    key={emoji.key}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      <Entry />
      <Entry />
      <Entry />


      </dl>
    </div>
  );
}

export default App;
