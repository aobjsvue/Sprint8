<template>
    <div class="films-card">
        <h2>APPEARANCES</h2>
        <div v-for="(film, index) in films" :key="index">
            <div class="films-header">
                <h4>{{film.title}}</h4>
            </div>
            <div class="films-content">
                <div class="films-left">
                    <p><span>Episode: </span>{{film.episode_id}}</p>
                    <p><span>Director: </span>{{film.director}}</p>
                    <p><span>Producer: </span>{{film.producer}}</p>
                    <p><span>Release date: </span>{{film.release_date}}</p>
                </div>
                <div class="films-right">
                    <p><span>Opening crawl: </span>{{film.opening_crawl}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Films',
        props: ['films'],
    }
</script>

<style>
    .films-card {
        display: flex;
        flex-direction: column;
    }
    .films-card h2 {
        margin: 0 0 1em 0 !important;
    }
    .films-header h4 {
        margin: 0;
        color: #fff;
        font-weight: 400;
    }
    .films-content {
        display: flex;
    }
    .films-left, .films-right {
        flex: 0 1 50%;
    }
    @media (min-width: 280px) and (max-width: 767px) {
        .films-content {
            flex-wrap: wrap;
        }
        .films-left, .films-right {
            flex: 0 1 100%;
        }
        .films-right p {
            margin-top: 0;
        }
    }
</style>