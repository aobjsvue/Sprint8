<template>
    <div class="pilot-card">
        <h2>PILOTS</h2>
        <div v-for="(pilot, index) in pilots" :key="index" class="pilot-link">
            <router-link :to="{name: 'people', params: {id: getIdFromUrl(pilot.url) }}">
                <div class="pilot-name">
                    <h4>{{pilot.name}}</h4>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pilots',
        props: ['pilots', 'getIdFromUrl'],
    }
</script>

<style>
    .pilot-card {
        width: fit-content;
    }
    .pilot-card h2 {
        margin: 0 0 1em 0 !important;
    }
    .pilot-link a {
        text-decoration: none;
    }
    .pilot-link h4 {
        color: #aaa;
        font-weight: 400;
    }
    .pilot-link h4:hover {
        color: #fff;
    }
</style>