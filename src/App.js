import React, { useState } from "react";
import "./styles.css";

const emojisDictionary = {
  "😂": "Face with Tears of Joy: used to express laughter or amusement",
  "❤️": "Red Heart: used to express love or affection",
  "😍":
    "Smiling Face with Heart-Eyes: used to express admiration or attraction",
  "🤔": "Thinking Face: used to express thinking or pondering",
  "😊":
    "Smiling Face with Smiling Eyes: used to express happiness or contentment",
  "😭": "Loudly Crying Face: used to express sadness or intense emotion",
  "😘": "Face Blowing a Kiss: used to express affection or gratitude",
  "🥰": "Smiling Face with Hearts: used to express love or adoration",
  "🤗": "Hugging Face: used to express comfort or affection",
  "🙏": "Folded Hands: used to express prayer or gratitude",
  "🤣": "Rolling on the Floor Laughing: used to express intense laughter",
  "😒": "Unamused Face: used to express boredom or annoyance",
  "🥺": "Pleading Face: used to express sadness or a request for something",
  "😔": "Pensive Face: used to express sadness or thoughtfulness",
  "😴": "Sleeping Face: used to express sleepiness or boredom",
  "😎": "Smiling Face with Sunglasses: used to express coolness or confidence",
  "🤷": "Person Shrugging: used to express uncertainty or indifference",
  "🤩": "Star-Struck: used to express excitement or admiration",
  "😳": "Flushed Face: used to express embarrassment or surprise",
  "😜": "Winking Face with Tongue: used to express playfulness or mischief",
  "🤤": "Drooling Face: used to express desire or attraction",
  "🤑": "Money-Mouth Face: used to express greed or excitement over money",
  "😑": "Expressionless Face: used to express lack of emotion or interest",
  "😪": "Sleepy Face: used to express tiredness or exhaustion",
  "😫": "Tired Face: used to express fatigue or stress",
  "😕": "Confused Face: used to express confusion or uncertainty",
  "🙃": "Upside-Down Face: used to express sarcasm or silliness",
  "🤓": "Nerd Face: used to express intelligence or studiousness",
  "🤢": "Nauseated Face: used to express disgust or sickness",
  "🤮": "Face Vomiting: used to express extreme disgust or illness",
  "😷": "Face with Medical Mask: used to express sickness or caution",
  "🤥": "Lying Face: used to express deception or dishonesty",
  "🤫": "Shushing Face: used to express secrecy or quietness",
  "🤔": "Thinking Face: used to express thinking or pondering",
  "🤭": "Face with Hand Over Mouth: used to express surprise or shock",
  "🤯": "Exploding Head: used to express shock or amazement",
  "🥳":
    "Face with Party Horn and Party Hat: used to express celebration or excitement",
  "🤪": "Zany Face: used to express craziness or excitement",
  "🤬": "Face with symbols: indicates absusing and cursing"
};

var emojisWeKnow = Object.keys(emojisDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojisDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we currently don't have this in our database.";
    }
    //we don't need console.log in usestate we insted use
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojisDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Inside Outt </h1>
      <input onChange={emojiEventHandler}></input>

      <h2>{meaning}</h2>

      <h3>These are the most used Emojis in the world👇</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5 rem , 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
