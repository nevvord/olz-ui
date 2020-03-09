<template>
  <div>
    <div class="site">
      <Header />
      <div class="content">
        <nuxt />
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  }
  
}
</script>

<style lang="scss">
.site{
  display: grid;
  height: 100vh;
  grid-template: auto 1fr / auto 1fr;

  div:nth-child(1){
    grid-column: 1 / -1;
  }
}

.content {
  width: 100%;
  overflow-y: auto;
  overflow-x: none;
  padding: 15px;

  
}

.content::-webkit-scrollbar {
  width: 4px;
}

.content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.507);
}

.content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.637);
  outline: 1px solid rgb(0, 0, 0);
}
</style>
