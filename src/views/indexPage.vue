<template>
  <div class="row">
    <div class="col"><div class="text-h4">Главная</div></div>
  </div>
  <div class="row q-mt-md">
    <div class="col-xs-12 col-sm-6 col-md-3">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Демонстрация действий</div>
          <div class="text-subtitle2">
            Для того, чтобы проверить тестовый метод, достаточно заполнить поле
            ввода и нажать "Авторизованный метод". Так же можно протестировать
            проверку текущей авторизации, нажав на "Сбросить авторизацию", в
            случае если авторизация была сброшена на сервере, следующий
            авторизованный запрос перенаправит вас на страницу ввода логина.
          </div>
          <q-input
            class="q-mt-md"
            outlined
            v-model="text"
            label="Поле ввода"
            :dense="true"
          />
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <q-btn @click="testRequest" flat>Авторизованный метод</q-btn>
          <q-btn @click="clearAuth" flat>Сбросить авторизацию</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { appApi } from "@/api";
import { Notify } from "quasar";

export default defineComponent({
  name: "indexPage",

  setup() {
    const text = ref("");

    const clearAuth = () => {
      appApi.get("/app/auth/logout");
      Notify.create({
        type: "warning",
        color: "negative",
        textColor: "white",
        message: "Авторизация была сброшена на стороне сервера",
      });
    };

    const testRequest = () => {
      appApi
        .get("/app/auth/test", {
          params: {
            text: text.value,
          },
        })
        .then((res) => {
          Notify.create({
            type: "info",
            color: "primary",
            textColor: "white",
            message: res.data.text,
          });
          text.value = "";
        })
        .catch((err) => {
          Notify.create({
            type: "warning",
            color: "negative",
            textColor: "white",
            message: err.response.data.error,
          });
        });
    };

    return {
      text,
      clearAuth,
      testRequest,
    };
  },
});
</script>
