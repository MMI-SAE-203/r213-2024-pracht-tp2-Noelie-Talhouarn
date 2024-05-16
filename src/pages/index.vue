<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import type { MaisonRecord } from '@/types'

const maisonsListe=await pb.collection('maison').getFullList({filter: 'favori=true'})
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>  
  <!-- <MaisonCard v-bind="maisonsListe[1]"/> -->
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="maison.id"/>
</template>
