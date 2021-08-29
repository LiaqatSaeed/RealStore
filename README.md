# RealStore

## RealTime Store is a practice React App With Firebase Realtime Database

## New React Navigation Implemented

Navigation Container is implemented in the base of Application. Now the navigation prop is passed in to every screen component.

### Stacks, Tabs & Routing

Stacks and Tabs functions are created. Which you can you to created your Tabs or Stacks Screens. All the routes are defined inside

> routing / routes / Public | Private routes

Inside your stack folder you can created your stacks a generic function is used for creating stack. You have to give a common keys inside your routes for _ Public | Private _ routes. Based on Keys Stacks will be created

## Migration to TypScript

### Basic Migration Typscript (Just Make it Work)

- converted js files to ts
- converted jsx files to tsx
- Allow implicit anys

```bash
noImplicitAny: false
```

for basic configuration for typescript

### Be Explicit

- No implicit anys

```bash
noImplicitAny: true
```

- Common Types
- 3rd Party Library Types (Like Lodash / React/ React Native) @types/\*

## Firebase Authentication with Social Login

- Firbase Configuration iOS
  [] Download GoogleServices-info.plist from firebase and place it in your App Xcode project.s

### Base Auth HOC

- `Firebase auth` as a common property injected to a wrapped component
- common API onLogin method injected to a wrapped component

### Social Logins

- Login With `Facebook`

1. External Configurtions
   - [x] Create app on Facebook Developer console
   - [x] Enable Facebook login on Firebase
   - [x] Add App ID and Secret Keys on Facebook enabling on Firebase

2. Internal Configurations
   - For iOS
    - [x] Add Facebook App Id inside Info.plist
    - [x] Add URL scheme inside info.plist

![Facebook Login Demo Video] https://www.loom.com/share/b1476dfaaf1f4b43a441db162f970feb

- Login With `Google`

1. External Configurtions
   - [x] Enable Google login on Firebase
   - [x] Get Client Id from https://developers.google.com/identity/sign-in/ios/start-integrating#add_a_url_scheme_to_your_project

2. Internal Configurations
   - For iOS
    - [x] Add URL scheme inside info.plist
    - [x] Add External url inside


### FireStore

1. yarn add @react-native-firebase/firestore

# How to add custom Font Family 

1. iOS
 - [x] Create `Assets/Fonts` folder and add all your fonts.
 - [x] Create a file named `react-native.config.js` in root 
 - add this code inside this file
         ```bash
         module.exports = {
         project: {
             ios: {},
             android: {},
         },
         assets: ['./assets/fonts']
         }```
- [x] Run `react-native` link command in the root project path.

# Formik 
- [x] Formik HOC created 
- [x] Configure Yup validation
