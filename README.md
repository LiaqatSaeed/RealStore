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
