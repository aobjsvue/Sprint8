<template>
    <div class="ss-card">
        <h2>VEHICLES</h2>
        <div v-for="(starship, index) in starships" :key="index" class="starship-link">
            <router-link :to="{name: 'starship', params: {id: getIdFromUrl(starship.url) }}">
                <div>
                    <h4>{{starship.name}}</h4>
                </div>
            </router-link>
            <div>
                <div>
                    <p><span>Model: </span>{{starship.model}}</p>
                </div>
                <div>
                    <p><span>Class: </span>{{starship.starship_class}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Starships',
        props: ['starships', 'getIdFromUrl'],
    }
</script>

<style scoped>
    .ss-card {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .ss-card h2 {
        margin: 0 0 1em 0;
    }
    .starship-link {
        width: fit-content;
    }
    .starship-link a {
        text-decoration: none;
    }
    .starship-link h4 {
        color: #aaa;
        font-weight: 400;
    }
    .starship-link h4:hover {
        color: #fff;
    }
</style>