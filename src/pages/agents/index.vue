<script setup lang="ts">

import { pb } from '@/backend'
import AgentCard from '@/components/AgentCard.vue'
import type { AgentRecord } from '@/types'

const agentListe = await pb.collection('agent').getFullList()
</script>

<template>
  <ul>
    <li v-for="unAgent of agentListe" :v-key="unAgent.id">
      <RouterLink
        :to="{
          name: '/agent/[id]',
          params: {
            id: unAgent.id
          }
        }"
        class="text-pink-500 hover:text-purple-700"
      >
        {{ unAgent.nomAgent }}
      </RouterLink>
    </li>
  </ul>
</template>
