<script setup lang="ts">
import Beanie from "./BeanieFigure.vue";
import Man from "./ManFigure.vue";
import { availableLimbPositions } from "../constants/limbPositions";
import type { LimbPositions } from "../constants/limbPositions";

type BeanieManProps = {
  minimumX?: number;
  minimumY?: number;
  lengthX?: number;
  lengthY?: number;
  limbPositions?: LimbPositions;
  beanieStripeColor: string;
  beanieBaseColor: string;
}

const props = withDefaults(defineProps<BeanieManProps>(), {
  minimumX: 35,
  minimumY: 35,
  lengthX: 100,
  lengthY: 400,
  limbPositions: () => availableLimbPositions.handsDown,
  beanieStripeColor: "black",
  beanieBaseColor: "yellow",
});

const destructuredProps = { ...props };
const headY = destructuredProps.minimumY + destructuredProps.lengthY / 5;
const beanieFoldHeight = destructuredProps.lengthY / 15;
const beanieFoldY = headY;
const beanieFoldX = destructuredProps.minimumX + destructuredProps.lengthX / 40;
const beanieFoldWidth = (destructuredProps.lengthX / 40) * 38;
const beanieColor = destructuredProps.beanieBaseColor;
const beanieStripeColor = destructuredProps.beanieStripeColor;
</script>

<template>
  <Man :minimumY="headY" :minimumX="minimumX" :lengthX="lengthX" :lengthY="lengthY" :limbPositions="limbPositions" />
  <Beanie :foldX="beanieFoldX" :foldY="beanieFoldY" :foldWidth="beanieFoldWidth" :foldHeight="beanieFoldHeight"
    :stripeColor="beanieStripeColor" :baseColor="beanieColor" />
</template>
