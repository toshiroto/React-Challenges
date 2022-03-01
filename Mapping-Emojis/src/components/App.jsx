import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

//2. Craate Props to replace the hard coded data
//3a. Import emojipedia <const></const>
//3. Map through emojipedia array and render entry components

function createEntry(emoji) {
  return (
    <Entry
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
     {emojipedia.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
