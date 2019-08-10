<template>
    <div class="login d-flex align-items.center">
        <div class="left">
            <router-link to="/admin" v-if="user && admins.indexOf(user.email) > -1">
                <i class="fa fa-cog"></i> Admin
            </router-link>
        </div>

        <div class="right ml-auto">
            <a v-if="!user" @click="signIn">
                <i class="fa fa-sign-in-alt fa-lg"></i> LogIn
            </a>
            <a v-if="user" @click="signOut" :title="user.displayName">
                <i class="fa fa-sign-out-alt fa-lg"></i> Logout
            </a>
        </div>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";

    export default {
        data () {
            return {
                admins: ['asper.tw@gmail.com'], // TODO
                user: null,
            };
        },

        created () {
            firebase.auth().onAuthStateChanged(user => {
                this.user = user;
            });
        },

        methods: {
            signIn () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(result => {
                    this.user = result.user;
                }).catch(function(error) {
                    alert('Login error: ' + error.message);
                });
            },
            signOut () {
                firebase.auth().signOut();
            },
        }
    }
</script>
