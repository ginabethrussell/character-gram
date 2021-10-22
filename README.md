## Charactergram - The Star Wars Edition

Charactergram - The Star Wars Edition is a front end single page application that displays Star Wars character data provided by [SWAPI](https://swapi.dev/) - The Star Wars API. Users can search or browse to see all available characters. Users can select a character to see a character profile page.

This front end app is built with [Next.js](https://nextjs.org/), React, Javascript, Material UI, Emotion, React Icons, and LottieFiles.

### Installation and Setup Instructions

Clone the repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

### Cypress Integration Tests
Since Cypress is testing a real Next.js application, it requires the Next.js server to be running prior to starting Cypress. Running your tests against your production code will more closely resemble how your application will behave.

To Run Tests:

`npm run build`

`npm run start`

`npm run cypress`

### SWAPI API

[SWAPI API Documentation](https://swapi.dev/documentation) 
App routes include
- [People](https://swapi.dev/api/people/) - 82 characters
- [Species](https://swapi.dev/api/species/) - 37 species
- [Films](https://swapi.dev/api/films/) - 6 films
- [Starships](https://swapi.dev/api/starships) - 36 starships
- [Vehicles](https://swapi.dev/api/vehicles/) - 39 vehicles

##### The REST API is completely open and free to use.

### Ongoing Development Plans

 - Add LIGHT & DARK MODE toggle for the Jedi/Sith choice
 - Add Pagination to display character button links in sets of 10 
 - Improve styling and add images
 - Add a Heart Icon to the header and to profile pages to create and save a favorites list
 - Add a Favorites Page
 - Add details pages for additional data types including planets, vehicles, starships, species, and more
 - Link to these additional details pages from the character profiles

## Project Deployment

[Charactergram](character-gram.vercel.app) is deployed using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### More About Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
