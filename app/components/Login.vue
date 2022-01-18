<template>
  <Page >
    <ActionBar title="Real State" actionBarHidden="true">
      <NavigationButton
        text="Atras"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack()"
      />
    </ActionBar>
    <StackLayout>
      <Image
        src="https://cdn.pixabay.com/photo/2021/12/03/20/59/town-6843799_960_720.jpg"
        class="fas"
      />
      <Label class="drawer-header" text="Hola bienvenido!" />
      <StackLayout class="form-group">
        <Label class="form-group-label" text="Correo:" />
        <TextField v-model="form.email" hint="example@mail.com">
          <Switch v-model="show" />
        </TextField>
        <Label class="form-group-label" text="Contraseña:" secure />
        <TextField v-model="form.password" hint="******" secure="true" />
        <Button text="Iniciar sesión" @tap="onButtonTap" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import { mapState } from "vuex";
import Home from "./App";
export default {
  data() {
    return {
      listOfItems: [
        { text: "Item 1" },
        { text: "Item 2" },
        { text: "Item 3" },
        { text: "Item 4" },
        { text: "Item 5" },
        { text: "Item 6" },
        { text: "Item 7" },
        { text: "Item 8" },
        { text: "Item 9" },
        { text: "Item 10" },
        { text: "Item 11" },
        { text: "Item 12" },
        { text: "Item 13" },
        { text: "Item 14" },
        { text: "Item 15" },
        { text: "Item 16" },
        { text: "Item 17" },
        { text: "Item 18" },
        { text: "Item 19" },
        { text: "Item 20" },
        { text: "Item 21" },
        { text: "Item 22" },
        { text: "Item 23" },
        { text: "Item 24" },
        { text: "Item 25" },
        { text: "Item 26" },
        { text: "Item 27" },
        { text: "Item 28" },
        { text: "Item 29" },
        { text: "Item 30" },
        { text: "Item 31" },
        { text: "Item 32" },
        { text: "Item 33" },
        { text: "Item 34" },
        { text: "Item 35" },
        { text: "Item 36" },
        { text: "Item 37" },
        { text: "Item 38" },
        { text: "Item 39" },
        { text: "Item 40" },
        { text: "Item 41" },
        { text: "Item 42" },
        { text: "Item 43" },
        { text: "Item 44" },
        { text: "Item 45" },
        { text: "Item 46" },
        { text: "Item 47" },
        { text: "Item 48" },
        { text: "Item 49" },
        { text: "Item 50" },
      ],
      form: {
        email: "admin@admin.com ",
        password: "12345678",
        remember: false,
      },
      show: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    onButtonTop() {
      axios
        .get()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async onButtonTap() {
      const res = await this.$store.dispatch("user/login", this.form);
      // console.log(res.data.user.plainTextToken);
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-header {
  padding: 15 16 16 16;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20em;
  text-align: center;
}
.fas {
  width: 150;
  height: 150;
  border-radius: 100%;
}

.form-group {
  padding: 15 20 20 20;
  margin-bottom: 16;
  font-size: 16;
  &-label {
    font-size: 16;
    font-weight: bold;
    color: #333333;
    margin-left: 40px;
  }
}
</style>
