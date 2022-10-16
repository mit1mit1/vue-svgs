<script setup lang="ts">
import { withDefaults } from "vue";

type CalligraphyLineProps = {
   x1: number,
   y1: number,
   length: number,
   rotation: number,
}

const getLineEnd = (
   x1: number,
   y1: number,
   lineXPercent: number,
   lineYUp: boolean,
   lineLength: number
) => {
   const x2 = x1 + lineXPercent * lineLength;
   const y2 =
      y1 +
      Math.sqrt(1 - lineXPercent * lineXPercent) *
      lineLength *
      (lineYUp ? -1 : 1);
   return [x2, y2];
};

const props = withDefaults(defineProps<CalligraphyLineProps>(), {
   x1: 35,
   y1: 35,
   length: 100,
   rotation: 0,
});
const pathDefaultLength = 124;
const yScale = props.length / pathDefaultLength;

</script>

<template>
   <g :transform="`rotate(${rotation}, ${x1}, ${y1} )`">
      <g :transform="`rotate(2, ${x1}, ${y1} )`">
         <g :transform="`scale(1, ${yScale})`">
            <path style="fill:#000000;stroke:#000000;stroke-width:1.165;stroke-linejoin:round" id="path787"
               :d="`m ${x1},${y1 / yScale} c 0.183923,8.028258 0.195977,16.059476 0.321017,24.089106 0.06802,2.386793 0.120097,4.774094 0.204054,7.160379 0.32031,9.103812 0.43048,9.796032 0.878007,19.391452 0.547249,11.73352 1.005449,23.46893 1.412169,35.20802 0.5209,13.71074 0.56926,27.43186 0.50358,41.15008 0,0 2.72179,1.38388 2.72179,1.38388 v 0 c -0.30033,-13.79759 -0.58168,-27.5957 -0.9641,-41.39134 -0.6677,-20.47218 -1.63343,-40.93832 -1.84517,-61.422217 0.01,-7.934476 0.0446,-15.871523 0.23373,-23.803816 0,0 -3.465077,-1.765544 -3.465077,-1.765544 z`" />
         </g>
      </g>
   </g>
</template>