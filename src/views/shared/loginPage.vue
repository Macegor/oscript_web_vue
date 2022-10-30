<template>
  <div class="flex flex-center fullscreen">
    <q-card>
      <q-card-section>
        <div class="q-pa-md" style="max-width: 400px">
          <q-form @submit.prevent class="q-gutter-md">
            <q-input bottom-slots v-model="login" label="Логин" type="text">
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
            <q-input
              bottom-slots
              v-model="password"
              label="Пароль"
              type="password"
            >
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
            <div>
              <q-btn
                label="Войти"
                type="submit"
                color="primary"
                @click="auth"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import store from "@/store";
import router from "@/router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    // Вот так объявляются переменные
    const login = ref("");
    const password = ref("");

    // Здесь основные функции Компонента

    const auth = () => {
      store
        .dispatch("auth/Login", {
          login: login.value,
          password: password.value,
        })
        .then(() => {
          router.push("/");
        });
    };

    return {
      login,
      password,
      auth,
    };
  },
});
</script>

<style scoped>
.q-btn {
  border-radius: 30px;
}
</style>
