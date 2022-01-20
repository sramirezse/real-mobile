<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Inicio" colSpan="2" />

        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf015;" />
      <Label class="page__content-placeholder" :text="message" />
      <Button text="Button" @tap="onButtonTap" />
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { mapState } from "vuex";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  computed: {
    message() {
      return "<!--Contenido -->";
    },
  },
  data() {
    return {
      form: {
        email: "admin@admin.com",
        password: "12345678",
        remember_me: true,
      },
    };
  },
  methods: {
    async onDrawerButtonTap() {
      utils.showDrawer();
      await this.$store.dispatch("auth/login", this.form);
      // axios.post('https://realstate.kratoxxsoft.com/api/auth/login', this.form).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)});
      // console.log(this.$store.state.auth.user, 'desde home');
    },
    async onButtonTap() {
      await this.$store.dispatch("auth/fetchUser");

      // console.log('user', this.$store.state.auth);
    },
    computed: {
      ...mapState({
        user: (state) => state.auth.user,
      }),
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
