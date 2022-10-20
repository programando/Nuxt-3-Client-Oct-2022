<template>
  <div>
    <NuxtPage></NuxtPage>

  </div>
</template>


 <script setup>
    import * as Csrf from "@/api/config/Csrf";
    const config = useConfigVariables();
 
    onMounted(async  () => {
          const ServeCrsf = await Csrf.getCsrf();
      })
 </script>

