<template>
  <div class="dropup">
    <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="material-icons" title="Language">language</span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#" class="lang-button" @click="changeLanguage">EN</a></li>
      <li><a href="#" class="lang-button" @click="changeLanguage">VI&nbsp;</a></li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'LanguageSwitcher',
  components: {},
  methods: {
    changeLanguage(event) {
      const locale = event.target.innerHTML.toLocaleLowerCase();
      this.$i18n.locale = locale;
      localStorage.setItem('language', locale)
    }
  }
};
</script>

<style scoped>
.dropup .dropdown-toggle::after {
  margin-bottom: 1px;
  font-size: 25px;
}
.dropup .dropdown-menu{
  top: auto;
  bottom: 100%;
  margin-bottom: 0.4rem;

}
button {
  border: none;
  color: #fff;
}
.dropdown-toggle {
  background: transparent;
  border-radius: 5px;
  max-height: 30px;
  display:flex;
  align-items: center;
}
.dropdown-menu {
  margin: 0;
  padding: 0;
  min-width: 20px;
}
.dropdown-menu li{
  border-bottom: 2px solid #d6d6d7;
}
.lang-button {
  padding: 10px;
  text-decoration: none;
}
.lang-button:hover {
  text-decoration: none;
}
</style>
