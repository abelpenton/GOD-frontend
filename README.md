# Game of Drone Frontend

## Summary

Game of Drone is a web version of the famous game `Rock-Papper-Scissor` where two players try to conquer each other. The frontend version was implemented using modern technologies like `ReactJS`, `React-Router`, `TypeScript`, `Babel` and `Webpack`. The main idea in the implementation was to build an architecture based on the ```Presentation``` and ```Container``` components both functional components for the use of `React Hooks`. This game also contain a backend version implemented in `.Net Core` and it can be found [here](https://github.com/abelpenton/GOD-backend.git).

## Setup

```console
>npm install
>npm start
```
## GOD's Architecture
The implementation uses `React Hooks` for each component, mainly `useReducer` and `useState`. The idea of `useReducer` is to have a state management such as `Redux` were you can send actions and modify a `state`. In the `Store` folder you can find the type of `actions` and `reducers` for the game GOD:

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

you can dispatch actions and modify a global state.

Following good programming practices, the `Container-Presentation` architecture can be found in the GOD components,, where the `Container` components have the responsability of connecting to the API and obtaining the backend data and then passing it to the `Presentation` components by accessories to be shown in the UI. The idea is to have a concept separation for each logic, one to obtain data and another to show them.

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


>1- Add new kind of actions in [Action Types](`/src/store/actions/action_types.ts`).

>2- Add the behavior of the new actions [Actions](`/src/store/actions/actions.ts`).

>3- Add the state and the reducer for new feature [Reducer](`/src/store/reducers/`).

>4- Add the `Presentation-Container` components for new feature [Components](`/src/components`).


## To Improve
There is a list of improvements that I would have liked to make:

>1- Use React-Material for a better design.

>2- Build a docker compose for a better setup

>3- Comment the code.
