<template>
    <div v-if="starship" class="starship-card">
        <div class="card-header">
            <img :src="`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`" @error="$event.target.src='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'" />
            <h2>{{starship.name}}</h2>
        </div>
        <div class="card-left">
            <p><span>Model: </span>{{starship.model}}</p>
            <p><span>Cost in credits: </span>{{starship.cost_in_credits}}</p>
            <p><span>Atmospheric Speed: </span>{{starship.max_atmosphering_speed}}</p>
        </div>
        <div class="card-right">
            <p><span>Manufacturer: </span>{{starship.manufacturer}}</p>
            <p><span>Length: </span>{{starship.length}}m</p>
            <p><span>Crew: </span>{{starship.crew}}</p>
        </div>
    </div>
    <div v-else>
        <h2>Loading starship, hold tight!</h2>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'StarshipCardView',
        props: ['id'],
        computed: {
            ...mapState(['starship']),
        },
        methods: {
            ...mapActions(['fetchStarshipInfo']),
        },
        mounted() {
            this.fetchStarshipInfo(this.id);
        }
    }
</script>

<style>
    .starship-card {
        text-align: left;
        background-color: rgba(21, 21, 21, 0.8);
        border-radius: 0.1em;
        max-width: 70%;
        margin: 1.5em auto;
        display: flex;
        flex-flow: row wrap;
        padding: 1.5em 2em;
    }
    .starship-card h2 {
        color: #ddd;
        margin: 1em 0 0 0;
        font-weight: 400;
        text-transform: uppercase;
    }
    .starship-card p {
        color: #aaa;
        font-weight: 300;
        font-size: 0.9em;
        margin: 1.5em 0;
    }
    .card-header {
        flex: 0 1 100%;
    }
    .card-header img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        border-bottom: 2px solid #9e4f60;
    }
    .card-left {
        flex: 0 1 50%;
    }
    .card-right {
        flex: 0 1 50%;
    }
</style>