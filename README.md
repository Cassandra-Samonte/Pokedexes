# Nintendo Commission: Building Pokedexes
<img src="https://i.imgur.com/9VqkwNV.jpg" width="100%">

## Background
It is the early days of Pokemon, and Nintendo wants to build a website featuring various pokedexes from different regions! They turned to you to build out their site, and have given you access to their [pokemon data](https://pokeapi.co/). Similar to what we did with MovieMatch, you'll be creating an Express application that connects to a 3rd Party API. 

**NOTE:** You will not need to create a `.env` file since the PokeAPI does not require you to use an API key.


## MVP: The Kanto Pokedex
To start out with, build out a *gallery* and a *details* page that will display data about pokemon in the Kanto Pokedex.


### The Gallery
- Nintendo wants the home page of the app to display all the pokemon in the Kanto Pokedex, found at [this endpoint](https://pokeapi.co/api/v2/pokedex/2/).
- Nintendo wants the gallery to be comprised of cards that display the pokemon's picture, name, and type.


### Pokemon Details
- When a pokemon's "card" is clicked on, the user should see a page that displays everything you see on the Pokemon card and more advanced details about the Pokemon such as:
    - The number of games it appears in
    - It's abilities
    - Base HP & Base Attack
    - Another data point of your choosing!
- The details page should include a nav bar with a link back to the gallery


### Hints
<details>
<summary>How to get all the pokemon URLs for Kanto:</summary>
In the below image you'll notice that each pokemon is found in the <code>pokemon_entries</code> array. Each pokemon is represented as an object that contains and entry number and info about the pokemon species. You can slightly modify the <code>url</code> value of each pokemon species to get it's expansive details page!

<br/>
<img src="https://i.imgur.com/IAxbUe3.png">
<br/>

Consider creating a loop that iterates over each object in the <code>pokemon_entries</code> array and does the following:
<ul>
<li>Modifies the URL so it changes from something like <code>https://pokeapi.co/api/v2/pokemon-species/ditto</code> to <code>https://pokeapi.co/api/v2/pokemon/ditto</code></li>
<li>Use <code>fetch</code> or <code>axios</code> to send an AJAX request to the newly modified endpoint to get info about each pokemon!
</ul>
</details>


<details>
<summary>How to get the pokemon's picture:</summary>
There's several photos you can use, all nested in the <code>sprites</code> object on each pokemon's detail page. A possible photo you could use would be found using this expression:

```js
res.data.sprites.other["official-artwork"].front_default
// Where res.data is the respone data you get from sending an axios request to a pokemon's endpoint
```
</details>


## Bonus/Stretch Goal: Make the Gallery Dynamic
Now that you've built out a functioning gallery and details page, it's time to make your gallery more dynamic! Instead of just viewing information about pokemon in the Kanto region, your gallery will be able to display cards for pokemon in whatever region the user specifies. Here's how this will work:
1. Update the URL pattern for the gallery. The URL should now look like this:
    ```
    '/gallery/:pokedexId'
    ```
1. Using the `pokedexId` URL parameter, send an axios request in your route to the PokeAPI to get data about the respective Pokedex. 
    
    For example, if the user navigates to `/gallery/4` on your site, your route will send an axios request to:
    ```
    https://pokeapi.co/api/v2/pokedex/4
    ```
1. Pass the data you get back from your axios request into the EJS file for your gallery. Now, whenever the `pokedexId` in your URL changes you'll see new pokemon data being rendered in your gallery!
1. Make a new home page for your site that displays a list of all the regions found at [this endpoint](https://pokeapi.co/api/v2/pokedex?offset=0&limit=32). When a user clicks on a region in your list, navigate the user to that region's gallery page. 
    
    For example, if a user clicks on `galar` in your list of regions, navigate the user to the URL `/gallery/27`. Your route would then send an axios request to this API endpoint:
    ```
    https://pokeapi.co/api/v2/pokedex/27/
    ```
    The data your axios request returns would then be passed into the *gallery* EJS file and your gallery would now render pokemon cards for each pokemon in the Galar region.
