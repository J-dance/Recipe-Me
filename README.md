# Recipe-Me

# to do:

1. add splash screen and icon for app **DONE**
2. build out pages
  - login **DONE**
  - sign up **DONE**
  - home
  - add recipe
  - profile

### Errors:

- Sign up page, middle pwd input caused page jump onPress

-----------------------------------------------------------

This app was built using the Expo command line tool. Run `expo init <project-name>`

React Native app with TypeScript utilising Expo SDK features with React Native Navigation.

## Navigation

A bottom tab navigation is used for the main routining of the app.

There are three main sections:

1. Home: View and search recipes
2. Add recipe: Add new recipes to the app
3. Profile: Edit profile information

An initial stack navigation is used to handle the authentication flow.

Three pages exist: 

1. Landing page
2. Login page
3. Sign up page

## React Hook Forms 

Hook forms are used to implement validation and data capture from the user.

The native `Controller` component is used to render the `TextInput`.