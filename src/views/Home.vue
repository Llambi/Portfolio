<template>
    <v-app id="inspire">
        <v-img
                src="../assets/gijon.jpg"
                height="100%"
                jumbotron
        >
            <mail-me/>
<!--            <home-card-component/>-->
        </v-img>
    </v-app>
</template>

<script>

   import HomeCardComponent from "../components/HomeCardComponent";
   import MailMe from "../components/MailMe";

    export default {
        name: 'App',
        components: {HomeCardComponent, MailMe},
    }
</script>

