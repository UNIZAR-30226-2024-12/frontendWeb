<template>
  <div class="w-full max-w-5xl px-4 py-8">
    <div class="mx-auto w-full rounded-2xl bg-primary-light p-2 text-white">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Qué es Wealth Wars?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Wealth Wars es un juego online por turnos de <strong>2</strong> a <strong>4</strong> jugadores inspirado en el
          clásico juego de mesa Risk, cuyo objetivo es llegar a conquistar todo el mapa.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Cómo se juega?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Cada turno está dividido en varias fases:
          <ul class="pl-10 list-disc">
            <li>
              En la <strong>fase inicial</strong>, se lleva a cabo la adquisición de fábricas y tropas. Se permite
              compra ilimitada tanto de tropas como de fábricas.
            </li>
            <li>
              En la <strong>segunda fase</strong>, se puede atacar a un territorio enemigo próximo a uno de los
              territorios del atacante. Puedes hacer todos lo ataques que se desee.
            </li>
            <li>
              En la <strong>tercera fase</strong>, se pueden mover tropas entre territorios. Se puede mover el número de
              tropas que se desee las veces que se quiera. Tiene que haber un mínimo de 1 tropa. adyacentes.
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Cómo funcionan las <strong>fábricas</strong>?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Las fábricas se pueden adquirir en la primera fase del turno. Cada fábrica cuesta 15 monedas y genera 4
          monedas a la hora de cobrar monedas. Se puede tener hasta un máximo de 1 fábrica por territorio. Puedes
          comprar todas la fábricas que puedas en tu turno.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Cuánto cuestan las <strong>tropas</strong>?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Cada unidad de tropas son <strong>2 monedas</strong>.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Cómo se <strong>conquistan</strong> territorios?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Para conquistar un territorio pulsa el botón de atacar, a continuación parpadearán tus territorios desde los
          que podrás atacar. Selecciona uno, y a continuación parpadearán los territorios adyacentes del enemigo.
          Selecciona el que desees atacar e indica el número de tropas con el que se iniciará el ataque. El territorio
          será conquistado si el número de tropas atacentes es superior al número de tropas defensoras.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span><strong>Territorios iniciales</strong></span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Al empezar una partida los territorios se repartiran de forma aleatoria entre todos los jugadores, cada
          territorio empezará con 3 tropas.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-amber-300 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500/75"
        >
          <span>¿Qué pasa si <strong>abandono</strong> la partida?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-amber-900" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4">
          Si abandonas la partida, tus territorios serán repartidos con el mismo formato que el inicio de partida y no
          podrás volver a unirte a la partida.
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
  import { ChevronUpIcon } from '@heroicons/vue/20/solid';
</script>
