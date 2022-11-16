<template>
    <div v-if="character" class="starship-card">
        <div class="card-header">
            <h2>{{character.name}}</h2>
        </div>
        <div class="card-left">
            <p><span>Height: </span>{{character.height}}cm</p>
            <p><span>Weight: </span>{{character.mass}}kg</p>
            <p><span>Hair color: </span>{{character.hair_color}}</p>
        </div>
        <div class="card-right">
            <p><span>Eye color: </span>{{character.eye_color}}</p>
            <p><span>Birth Year: </span>{{character.birth_year}}</p>
            <p><span>Gender: </span>{{character.gender}}</p>
        </div>
        <div v-if="films.length" class="films-list">
            <Films :films="films" />
        </div>
        <div v-if="starships.length" class="ss-list">
            <Starships :starships="starships" :getIdFromUrl="getIdFromUrl" />
        </div>
    </div>
    <div v-else>
        <h2>Loading character, hold tight!</h2>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
    import Films from '@/components/Films.vue';
    import Starships from '@/components/Starships.vue';

    export default {
        name: 'CharacterCardView',
        props: ['id', 'getIdFromUrl'],
        components: {Films, Starships},
        computed: {
            ...mapState(['character', 'films', 'starships']),
        },
        methods: {
            ...mapActions(['fetchCharacterInfo']),
            ...mapMutations(['emptyFilmsStarships'])
        },
        mounted() {
            this.fetchCharacterInfo(this.id);
        },
        unmounted() {
            this.emptyFilmsStarships();
        }
    }
</script>

<style>
    .films-list, .ss-list {
        flex: 0 1 100%
    }
</style>