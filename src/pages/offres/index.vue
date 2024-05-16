<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import type { MaisonRecord } from '@/types'

const maisonsListe=await pb.collection('maison').getFullList()
</script>

<template>
    <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-pink-500 hover:text-purple-700"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
  
</template>
