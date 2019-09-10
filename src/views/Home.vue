<template>
    <v-app id="inspire">
        <v-img
                src="../assets/gijon.jpg"
                height="100%"
                jumbotron
        >
            <router-view/>
        </v-img>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

    }
</script>

