<template>
  <div class="wrapper">
    <v-btn icon @click="onClickPrevious">
      <v-icon large>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-menu v-model="showDatePicker"
            @click="showDatePicker = true">
      <div slot="activator" class="week">{{start}} ~ {{end}}</div>
      <v-date-picker type="month" @input="onPickMonth"/>
    </v-menu>
    <v-btn icon @click="onClickNext">
      <v-icon large>keyboard_arrow_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['value'],
  data() {
    return {
      showDatePicker: false,
      date: '',
      start: moment(moment(this.value).format('YYYY[W]WW')).format('YYYY-MM-DD'),
    };
  },
  computed: {
    end() {
      return moment(this.start).add(7, 'days').format('YYYY-MM-DD');
    },
  },
  methods: {
    setDate(date) {
      this.start = moment(moment(date).format('YYYY[W]WW')).format('YYYY-MM-DD');
    },
    onClickPrevious() {
      this.setDate(moment(this.start).subtract(7, 'days'));
      this.$emit('input', this.start);
    },
    onClickNext() {
      this.setDate(moment(this.start).add(7, 'days'));
      this.$emit('input', this.start);
    },
    onPickMonth(yearMonth) {
      this.setDate(moment(`${yearMonth}-01`));
      this.$emit('input', this.start);
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
    height: 48px;
    display: flex;
    align-items: center;
  }
</style>
