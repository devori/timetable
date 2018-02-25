<template>
  <v-container>
    <v-card>
      <v-card-text class="text-lg-center">
        <week-picker v-model="startDate"/>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'moment';
import WeekPicker from './WeekPicker';

export default {
  components: {
    WeekPicker,
  },
  data() {
    return {
      startDate: moment().format('YYYY-MM-DD'),
    };
  },
  computed: {
  },
  methods: {
    onClickPrevious() {
      this.date = moment(this.date).subtract(7, 'days');
    },
    onClickNext() {
      this.date = moment(this.date).add(7, 'days');
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
  }
</style>
