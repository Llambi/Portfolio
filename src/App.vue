<template>
    <v-app id="inspire">
        <v-img
                src="./assets/gijon.jpg"
                height="100%"
                jumbotron
        >
            <home-component/>
        </v-img>
    </v-app>
</template>

<script>

    import HomeComponent from "./components/HomeComponent";

    export default {
        name: 'App',
        components: {HomeComponent},
    }
</script>