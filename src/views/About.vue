<template>
    <v-app id="inspire">
        <v-app-bar
                class="amber accent-4 black--text"
                app
                clipped-left
        >
            <v-toolbar-title class="black--text">
                <router-link to="/" class="toolbar-title toolbar__title">
                    Hugo Pérez Fernández
                </router-link>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                            icon
                            to="/"
                    >
                        <v-icon color="black">fas fa-caret-left</v-icon>
                    </v-btn>
                </template>
                <span>Regress</span>
            </v-tooltip>
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
                    <v-col
                            class="shrink"
                            v-for="(repo,id) in repos"
                            :key="id"
                            sm="4"
                            cols="4"
                    >
                        <github-card-component :repo="repo"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import GithubCardComponent from "../components/GithubCardComponent";

    export default {
        components: {GithubCardComponent},
        props: {
            source: String,
        },
        data: () => ({
            repos: [],
            loading: true
        }),
        created() {
            this.$vuetify.theme.dark = true;
            // const API_TOKEN = '06c4f484b0d40f374b94bc8ab5aacfbf2ffef549';
            const USER = 'Llambi';
            const GIT_API_URL = 'https://api.github.com'
            axios
                .get(GIT_API_URL + "/users/" + USER + "/repos")
                .then((res) => {
                    res.data.forEach((x) => {
                        axios
                            .get(GIT_API_URL + "/repos/" + USER + "/" + x['name'])
                            .then((res) => {
                                let data = res.data;
                                let repo = {
                                    name: data.name,
                                    description: data.description,
                                    html_url: data.html_url,
                                    lenguaje: data.lenguaje === undefined ? "Unknow" : data.lenguaje,
                                    icon: (data.lenguaje === undefined ? "fas fa-question-circle" : "fab fa-" + data.lenguaje).toLowerCase(),
                                    watchers: data.watchers,
                                    created_at: data.created_at.split("T")[0],
                                    pushed_at: data.pushed_at.split("T")[0],
                                    show: false,
                                };
                                this.repos.push(repo)
                            })
                    });
                })
                .then(() => {
                    this.loading = false
                })
        }
    }
</script>

<style>
    .toolbar__title {
        color: black;
        text-decoration: none;
    }

    .toolbar__title:hover {
        color: black;
        text-decoration: none;
    }

    .toolbar__title:visited {
        color: black;
        text-decoration: none;
    }

    .v-progress-linear {
        -moz-transform: scale(1, -1);
        -webkit-transform: scale(1, -1);
        -o-transform: scale(1, -1);
        -ms-transform: scale(1, -1);
        transform: scale(1, -1);
    }

</style>