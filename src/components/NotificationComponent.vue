<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <h1>Заявки</h1>

        <template v-slot:top>
          <div style="width: 100%" class="row">
            <div class="col-9">
              <q-toggle v-model="filterToggle.openIssue" val="openIssue" label="Открытые заявки" />
            </div>
            <div class="col-3">
              <q-input  dense debounce="400" color="primary" v-model="search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script>
import { defineProps } from 'vue';
export default {
  data() {
    return {
      filterToggle: {
        openIssue: true
      },
      search: '',
      columns: [
        {name: 'name', required: true, label: 'Агломашина', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true},
        {name: 'exhauster', align: 'center', label: 'Эксгаустер', field: 'exhauster', sortable: true},
        {name: 'bearing', align: 'center', label: '№ Подшипника', field: 'bearing', sortable: true},
        {name: 'error', label: 'Ошибка', field: 'error', sortable: true},
        {name: 'dateTime', label: 'Дата время', field: 'dateTime', sortable: true},
        {name: 'application', label: '№ Заявки', field: 'application', sortable: true},
        {name: 'countIssue', label: 'Кол-во заявок', field: 'countIssue', sortable: true},
        {name: 'check', label: 'Проверка', field: 'check', sortable: true},
        {name: 'applicationStatus', label: 'Статус заявки', field: 'applicationStatus', sortable: true},
      ],
      rows : [
        {
          name: 'Заявка ',
          exhauster: 'openIssue',
          bearing: 159,
          error: 6.0,
          dateTime: 24,
          application: 4.0,
          countIssue: 87,
          check: '14%',
          applicationStatus: '1%'
        }
      ]
    }
  },
  computed: {
    showAll: {
      get: function () {
        return this.filterToggle.openIssue
      },
      set: function (newValue) {
        this.filterToggle.openIssue = newValue
      }
    },
    filter() {
      return {
        search: this.search,
        breakfast: this.filterToggle.openIssue
      }
    }
  },
  methods: {
    customFilter(rows, terms) {
      // rows contain the entire data
      // terms contains whatever you have as filter

      lowerSearch = terms.search ? terms.search.toLowerCase() : ""

      const filteredRows = rows.filter(
        (row, i) => {
          let ans = false

          //Gather toggle conditions
          let c1 = this.filterToggle.breakfast //&& row.category == "openIssue"

          //Assume true in case there is no search
          let s1 = true

          //If search term exists, convert to lower case and see which rows contain it
          if (lowerSearch != "") {
            s1 = false
            //Get the values
            let s1_values = Object.values(row)
            //Convert to lowercase
            let s1_lower = s1_values.map(x => x.toString().toLowerCase())

            for (let val = 0; val < s1_lower.length; val++) {
              if (s1_lower[val].includes(lowerSearch)) {
                s1 = true
                break
              }
            }
          }

          //assume row doesn't match
          ans = false

          //check if any of the conditions match
          if ((c1 && s1) || (c2 && s1) || (c3 && s1)) {
            ans = true
          }

          return ans

        })


      return filteredRows
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
