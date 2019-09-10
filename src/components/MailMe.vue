<template>
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
                        cols="12"
                        sm="8"
                        md="4"
                >
                    <v-card class="elevation-24" dark>
                        <v-toolbar
                                color="amber"
                                class="black--text"
                                flat
                        >
                            <v-toolbar-title>
                                Mail me!
                            </v-toolbar-title>
                            <div class="flex-grow-1"></div>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            icon
                                            large
                                            path="/"
                                            target="_blank"
                                            v-on="on"
                                    >
                                        <v-icon color="black">fas fa-caret-left</v-icon>
                                    </v-btn>
                                </template>
                                <span>Regress</span>
                            </v-tooltip>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        label="Email"
                                        name="email"
                                        type="text"
                                ></v-text-field>
                                <v-textarea
                                        label="Message"
                                        autocomplete="email"
                                        name="msg"
                                        no-resize
                                ></v-textarea>
                            </v-form>
                        </v-card-text>
                        <v-layout justify-center>
                            <v-card-actions>
                                <div class="flex-grow-1 "></div>
                                <v-btn class="black--text" color="amber">Send</v-btn>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "mail-me"
    }
</script>

<style scoped>

</style>