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
                        <v-img
                                src="../assets/me.jpg"
                                class="white--text"
                        >
                        </v-img>
                        <v-toolbar
                                color="amber"
                                class="black--text"
                                flat
                        >
                            <v-toolbar-title>
                                Hugo Pérez Fernandez
                            </v-toolbar-title>
                            <div class="flex-grow-1"></div>

                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            icon
                                            large
                                            href="https://github.com/Llambi"
                                            target="_blank"
                                            v-on="on"
                                    >
                                        <v-icon color="black">fab fa-github</v-icon>
                                    </v-btn>
                                </template>
                                <span>Github</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            icon
                                            large
                                            href="https://linkedin.com/in/hugo-perez-fernandez"
                                            target="_blank"
                                            v-on="on"
                                    >
                                        <v-icon color="black">fab fa-linkedin</v-icon>
                                    </v-btn>
                                </template>
                                <span>LinkedIn</span>
                            </v-tooltip>
                        </v-toolbar>
                        <v-card-text>
                            <p>
                                Estudiante de Ingeniería Informática del Software en la Universidad de Oviedo,
                                Asturias.
                            </p>
                            <p>
                                Desde pequeño he estado interesado por la informática y todo el mundo que le rodea,
                                siempre dispuesto a aprender nuevas tecnologías y ponerme nuevos retos que llevar a
                                cabo con un equipo del que poder aprender y al que poder aportar mis conocimientos.
                            </p>
                        </v-card-text>
                        <v-layout justify-center>
                            <v-card-actions>
                                <div class="flex-grow-1 "></div>
                                <v-btn class="black--text" color="amber">About me</v-btn>
                                <v-btn class="black--text" color="amber">Contact me</v-btn>
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
        name: 'home-componen'
    }
</script>