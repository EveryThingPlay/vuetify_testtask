<template>
  <v-card max-width="450" class="mx-auto">
      <v-expand-transition>
          <div v-if="!loaded" style="width: 100%;display: flex;align-items: center;align-content: center;flex-direction: column; padding: 2%">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
          <v-list three-line v-if="loaded">
            <template v-for="(item, index) in users">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
              ></v-subheader>

              <v-divider
                  v-else-if="item.divider && check(users[index-1]) && check(users[index+1])"
                  :key="index"
                  :inset="item.inset"
              ></v-divider>

              <v-list-item
                  v-if="check(item) && !item.divider && !item.header"
                  :key="item.title"
              >
                <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-avatar v-if="check(item)">
                    <v-img :src="item.avatar" v-bind="attrs" v-on="on"></v-img>
                  </v-list-item-avatar>
                </template>
                {{ item.adress }}
                </v-tooltip>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
      </v-expand-transition>
  </v-card>
</template>

<script>
import store from '../stores/store'
export default {
  props: {
    users: {type: Array, required:true},
    loaded: {type: Boolean}
  },
  data: ()=>({
    filter: store.state,
  }),
  methods: {
      check(el) {
          switch(this.filter.score){
            case '< 10':
              return this.filter.country? el.country===this.filter.country&&el.score<10 : el.score<10
            case '> 20':
              return this.filter.country? el.country===this.filter.country&&el.score>20 : el.score>20
            case '> 10 < 20':
              return this.filter.country? el.country===this.filter.country&&el.score>10&&el.score<20 : el.score>10&&el.score<20
            default:
              return this.filter.country? el.country===this.filter.country : true
          }
      },
  }
}
</script>