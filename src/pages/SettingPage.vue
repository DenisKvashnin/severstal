<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <h2 class="text-h6">Machine Learning Model Settings</h2>
      </q-card-section>

      <q-card-section>
        <q-form @submit="saveSettings">
          <q-field
            v-for="parameter in parameters"
            :key="parameter.id"
            v-model="parameter.value"
            :label="parameter.label"
            :type="parameter.type"
            :rules="parameter.rules"
            :disable="parameter.disabled"
            :options="parameter.options"
            :clearable="parameter.clearable"
          >
            <template v-if="parameter.type === 'select'">
              <q-select
                v-model="parameter.value"
                :options="parameter.options"
              ></q-select>
            </template>
            <template v-else-if="parameter.type === 'checkbox'">
              <q-toggle v-model="parameter.value" />
            </template>
          </q-field>
          <q-card-actions align="right">
            <q-btn type="submit" color="primary">Save</q-btn>
          </q-card-actions>
        </q-form>
      </q-card-section>

      <q-card-section>
        <h4 class="text-h6">Model Performance Metrics</h4>
        <p v-if="!modelMetrics">No metrics available.</p>
        <div v-else>
          <div v-for="(value, label) in modelMetrics" :key="label">
            <strong>{{ label }}:</strong> {{ value }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ModelSettingsPage',
  setup() {
    const parameters = ref([
      {
        id: 'learningRate',
        label: 'Learning Rate',
        type: 'number',
        value: 0.001,
        rules: [val => val > 0 || 'Value must be greater than 0'],
      },
      {
        id: 'batchSize',
        label: 'Batch Size',
        type: 'number',
        value: 32,
        rules: [val => val > 0 || 'Value must be greater than 0'],
      },
      {
        id: 'optimizer',
        label: 'Селектор',
        type: 'select',
        value: 'Метрика',
        options: [
          { label: 'Метрика1', value: 'Метрика1' },
          { label: 'Метрика2', value: 'Метрика2' },
          { label: 'Метрика3', value: 'Метрика3' },
        ],
      },
      {
        id: 'enableRegularization',
        label: 'Enable Regularization',
        type: 'checkbox',
        value: false,
      },
    ]);

    const modelMetrics = ref({
      accuracy: 0.87,
      loss: 0.25,
    });

    const saveSettings = () => {
      // Save the model settings to the server or perform any other actions
      console.log('Settings saved:', parameters.value);
    };

    return {
      parameters,
      modelMetrics,
      saveSettings,
    };
  },
};
</script>
<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.q-card {
  max-width: 500px;
  width: 100%;
}

.q-card-section:not(:last-child) {
  margin-bottom: 20px;
}

.q-form {
  width: 100%;
}

.q-card-actions {
  padding: 12px;
}
</style>
