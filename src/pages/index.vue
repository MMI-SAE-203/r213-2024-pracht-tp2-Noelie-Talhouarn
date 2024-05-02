<script setup lang="ts">
//
const maisonsListe: {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    img: string;
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number; 
    surface: number;
    updated: string; 
}[]
    = [
{
"adresse": "75 Rue d'Amsterdam, 75008 Paris",
"collectionId": "bs5aqg8017ouiou",
"collectionName": "maison",
"created": "2024-04-12 12:22:59.859Z",
"favori": true,
"id": "yoz4hn88ylmhxai",
"img": "maison_de_camapgne_nO8UjpOo8K.webp",
"nbChambres": 4,
"nbSdb": 2,
"nomMaison": "maison de campagne",
"prix": 300000,
"surface": 250,
"updated": "2024-04-12 12:25:59.024Z"
},
{
"adresse": "789 Avenue des Lumières, Paris",
"collectionId": "bs5aqg8017ouiou",
"collectionName": "maison",
"created": "2024-04-12 12:27:26.172Z",
"favori": true,
"id": "qi24f4hv3yjrpp4",
"img": "maison_moderne_en_ville_gYYxGrMPra.jpg",
"nbChambres": 2,
"nbSdb": 1,
"nomMaison": "maison moderne en ville",
"prix": 500000,
"surface": 120.5,
"updated": "2024-04-12 12:36:08.731Z"
},
{
"adresse": "222 Chemin des Sommets, Prémanon",
"collectionId": "bs5aqg8017ouiou",
"collectionName": "maison",
"created": "2024-04-12 12:29:17.114Z",
"favori": true,
"id": "iy4ichoi0dp5m37",
"img": "chalet_de_montagne_1ARHVAMZOJ.jpg",
"nbChambres": 5,
"nbSdb": 2,
"nomMaison": "chalet de montage",
"prix": 800000,
"surface": 300,
"updated": "2024-04-12 12:35:58.036Z"
},
{
"adresse": "1 Chemin de la Plage, Saint-tropez",
"collectionId": "bs5aqg8017ouiou",
"collectionName": "maison",
"created": "2024-04-12 12:31:29.622Z",
"favori": true,
"id": "0rox19sn4xwgckk",
"img": "villa_au_bord_de_la_mer_octAc9qaks.jpg",
"nbChambres": 6,
"nbSdb": 5,
"nomMaison": "villa au bord de la mer",
"prix": 2500000,
"surface": 500,
"updated": "2024-04-12 12:35:44.455Z"
},
{
"adresse": "7 Rue du Centre, Paris",
"collectionId": "bs5aqg8017ouiou",
"collectionName": "maison",
"created": "2024-04-12 12:35:20.960Z",
"favori": true,
"id": "a16e2kc7zmtv92h",
"img": "appar_en_ville_Od0XawKFEo.jpg",
"nbChambres": 1,
"nbSdb": 1,
"nomMaison": "appartement en centre ville",
"prix": 150000,
"surface": 90,
"updated": "2024-04-12 12:35:20.960Z"
}
    
]


</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>

