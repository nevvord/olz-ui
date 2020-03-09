<template>
  <div>
    <h1>
      {{ $t('hello') }}
    </h1>
    <b-btn variant="success" @click="show">
      test
    </b-btn>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods:{
    show() {
      this.$notify({
        group: 'foo',
        title: "Success",
        text: "worked!",
        type: 'success'
      })
    }
  }
}
</script>
<style lang="scss">
  $lol: rgb(255, 0, 0);
  .bbttnn {
    background: $lol;
  }

</style>
