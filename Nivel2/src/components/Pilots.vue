<template>
    <div class="pilot-card">
        <h2>PILOTS</h2>
        <div v-for="(pilot, index) in pilots" :key="index">
            <div class="pilot-header">
                <h4>{{pilot.name}}</h4>
            </div>
            <div class="pilot-content">
                <div class="pilot-left">
                    <p><span>Height: </span>{{pilot.height}}cm</p>
                    <p><span>Weight: </span>{{pilot.mass}}kg</p>
                    <p><span>Hair color: </span>{{pilot.hair_color}}</p>
                </div>
                <div class="pilot-right">
                    <p><span>Eye color: </span>{{pilot.eye_color}}</p>
                    <p><span>Birth Year: </span>{{pilot.birth_year}}</p>
                    <p><span>Gender: </span>{{pilot.gender}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pilots',
        props: ['pilots'],
    }
</script>

<style>
    .pilot-card {
        display: flex;
        flex-direction: column;
    }
    .pilot-card h2 {
        margin: 0 0 1em 0 !important;
    }
    .pilot-header h4 {
        margin: 0;
        color: #fff;
        font-weight: 400;
    }
    .pilot-content {
        display: flex;
    }
    .pilot-left, .pilot-right {
        flex: 0 1 50%;
    }
</style>