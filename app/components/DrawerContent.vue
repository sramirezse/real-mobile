<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout v-if="user" row="0" class="nt-drawer__header" >
            <Image class="nt-drawer__header-image fas t-36" src="https://cdn.pixabay.com/photo/2020/02/06/20/01/university-library-4825366_960_720.jpg" />
            <!-- <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/> -->

            <Label class="nt-drawer__header-brand" :text="user.email"/>
            <Label class="nt-drawer__header-footnote" :text="user.name"/>
        </StackLayout>
        <StackLayout v-else  row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" text="Nombre de usuario"/>
            <Label class="nt-drawer__header-footnote" text="username@mail.com"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/home')">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Inicio" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/browse')">
                    <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
                    <Label col="1" text="Browse" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/search')">
                    <Label col="0" text.decode="&#xf002;" class="nt-icon fas"/>
                    <Label col="1" text="Buscar" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/featured')">
                    <Label col="0" text.decode="&#xf005;" class="nt-icon fas"/>
                    <Label col="1" text="Destacados" class="p-r-10"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout v-if="user" columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/profile')">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Perfil" class="p-r-10"/>
                </GridLayout>
                <GridLayout v-if=" user == null" columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Login' ? ' -selected': '')"
                            @tap="onNavigationItemTap('/login')">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Iniciar Sesión" class="p-r-10"/>
                </GridLayout>
                <GridLayout v-if=" user" columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')"
                            @tap="logout()">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Cerrar sesión" class="p-r-10"/>
                </GridLayout>
                <!-- <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')"
                            @tap="fetchUser()">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Cerrar sesión" class="p-r-10"/>
                </GridLayout> -->

            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
import Home from "./Home";
import Browse from "./Browse";
import Login from "./Login";
import Featured from "./Featured";
import Search from "./Search";
import Profile from "./Profile";
import * as utils from "~/shared/utils";
import { SelectedPageService } from "~/shared/selected-page-service";
import { mapState } from "vuex";

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      (selectedPage) => (this.selectedPage = selectedPage)
    );
    this.fetchUser();
    this.$root.$on('fetchUser', data => {
        // console.log('se ejecuto el evento fetchUser');
        this.fetchUser();
    });
  },
  data() {
    return {
      Home: Home,
      Browse: Browse,
      Featured: Featured,
      Search: Search,
      Profile: Profile,
      Login: Login,
      selectedPage: "",
    user:null

    };
  },
  components: {
    Home,
    Browse,
    Featured,
    Search,
    Profile,
    Login,
  },
  computed: {

  },
  methods: {

    onNavigationItemTap(component) {
      this.$routeTo(component, {
        // clearHistory: true
      });
      console.log(this.user);
      utils.closeDrawer();
    },
    async logout() {
      await this.$store.dispatch("auth/logout").then((res) => {
        // console.log(res);
        this.user = null;
        // this.$routeTo("/login");
      });


      // console.log(this.user);
    },
    async fetchUser() {
      await this.$store.dispatch("auth/fetchUser").then((tes) => {
        console.log(this.$store.state.auth.user)
        this.user  = this.$store.state.auth.user;
      // console.log(this.$refs);

        // console.log('fetchuserDrawer',this.$store.state.auth.user);
      });

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
