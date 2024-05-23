<script setup lang="ts">
  import type { AgentResponse } from '@/pocketbase-types'
  import ImgPb from './ImgPb.vue'

  const props = defineProps<AgentResponse<any>>()
</script>