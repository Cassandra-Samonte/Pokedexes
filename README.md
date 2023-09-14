# Nintendo Commission: Building Pokedexes
<img src="https://i.imgur.com/9VqkwNV.jpg" width="100%">

## Background
It is the early days of Pokemon, and Nintendo wants to build a website featuring various pokedexes from different regions! They turned to you to build out their site, and have given you access to their [pokemon data](https://pokeapi.co/). Similar to what we did with MovieMatch, you'll be creating an Express application that connects to a 3rd Party API. 

**NOTE:** You will not need to create a `.env` file since the PokeAPI does not require you to use an API key.


## Part 1: The Kanto Pokedex
To start out with, build out a *gallery* and a *details* page that will display data about pokemon in the Kanto Pokedex.

### The Gallery
- Nintendo wants the home page of the app to display all the Pokemon in the Kanto Pokedex, found at [this endpoint](https://pokeapi.co/api/v2/pokedex/2/).
- Nintendo wants the gallery to be comprised of cards that display the Pokemon's picture, name, and type.


### Pokemon Details
- When a Pokemon "card" is clicked on, the user should see a page that displays everything you see on the Pokemon card and more advanced details about the Pokemon such as:
    - The number of games it appears in
    - It's abilities
    - Base HP & Base Attack
    - Another data point of your choosing!
- The details page should include a nav bar with a link back to the gallery


### Hints
<details>
<summary>How to get all the Pokemon URLs for Kanto:</summary>
In the below image you'll notice that each Pokemon is found in the <code>pokemon_entries</code> array. Each Pokemon is represented as an object that contains and entry number and info about the Pokemon species. You can slightly modify the <code>url</code> value of each Pokemon species to get it's expansive details page!

<br/>
<img src="https://i.imgur.com/IAxbUe3.png">
<br/>

Consider creating a loop that iterates over each object in the <code>pokemon_entries</code> array and does the following:
<ul>
<li>Modifies the URL so it changes from something like <code>https://pokeapi.co/api/v2/pokemon-species/ditto</code> to <code>https://pokeapi.co/api/v2/pokemon/ditto</code></li>
<li>Use <code>fetch</code> or <code>axios</code> to send an AJAX request to the newly modified endpoint to get info about each Pokemon!
</ul>
</details>


<details>
<summary>How to get the Pokemon's picture:</summary>
There's several photos you can use, all nested in the <code>sprites</code> object on each Pokemon's detail page. A possible photo you could use would be found using this expression:

```js
res.sprites.other["official-artwork"].front_default
// Where res is the response you get from sending an AJAX request to a Pokemon's endpoint
```
</details>


## Part 2: Make the Gallery Dynamic
Now that you've built out a functioning gallery and details page, it's time to make your gallery more dynamic! Instead of just viewing information about pokemon in the Kanto region, your gallery will be able to display cards for pokemon in whatever region the user specifies. Here's how this will work:
- Update the URL pattern for the gallery. The URL should now look like this:
    ```
    '/gallery/:pokedexId'
    ```
- Using the `pokedexId` URL parameter, send an axios request in your route to the PokeAPI to get data about the respective Pokedex. 
    For example, if the user navigates to `/gallery/4` on your site, your route will send an axios request to:
    ```
    https://pokeapi.co/api/v2/pokedex/4
    ```
- Pass the data you get back from your axios request into the EJS file for your gallery. Now, whenever the `pokedexId` in your URL changes you'll see new pokemon data being rendered in your gallery!
- Make a new home page for your site that displays a list of all the regions found at [this endpoint](https://pokeapi.co/api/v2/pokedex?offset=0&limit=32). When a user clicks on a region in your list, navigate them to the gallery page for that respective region. For example, if a user clicks on `galar` in your list of regions, navigate the user to the URL `/gallery/27`.


## Bonus
- Include CSS animations or transitions to make the user experience more engaging. Think about hover effects or atmospheric animations.
- Create a "404 Not Found" page for when a user tries to access a URL that doesn't exist.
