# the-shoppies

Movie nomination website created as part of the application process for the Shopify Front-End Developer Internship.

# [🔗 View Deployed Version](http://theshoppies.jabezsanjay.com/)

## Table Of Contents

- [The Challenge](#The-Challenge)
- [Tech Used](#Tech-Used)
- [Feature Highlights](#Feature-Highlights)
- [Future Additions](#Future-Additions)

---

## The Challenge

Create a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

### Extras

Improvements to design and functionality are allowed to be added in order to highlight passion and skills.

[Back To Top](#Table-Of-Contents)

#### Key Features

- Ensure user friendly error handling for search
- Create a custom and dynamic responsive layout
- Have the nomination list persist with Local Storage
- Use a Loader/Spinner when querying the API for search or nominating
- A percentage component to show percentage of allowed nominated movies.

![Reference Image](./readme-assets/the-shoppies.png)

---

## Tech Used

- React.js (Hooks)
- Axios
- OMDB API
- Dot ENV
- Context API
- Styled Components
- Flexbox
- Local Storage
- Ant Design

[Back To Top](#Table-Of-Contents)

## Future Additions

- Bug: Need to add optimize the api calls using CancelToken, since it hits api on each and ever input change.
- Improvement : Add react-router and have separate movie page with complete information for nominated movies.

[Back To Top](#Table-Of-Contents)
