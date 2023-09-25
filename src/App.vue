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

    --color-gray-1: #636363;

    --transition: all 0.25s ease-in-out;
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

  .label-container {
    margin-bottom: 5px;
    label {
      font-size: 16px;
      color: var(--color-white-1);
    }
  }

  .text-input {
    background-color: var(--color-navy-4);
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .align-center {
    align-items: center;
  }
  .gap-1 {
    gap: 10px;
  }
  .gap-2 {
    gap: 20px;
  }
  .gap-3 {
    gap: 30px;
  }
</style>
