<script setup lang="ts">

type BeanieProps = {
  foldX: number;
  foldY: number;
  foldWidth: number;
  foldHeight: number;
  stripeColor: string;
  baseColor: string;
}
const props = defineProps<BeanieProps>();
const destructuredProps = { ...props };

const stripeHeight = destructuredProps.foldHeight / 5;
const foldX = destructuredProps.foldX;
const foldY = destructuredProps.foldY;
const foldWidth = destructuredProps.foldWidth;
const foldHeight = destructuredProps.foldHeight;
const beanieCentreX = destructuredProps.foldX + destructuredProps.foldWidth / 2;
const ellipseCentreY = destructuredProps.foldY + (destructuredProps.foldHeight * 2) / 20;
const ellipseRadiusY = (destructuredProps.foldHeight * 12) / 20;
const ellipseRadiusX = (destructuredProps.foldWidth * 8) / 19;
const stripe1Y = destructuredProps.foldY + stripeHeight;
const stripe2Y = destructuredProps.foldY + stripeHeight * 3;
</script>

<template>
  <rect class="beanie-fold" :x="foldX" :y="foldY" :height="foldHeight" :width="foldWidth" rx="8" :fill="baseColor">
  </rect>
  <ellipse class="beanie-ellipse" :cx="beanieCentreX" :cy="ellipseCentreY" :rx="ellipseRadiusX" :ry="ellipseRadiusY"
    :fill="baseColor"></ellipse>
  <rect class="beanie-stripe" :x="foldX" :y="stripe1Y" :height="stripeHeight" :width="foldWidth" rx="2"
    :fill="stripeColor"></rect>
  <rect class="beanie=stripe" :x="foldX" :y="stripe2Y" :height="stripeHeight" :width="foldWidth" rx="2"
    :fill="stripeColor"></rect>
</template>
