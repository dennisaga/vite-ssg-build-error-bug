<script lang="ts" setup>
import contract from '../assets/images/main/contract.png'
import bg from '../assets/images/main/bg.png'
const userLogin = useUserLoginStore()
watchEffect(() => {
  userLogin.userLogout()
})
</script>

<template>
  <div class="main h-screen" :class="$style.bg">
    <img class="absolute top-0 left-0 w-full h-full" :src="bg">
    <img class="absolute bottom-0 right-0" :src="contract" :class="$style.contract">
    <div :class="$style.text">
      <div :class="$style.title">
        DEV
      </div>
      <div :class="$style.subtitle">
        development platform
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
@import '../styles/conversion.scss';
.bg {
    background: linear-gradient(to right, #00aeef 0%, #0d8ad4 58%, #2e3192 100%);
}
.contract{
  width:tovw(961);
  height:tovw(770);
}
.text {
    padding-left: tovw(68);
    padding-top: tovw(160);
    .title {
        font-family: AgencyFB;
        font-size: tovw(72);
        text-align: left;
        color: #fff;
    }
    .subtitle {
        width: tovw(535);
        font-family: AgencyFB;
        font-size: tovw(53);
        line-height: 1.02;
        letter-spacing: tovw(-0.53);
        color: #fff;
        text-align: left;
    }
}
</style>
