<template>
  <router-view/>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
  :root {
    --color-navy-1: #111525;
    --color-navy-2: #161B2E;
    --color-navy-3: #161C31;
    --color-navy-4: #242E50;

    --color-pink-1: #EE6ADB;

    --color-white-1: #FFF;
  }
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: var(--color-navy-1);
  }
  * {
    color: var(--color-white-1);
    font-family: 'Poppins', sans-serif;
  }
</style>
