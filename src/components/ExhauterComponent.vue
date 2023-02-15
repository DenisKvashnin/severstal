<template>
  <q-card style="height:min-content">
    <q-card-section class="bg-secondary text-white row">
      <div class="text-h6 q-mr-md">Эксгаустер что-то там</div>
      <q-btn color="primary" style="font-weight: 600;"> перейти</q-btn>
    </q-card-section>
    <q-card-section class="row items-center justify-around">
      <div class="text-h6"> Ротор № 35к</div>
      <q-chip>22.2.2222</q-chip>
      <div><a>изменить</a></div>
    </q-card-section>
    <q-card-section>
      <div class="text-h8 q-pl-md q-mb-sm">
        Последняя замена ротера: {{}} сут.
      </div>
      <div class="text-h8 q-pl-md q-mb-sm">
        Последняя замена ротера: {{}} сут.
      </div>
      <q-expansion-item expand-separator label="Предупреждение">
        <q-card>
          <q-card-section>
            <div class="warning">
              1232414122
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item expand-separator label="Все что-то там">
        <q-card>
          <q-card-section>
            <div class="warning">
              1232414122
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.warning {
  padding: 4px;
  font-size: 16px;
  background-color: #FAFAFA;
  margin-bottom: 4px;
  border-radius: 4px;
}
</style>
