<template>
  <div class="mark-info">
    <h2>笔记本</h2>
    <MarkDown />
  </div>
</template>
<script>
import MarkDown from "@/components/MarkDown"
export default {
  components:{MarkDown}
}
</script>
<style lang="scss" scoped>
.mark-info{
  width: 100%;
}
</style>