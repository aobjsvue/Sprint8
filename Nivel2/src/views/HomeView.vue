<template>
  <div class="welcome">
    <div class="title">
      <p>THE LATEST</p>
    </div>
    <div class="content">
      <h2>A long time ago in a galaxy far, far away...</h2>
      <h4>Starships of all kinds were piloted across the universe...</h4>
      <p>Finally, we managed to get a model of each of them and gathered together in detail in our database. Our starship's dock is now more complete than ever!</p>
      <p>Come on, take a look!</p>
    </div>
    <router-link to="/starships">
      <button type="button">GET ACCESS TO THE DOCK</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
  .welcome {
    text-align: left;
    max-width: 90%;
    margin: 1.5em auto;
  }
  .title p {
    color: #ddd;
    border-top: 2px solid #3b3b3b;
    border-bottom: 2px solid #3b3b3b;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5em 0 0.5em 1em;
    background-color: rgba(21, 21, 21, 0.4);
  }
  .content {
    background-color: rgba(21, 21, 21, 0.8);
    padding: 1em;
    border-radius: 0.1em;
  }
  .content h2, h4 {
    color: #ddd;
    margin-top: 0;
    text-transform: uppercase;
  }
  .content p {
    color: #aaa;
    margin-bottom: 0;
  }
</style>