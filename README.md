# PokeTeams

## Routes

```javascript
//Usuarios
'/users'
//Teams
'/team'
//Autenticacion
'/auth/signin'
```
### Users

```javascript
const URL_BASE = '/users'

GET '/users'
GET '/users/:id'
POST '/users'
PUT '/users/:id'
DELETE '/users/:id'

```
### Teams -> Pokemons

```javascript

const URL_BASE = '/team'

GET '/team'
POST '/team'
POST '/team/pokemons'
PUT '/team/pokemons/:id'
DELETE '/team/pokemons/:id'

