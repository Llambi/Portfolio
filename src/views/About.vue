<template>
    <v-app id="inspire">
        <v-app-bar
                app
                clipped-left
        >
            <v-toolbar-title>Hugo Pérez Fernández</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="shrink">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            source: String,
        },
        data: () => ({
          repos:{}
        }),
        created() {
            this.$vuetify.theme.dark = true;
            // const API_TOKEN = '06c4f484b0d40f374b94bc8ab5aacfbf2ffef549';
            const USER = 'Llambi';
            const GIT_API_URL = 'https://api.github.com'
            axios
                .get(GIT_API_URL + "/users/" + USER + "/repos")
                .then((res) => {
                    // eslint-disable-next-line no-console
                    res.data.forEach((x) => {
                        axios
                            .get(GIT_API_URL + "/repos/" + USER + "/" + x['name'])
                            .then()
                    })
                })
        }
    }
</script>