<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About Us</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/students"
                  >Students</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  background-color: #343a40;
}

.navbar {
  padding: 1rem 2rem;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-toggler-icon {
  filter: invert(1);
}

.navbar-collapse {
  justify-content: flex-end;
}

.nav-item {
  margin-left: 1rem;
}

.nav-link {
  color: #ffffff;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d4d4d4;
}

.nav-link.active {
  font-weight: bold;
  color: #d4d4d4;
}
</style>
