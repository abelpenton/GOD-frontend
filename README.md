# Game of Drone Frontend

## Summary

Game of Drone is a web version of the famous game `Rock-Papper-Scissor` where two players trying to conquer each other. The frontend version was implemented using the modern technologies: `ReactJS`, `React-Router`, `TypeScript`, `Babel` and `Webpack`. The main idea in the implementation was build an architecture based in ```Presentation``` and ```Container``` components both of them functional components for the use of `React Hooks`. This game also contain a  backend version implemented in `.Net Core` and you can find it [here](https://github.com/abelpenton/GOD-backend.git).

## Setup

```console
>npm install
>npm start
```
## GOD Architecture
The implementation was using `React Hooks` in each component, mainly `useReducer` and `useState` hooks. The idea of `useReducer` is have a state managment like `Redux` where we can `dispatch` actions and modify a `state`. Under `Store` folder we can find the type of `actions` and the `reducers` for GOD game:

```
|store
|_____actions
|_______actions.ts
|_______actions_types.ts
|_____reducers
|_______game_reducer.ts
|_______round_reducer.ts
```
Then with `useReducer` hook:
```javascript
const [state, dispatch] = useReducer(reducer.reducer, reducer.initialState);

dispatch(ACTION_TYPE.action(new_state));
```

we can dispatch actions and modify a global state.

Looking for a good practice we can found the `Container-Presentation` architecture in the GOD components, where the `Container` components have the responsability of connect with the api and get the backend data then pass it to `Presentation` components by `props` to show in UI. The idea is have separation of concept for each logic, one to get data and other to show it.

```
|components
|___________game
|_____________Presentation
|_______________GamePresentation.tsx
|_______________EndGame.tsx
|_____________Container
|_______________GameContainer.tsx
|___________round
|_____________Presentation
|_______________RoundPresentation.tsx
|_______________Rounds.tsx
|_____________Container
|_______________RoundContainer.tsx
```

## New Features
For new feature we need keep the architecture so you have to follow the next steps:


>1- Add new kind of actions in [Action Types](`https://github.com/abelpenton/GOD-frontend/blob/master/src/store/actions/action_types.ts`).

>2- Add the behavior of the new actions [Actions](`https://github.com/abelpenton/GOD-frontend/blob/master/src/store/actions/actions.ts`).

>3- Add the state and the reducer for new feature [Reducer](`https://github.com/abelpenton/GOD-frontend/tree/master/src/store/reducers`).

>4- Add the `Presentation-Container` components for new feature [Components](`https://github.com/abelpenton/GOD-frontend/tree/master/src/components`).


## To Improve
There is a list of thing I would have liked to do:

>1- Use React-Material for a better desing.

>2- Comment the code.
