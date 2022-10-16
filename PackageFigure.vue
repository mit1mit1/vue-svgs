<script setup lang="ts">
const lengthX = 50;
const lengthY = 65;
const minimumX = 35;
const minimumY = 35;
const textX = minimumX + 1.1 * lengthX / 4;
const textY = minimumY + (4 * lengthY) / 5;
</script>
    
<template>
    <line class="bible-cover" :x1="minimumX + 0.1 * lengthX" :y1="minimumY + 0.2 * lengthY" stroke="black"
        :x2="minimumX + 1.05 * lengthX" :y2="minimumY + 0.1 * lengthY" stroke-width="4"></line>
    <line class="bible-cover" :x1="minimumX + 2.1 * lengthX" :y1="minimumY - 1 + 0.23 * lengthY" stroke="black"
        :x2="minimumX + 1.05 * lengthX" :y2="minimumY + 0.1 * lengthY" stroke-width="4"></line>
    <rect class="bible-cover" :x="minimumX + 5" :y="minimumY + 5" stroke="black" :height="lengthY" :width="lengthX"
        rx="2" stroke-width="4" fill="white" transform="skewY(10)"></rect>
    <rect class="bible-cover" :x="minimumX + 1.1*lengthX" transform="skewY(-10)" :y="minimumY - 7 + 0.69*lengthY"
        stroke="black" :height="lengthY" :width="lengthX" rx="2" stroke-width="4" fill="white"></rect>
    <text :x="textX" :y="textY">P</text>
</template>
    