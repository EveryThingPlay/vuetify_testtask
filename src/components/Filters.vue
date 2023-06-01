<template>
  <v-col
          cols="12"
          md="4"
      >
        <v-select
            @input="$emit('update:modelValue', currentState)"
            :value="modelValue.country"
            :items="data.countries"
            clearable
            v-model="currentState.country"
            label="Filter by country"
        ></v-select>

        <v-select
            :items="data.scores"
            clearable
            label="Filter by score"
            :value="modelValue.score"
            v-model="currentState.score"
            @input="$emit('update:modelValue', currentState)"
        ></v-select>
      </v-col>
</template>

<script>
export default {
  data: () => ({
    currentState: {
      country: null,
      score: null}
  }),
  props: {
    data: {type: Object, default: ()=> ({
      country: null,
      score: null
    })},
    modelValue: { type: Object, default: ()=>({
      country: null,
      score: null
    })}
  },
  emits:['update:modelValue']
}
</script>