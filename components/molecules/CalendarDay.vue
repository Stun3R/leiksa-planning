<template>
  <div class="w-[96px] bg-gray-800 rounded-lg py-2 px-2">
    <div class="mb-3 text-center text-white">
      <div class="text-xl font-medium">
        {{ $dayjs(day.date).format('ddd').slice(0, -1) | capitalize }}
      </div>
      <div
        class="text-xs font-light text-transparent  bg-clip-text bg-gradient-to-r text-primary"
      >
        {{ formattedHour }}
      </div>
    </div>
    <div class="relative block w-full h-[106px]">
      <div v-for="(game, i) in day.games" :key="i" class="absolute">
        <IconsQuestionMark
          v-if="game === 'TBD'"
          class="
            w-full
            h-[106px]
            rounded-lg
            stroke-[3px] stroke-current
            text-white
            bg-primary
          "
        />
        <img
          v-else
          :src="games[game].img"
          class="object-cover w-full h-full rounded-lg"
          :class="{
            'game-left': i === 0 && day.games.length > 1,
            'game-right': i === 1 && day.games.length > 1,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import games from '~/seed/games'
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  props: {
    day: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      games,
    }
  },
  computed: {
    formattedHour() {
      const hour = this.$dayjs(this.day.hour, 'HH:mm')
      return `${hour.format('HH')}h${
        hour.format('mm') === '00' ? '' : hour.format('mm')
      }`
    },
  },
}
</script>

<style scoped>
.game-left {
  clip-path: polygon(100% 0, 0% 100%, 0 0);
}

.game-right {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
</style>
