<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
                :elevation="hover ? 24 : 2"
                class="mx-auto"
                max-width="350"
        >
            <v-toolbar
                    color="amber accent-4"
                    class="black--text"
                    flat
            >
                <v-toolbar-title>
                    <div class="font-weight-bold">{{repo.name}}</div>
                    <span class="black--text subtitle-1">Created: {{repo.created_at}}   Updated: {{repo.pushed_at}}</span>
                </v-toolbar-title>
            </v-toolbar>
            <v-card-actions class="d-flex justify-space-between">
                <v-flex class="d-flex justify-start">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    icon
                                    large
                                    :href=repo.html_url
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon>fab fa-github</v-icon>
                            </v-btn>
                        </template>
                        <span>{{repo.name}}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon>{{repo.icon}}</v-icon>
                            </v-btn>
                        </template>
                        <span>{{repo.lenguaje}}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon>fas fa-glasses</v-icon>
                            </v-btn>
                        </template>
                        <span>{{repo.watchers}}</span>
                    </v-tooltip>
                </v-flex>
                <v-btn
                        color="amber accent-4"
                        icon
                        @click="repo.show = !repo.show"
                >
                    <v-icon>{{ repo.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="repo.show">
                    <v-divider></v-divider>
                    <v-subheader
                            class="white--text"
                    >
                        Description:
                    </v-subheader>
                    <v-card-text>
                        {{repo.description}}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-hover>
</template>
<script>
    export default {
        name: 'github-card-component',
        props: {
            repo: {}
        }
    }
</script>
