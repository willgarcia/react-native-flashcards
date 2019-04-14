# mobile-flashcards

Manage flashcards in a mobile app.

Features:

- Manage decks
- For each deck, create cards
- Take quizzes

## Installation

Run the followind command: `yarn install`

## Run the application

To start the app, run the following command: `yarn start`.

Follow the instructions provided by the command to run the app on an iOS or Android simulator.

NOTE: this project has only been tested on MacOS with iOS (Xcode simulator).

## Notes

### Icon credits

Deck card (app icon): https://www.flaticon.com/authors/icongeek26

### Limitations

- The bottom navigation bar is only present in the home page. To add a new deck, the user has to go back to the home page
- Given decks can have the same names, it would have been better to store a unique generated ID per deck to make some parts more robust (like searching for a unique deck).
