<template>
  <div>
    <h1>Киноопросник</h1>
    <div class="tests">
      <router-link to="/vilnev">
        <div class="tests__item">
          <h1>Дени Вильнев</h1>
          <img src="@/assets/images/data/vilnev/avatar.jpg" alt="jhkh">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tests {
  display: flex;
  a{
    text-decoration: none;
    color: black;
  }

  &__item {
    border: 2px solid #b9b9b9;
    border-radius: 15px;
    margin: 20px;
    padding: 20px;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h1{
      font-family: "GHEA Grapalat", sans-serif;
    }
    p{
      font-family: "GHEA Mariam", sans-serif;
    }
    img {
      width: 150px;
      border-radius: 65px;
      transition: 0.2s;
    }
    &:hover img{
      scale: 1.05;
      transition: 0.2s;
    }
  }
}
</style>
