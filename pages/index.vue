<script setup>
import { reactive } from "vue";

import ButtonControl from "@/components/html/ButtonControl.vue";
import EmailControl from "@/components/html/EmailControl.vue";
import PasswordControl from "@/components/html/PasswordControl.vue";
import ContainerCenter from "@/components/utilities/ContainerCenter.vue";

const datos = reactive({
  email: "",
  password: "",
});
</script>
<template>
  <div
    class="z-30 flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/background.jpg')"
  >
    <ContainerCenter bgColor="azulBackGroundForm">
      <div class="flex justify-center text-4xl font-bold text-white">
        <span><img class="h-24" src="/images/LogoCripaack.png" alt="" /></span>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-center">
          <label class="w-20 text-white">Email</label>
          <EmailControl placeholder="Ingrese email" v-model="datos.email" />
        </div>

        <div class="flex items-center justify-center mt-6">
          <label class="w-20 text-white">Password</label>
          <PasswordControl
            placeholder="ingrese contraseña"
            v-model="datos.password"
          />
        </div>
      </div>

      <div class="flex justify-center mt-8 mb-8 text-lg font-semibold">
        <ButtonControl name="ingresar" color="primary" />
      </div>
    </ContainerCenter>
  </div>
</template>
