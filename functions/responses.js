/**
 * This file contains the constant strings to be used in the code logic to
 * allow for easy editing. Below are eslint comments to enforce JSON like
 * syntax since strings are usually stored in JSON. They are written in
 * JavaScript for easier organization of the data and in case functions
 * are used.
 */

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

const { Suggestions } = require("actions-on-google")
const rajiniInfo = require("./rajini-facts.json")

exports.categories = [
  {
    "category": "facts",
    "suggestion": "Facts",
    "facts": rajiniInfo.facts,
    "factPrefix": "Okay, here's a Rajnikanth fact."
  },
  {
    "category": "history",
    "suggestion": "History",
    "facts": rajiniInfo.history,
    "factPrefix": "Sure, here's a history fact."
  },
  {
    "category": "birthday",
    "suggestion": "Birthday",
    "facts": rajiniInfo.birthday,
    "factPrefix": "Okay, here's a Rajinikanth birthday facts."
  },
  {
    "category": "politics",
    "suggestion": "Politics",
    "facts": rajiniInfo.politics,
    "factPrefix": "Okay, here's a Rajinikanth politics fact."
  }
]

exports.content = {
  "images": [
    {
      "url":
        "https://firebasestorage.googleapis.com/v0/b/rajnikanth-facts.appspot.com/o/shiavji-predicted-note-ban.jpg?alt=media&token=a6b79913-661f-4475-83cf-dd54fd7b435d",
      "accessibilityText": "Shivaji the Boss predicated the Note Ban"
    },
    {
      "url":
        "https://firebasestorage.googleapis.com/v0/b/rajnikanth-facts.appspot.com/o/MV5BOGJhZGU0ZWMtMTdiYS00ZDA2LTk0NjYtOTgzNjdlM2U2NTE1XkEyXkFqcGdeQXVyMjk3NTUyOTc%40._V1_QL50_.jpg?alt=media&token=cebc2b2d-4737-4e32-b703-e03686578021",
      "accessibilityText": "Rajinikanth in new Movie"
    },
    {
      "url":
        "https://firebasestorage.googleapis.com/v0/b/rajnikanth-facts.appspot.com/o/rajinikanth-new-photos-from-2017-8.jpeg?alt=media&token=25b82117-6599-4686-85bd-72c4c16125a2",
      "accessibilityText": "Rajinikanth in Kabali"
    },
    {
      "url":
        "https://firebasestorage.googleapis.com/v0/b/rajnikanth-facts.appspot.com/o/rajni-guitar.jpg?alt=media&token=103cbd5e-d35d-4a8a-85fb-0dd5b38f2a1d",
      "accessibilityText": "Superstar Rajini plays Guitar"
    },
    {
      "url":
        "https://firebasestorage.googleapis.com/v0/b/rajnikanth-facts.appspot.com/o/rajni-kabali.jpg?alt=media&token=861aba2e-4d10-46da-b710-df22710b65a5",
      "accessibilityText": "Rajinikanth the Boss"
    }
  ],
  "link": "https://en.wikipedia.org/wiki/Rajinikanth"
}

exports.cats = {
  "suggestion": "Cats",
  "facts": [
    "Cats are animals.",
    "Cats have nine lives.",
    "Cats descend from other cats."
  ],
  "images": [
    {
      "url":
        "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/" +
        "160204193356-01-cat-500.jpg",
      "accessibilityText": "Gray Cat"
    }
  ],
  /**
   * This sample uses a sound clip from the Actions on Google Sound Library
   * https://developers.google.com/actions/tools/sound-library
   */
  "sounds": ["https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg"],
  "link": "https://www.google.com/search?q=cats",
  "factPrefix": "Alright, here's a cat fact.",
  "audio": "<audio src=\"%s\"></audio>"
}

exports.transitions = {
  "content": {
    "heardItAll":
      "Looks like you've heard all there is to know about " +
      "the %s of Rajinikath. I could tell you about its %s instead.",
    "alsoCats": "By the way, I can tell you about cats too."
  },
  "cats": {
    "heardItAll":
      "Looks like you've heard all there is to know about cats. " +
      "Would you like to hear about Rajinikanth?"
  }
}

exports.general = {
  "heardItAll":
    "Actually it looks like you heard it all. " + "Thanks for listening!",
  /** Used to give responses for no inputs */
  "noInputs": [
    "Yanna raskallaa, mind it!",
    "I didn't hear that.",
    "If you're still there, say that again.",
    "We can stop here. See you soon."
  ],
  "suggestions": {
    /**
     * Google Assistant will respond to more confirmation variants than
     * just these suggestions
     */
    "confirmation": new Suggestions("Sure", "No thanks")
  },
  "nextFact": "Would you like to hear another fact?",
  "linkOut": "Learn more",
  "wantWhat": "So what would you like to hear about?",
  "unhandled":
    "Welcome to Facts about Rajinikanth! I'd really rather " +
    "tell you about Rajinikanth's history or his awesome facts. Which " +
    "talk about %s. Wouldn't you rather talk about Rajinikanth? " +
    "do you want to hear about history or jokes?"
}
