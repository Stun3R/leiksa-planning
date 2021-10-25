<template>
  <div class="flex items-center justify-center min-h-screen space-x-24">
    <section id="planning" class="min-w-[540px] bg-gray-900 pt-12 pb-8 px-12">
      <header class="flex">
        <div class="font-medium">
          <h2 class="text-2xl text-white">Leiksa</h2>
          <h1 class="text-primary text-4xl max-w-max leading-[3rem]">
            Planning
          </h1>
          <div class="flex font-normal text-gray-300">
            <IconsCalendar class="w-4 h-4 mr-1" />
            <h3 class="pt-px text-xs">
              Semaine du {{ $dayjs(week).format('DD MMMM') }}
            </h3>
          </div>
        </div>
        <div
          class="
            ml-auto
            flex
            rounded-md
            bg-gradient-to-br
            from-purple-600
            to-purple-700
            my-auto
            text-white
            py-1.5
            px-2
          "
        >
          <IconsTwitch class="mr-2 fill-current" />
          <span>twitch.tv/leiksatv</span>
        </div>
      </header>
      <main class="flex mt-10">
        <div
          class="flex mb-10 space-x-4"
          :class="{ 'mx-auto': formData.days.length > 2 }"
        >
          <CalendarDay v-for="(day, i) in formData.days" :key="i" :day="day" />
        </div>
      </main>
      <footer>
        <p class="text-[0.625rem] font-normal text-center text-gray-300">
          N’oubliez pas de me suivre sur Twitch pour être notifié quand je pars
          en live.<br />
          J’essaie de me tenir à ce planning mais il est possible que j’ai des
          imprévus
        </p>
      </footer>
    </section>
    <section class="my-auto font-light">
      <h1 class="mb-6 text-xl font-normal text-center">Formulaire</h1>
      <div class="form-wrapper">
        <FormulateInput
          v-model="week"
          type="date"
          :min="$dayjs().weekday(0).format('YYYY-MM-DD')"
          step="6.5"
          name="week"
          label="Semaine"
          :validation="`required`"
        />
        <FormulateForm v-model="formData" @submit="downloadPlanning">
          <FormulateInput
            type="group"
            name="days"
            :repeatable="true"
            label="Jours de stream"
            add-label="Ajouter un jour"
            validation="required"
          >
            <div class="attendee">
              <FormulateInput
                :value="week"
                name="date"
                type="date"
                :min="week"
                :max="$dayjs(week).weekday(6).format('YYYY-MM-DD')"
                validation="required"
                label="Jour"
              />
              <FormulateInput
                name="hour"
                value="20:00"
                type="time"
                validation="required"
                label="Heure"
                step="1800"
              />
              <FormulateInput
                name="games"
                :options="games"
                type="checkbox"
                label="Jeux"
                validation="required|max:2"
                error-behavior="live"
              />
            </div>
          </FormulateInput>
          <FormulateInput type="submit" label="Télécharger le planning" />
        </FormulateForm>
      </div>
    </section>
  </div>
</template>

<script>
import download from 'downloadjs'
import { toJpeg } from 'html-to-image'
import _ from 'lodash'
import games from '~/seed/games'
export default {
  data() {
    return {
      games: [],
      week: this.$dayjs().weekday(0).format('YYYY-MM-DD'),
      formData: {
        days: [],
      },
    }
  },
  mounted() {
    this.games = _.sortBy(_.keys(games))
    this.games.push('TBD')
  },
  methods: {
    downloadPlanning() {
      toJpeg(document.getElementById('planning')).then(function (dataUrl) {
        download(dataUrl, 'planning.png')
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
