<template>
  <div
    class="w-full p-5 bg-primary-light flex flex-col items-start border border-primary-dark shadow-sm relative"
    style="border-radius: 2rem"
  >
    <div class="absolute right-0 pr-5 flex flex-row text-white">
      {{ coins }}
      <IconCoin class="ml-1 text-secondary" />
    </div>
    <ol class="stepper">
      <li class="step" :class="{ 'text-secondary': step > 0 }">
        <span :class="[step > 0 ? 'border-secondary' : 'border-white']">1</span>
        Invertir
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li class="step" :class="{ 'text-secondary': step > 1 }">
        <span :class="[step > 1 ? 'border-secondary' : 'border-white']">2</span>
        Conquistar
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li class="step" :class="{ 'text-secondary': step > 2 }">
        <span :class="[step > 2 ? 'border-secondary' : 'border-white']">3</span>
        Mover tropas
      </li>
    </ol>
    <div class="actions" v-show="step > 0">
      <ButtonDark
        v-show="step == 1"
        @click="$emit('trigger', 'add-factories')"
        :class="{ 'animate-pulse': action == 'add-factories' }"
        >Añadir fábricas</ButtonDark
      >
      <ButtonDark
        v-show="step == 1"
        @click="$emit('trigger', 'add-troops')"
        :class="{ 'animate-pulse': action == 'add-troops' }"
        >Añadir tropas</ButtonDark
      >
      <ButtonDark v-show="step == 1" @click="$emit('trigger', 'go-to-step-2')">Ir al siguiente paso</ButtonDark>
      <ButtonDark
        v-show="step == 2"
        @click="$emit('trigger', 'attack')"
        :class="{ 'animate-pulse': action == 'attack' }"
        >Atacar</ButtonDark
      >
      <ButtonDark v-show="step == 2" @click="$emit('trigger', 'go-to-step-3')">Ir al siguiente paso</ButtonDark>
      <ButtonDark
        v-show="step == 3"
        @click="$emit('trigger', 'move-troops')"
        :class="{ 'animate-pulse': action == 'move-troops' }"
        >Mover tropas</ButtonDark
      >
      <ButtonDark v-show="step == 3" @click="$emit('trigger', 'end-turn')">Finalizar turno</ButtonDark>
      <ButtonDark v-show="step == 4" @click="$emit('trigger', 'attack-territory')">Atacar Territorio</ButtonDark>
      <ButtonRed v-show="step == 4" @click="$emit('trigger', 'go-to-step-3')">Volver</ButtonRed>
    </div>
  </div>
</template>

<style scoped>
  .stepper {
    @apply flex items-center space-x-2 text-sm font-medium text-center text-white sm:space-x-4 rtl:space-x-reverse;
  }

  .stepper .step {
    @apply flex items-center;
  }

  .stepper .step span {
    @apply flex items-center justify-center w-6 h-6 me-2 text-xs border-2 rounded-full shrink-0;
  }

  .actions {
    @apply flex flex-row pt-4;
  }

  .actions span {
    @apply mr-4;
  }
</style>

<script setup>
  import { IconCoin } from '@tabler/icons-vue';

  defineProps(['step', 'coins', 'action']);
</script>
