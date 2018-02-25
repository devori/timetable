<template>
  <div class="wrapper">
    <v-btn icon @click="onClickPrevious">
      <v-icon large>keyboard_arrow_left</v-icon>
    </v-btn>
    <div class="week">{{startDate}} ~ {{endDate}}</div>
    <v-btn icon @click="onClickNext">
      <v-icon large>keyboard_arrow_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: {
      type: Object,
      required: true,
    },
  },
  computed: {
    week() {
      return moment(this.date).format('YYYY[W]WW');
    },
    startDate() {
      return moment(this.week).format('YYYY-MM-DD');
    },
    endDate() {
      return moment(this.week).add(5, 'days').format('YYYY-MM-DD');
    },
  },
  methods: {
    onClickPrevious() {
      this.$emit('clickPrevious');
    },
    onClickNext() {
      this.$emit('clickNext');
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  .week {
    display: flex;
    align-items: center;
  }
</style>
