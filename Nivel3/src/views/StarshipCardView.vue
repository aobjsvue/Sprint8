<template>
    <div v-if="starship" class="starship-card">
        <div class="card-header">
            <img :src="`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`" @error="$event.target.src='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'" />
            <h2>{{starship.name}}</h2>
        </div>
        <div class="card-left">
            <p><span>Model: </span>{{starship.model}}</p>
            <p><span>Manufacturer: </span>{{starship.manufacturer}}</p>
            <p><span>Cost in credits: </span>{{starship.cost_in_credits}}</p>
            <p><span>Length: </span>{{starship.length}}m</p>
            <p><span>Atmospheric Speed: </span>{{starship.max_atmosphering_speed}}</p>
            <p><span>Crew: </span>{{starship.crew}}</p>
        </div>
        <div class="card-right">
            <p><span>Passengers: </span>{{starship.passengers}}</p>
            <p><span>Cargo capacity: </span>{{starship.cargo_capacity}}</p>
            <p><span>Consumables: </span>{{starship.consumables}}</p>
            <p><span>Hyperdrive rating: </span>{{starship.hyperdrive_rating}}</p>
            <p><span>MGLT: </span>{{starship.MGLT}}</p>
            <p><span>Class: </span>{{starship.starship_class}}</p>
        </div>
        <div v-if="pilots.length" class="pilot-list">
            <Pilots :pilots="pilots" :getIdFromUrl="getIdFromUrl" />
        </div>
    </div>
    <div v-else>
        <h2>Loading starship, hold tight!</h2>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
    import Pilots from '@/components/Pilots.vue';

    export default {
        name: 'StarshipCardView',
        props: ['id', 'getIdFromUrl'],
        components: { Pilots },
        computed: {
            ...mapState(['starship', 'pilots']),
        },
        methods: {
            ...mapActions(['fetchStarshipInfo']),
            ...mapMutations(['emptyPilots']),
        },
        mounted() {
            this.fetchStarshipInfo(this.id);
        },
        unmounted() {
            this.emptyPilots();
        }
    }
</script>

<style>
    .pilot-list {
        flex: 0 1 100%
    }
</style>