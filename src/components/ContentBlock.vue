<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      

      <Filters :data="data" :modelValue="filter" @update:modelValue="$store.commit('update', $event); loaded = false"/>

      <v-col
          cols="12"
          md="4"
      >
      <UsersList :users="users" :loaded="loaded"></UsersList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import UsersList from './UsersList.vue';
  import Filters from './Filters.vue';
  import store from '../stores/store';
  export default {
    name: "ContentBlock",
    data: () => ({
        data:{
          countries: [
              "russia",
              "usa",
          ],
          scores: [
              "> 20",
              "< 10",
              "> 10 < 20",
          ]
        },
        loaded: true,
        filter: store.state,
        users: [
            { header: "List" },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Brunch this weekend?",
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                score: 9,
                country: "russia",
                adress: "Moscow, Noviy Arbat St., 10"
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title: "Summer BBQ <span class=\"grey--text text--lighten-1\">4</span>",
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                score: 9,
                country: "usa",
                adress: "1101 S 6th St, Las Vegas, NV 89104, US"
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Oui oui",
                subtitle: "<span class=\"text--primary\">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
                score: 19,
                country: "usa",
                adress: "1103 S 6th St, Las Vegas, NV 89104, US"
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle: "<span class=\"text--primary\">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
                score: 40,
                country: "russia",
                adress: "Moscow, Noviy Arbat St., 3"
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle: "<span class=\"text--primary\">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                score: 40,
                country: "russia",
                adress: "Moscow, Noviy Arbat St., 12"
            },
        ],
    }),
    watch: {
      loaded(newVal){
        if (newVal===false){
          setTimeout(()=>{
            this.loaded = true
          }, 1000)
        }
      }
    },
    components: { Filters, UsersList },
}
</script>
