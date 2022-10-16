<script setup lang="ts">
type BibleProps = {
  minimumX?: number,
  minimumY?: number,
  lengthX?: number,
  lengthY?: number,
  rotation?: number,
}

const props = withDefaults(defineProps<BibleProps>(), {
  minimumX: 35,
  minimumY: 35,
  lengthX: 50,
  lengthY: 65,
  rotate: 0,
});
const destructuredProps = { ...props };
const minimumX = destructuredProps.minimumX;
const minimumY = destructuredProps.minimumY;
const lengthX = destructuredProps.lengthX;
const lengthY = destructuredProps.lengthY;
const centreX = destructuredProps.minimumX + destructuredProps.lengthX / 2;
const centreY = destructuredProps.minimumY + destructuredProps.lengthY / 2;
const textX = destructuredProps.minimumX + destructuredProps.lengthX / 4;
const textY = destructuredProps.minimumY + (3 * destructuredProps.lengthY) / 5;
const rotation = destructuredProps.rotation;
</script>

<template>
  <g :transform="`rotate(${rotation} ${centreX} ${centreY})`">
    <rect class="bible-cover" :x="minimumX + 5" :y="minimumY + 5" stroke="black" :height="lengthY" :width="lengthX"
      rx="15" stroke-width="4" fill="white"></rect>
    <rect class="bible-cover" :x="minimumX" :y="minimumY" stroke="black" :height="lengthY" :width="lengthX" rx="15"
      stroke-width="4" fill="white"></rect>
    <text :x="textX" :y="textY">B</text>
  </g>
</template>
