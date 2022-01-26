<template>
  <Page actionBarHidden="true" style="background-image: url('~/assets/images/login_background.png'); background-size: cover;">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" style="margin-bottom: 290" src="~/assets/images/logo.png"></Image>

        <GridLayout rows="auto, auto, auto">
          <StackLayout row="0" class="input-field">
            <TextField
              class="input"
              hint="Email"
              :isEnabled="!processing"
              keyboardType="email"
              autocorrect="false"
              autocapitalizationType="none"
              v-model="user.email"
              returnKeyType="next"
              @returnPress="focusPassword"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout row="1" class="input-field">
            <TextField
              class="input"
              ref="password"
              :isEnabled="!processing"
              hint="Contraseña"
              secure="true"
              v-model="user.password"
              :returnKeyType="isLoggingIn ? 'done' : 'next'"
              @returnPress="focusConfirmPassword"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
            <TextField
              class="input"
              ref="confirmPassword"
              :isEnabled="!processing"
              hint="Confirm password"
              secure="true"
              v-model="user.confirmPassword"
              returnKeyType="done"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
        </GridLayout>

        <Button
          :text="isLoggingIn ? 'Iniciar sesión' : 'Registrarse'"
          :isEnabled="!processing"
          @tap="submit"
          class="btn btn-primary m-t-20"
        ></Button>
        <Label
          *v-show="isLoggingIn"
          text="¿Contraseña olvidada?"
          class="login-label"
          @tap="forgotPassword()"
        ></Label>
      </StackLayout>

      <Label class="login-label sign-up-label" @tap="toggleForm()">
        <FormattedString>
          <Span
            :text="isLoggingIn ? '¿No tienes cuenta? ' : 'Iniciar sesión '"
          ></Span>
          <Span :text="isLoggingIn ? 'Registrate' : ''" class="bold"></Span>
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "admin@admin.com ",
        password: "12345678",
        confirmPassword: "12345678",
      },
      show: false,
    };
  },
  computed: {
  },
  methods: {
    onButtonTop() {},
    async onButtonTap() {
      // const res = await this.$store.dispatch("user/login", this.form);
      // console.log(res.data.user.plainTextToken);
      await this.$store.dispatch("auth/login", this.user).then((response) => {
        console.log("user desde login", this.$store.state.auth.user, response);
      });
      await this.$store.dispatch("auth/fetchUser").then((response) => {
        console.log(
          "user desde fetchUser",
          this.$store.state.auth.user,
          response
        );
        this.$routeTo("/home", {
          transition: {
            name: "fade",
            duration: 380,
          },
        });
      });
      this.$root.$emit("fetchUser");
    },
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    async login() {
      await this.$store
        .dispatch("auth/login", this.user)
        .then((response) => {
          this.processing = false;
          // this.$$routeTo('/home', { clearHistory: true });
        })
        .catch(() => {
          this.processing = false;
          this.alert("Unfortunately we could not find your account.");
        });
      await this.$store.dispatch("auth/fetchUser").then((response) => {
        console.log(
          "user desde fetchUser",
          this.$store.state.auth.user,
          response
        );
        this.$routeTo("/home", {
          transition: {
            name: "fade",
            duration: 380,
          },
        });
      });
      this.$root.$emit("fetchUser");
    },
    async register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        this.processing = false;
        return;
      }

      this.$store
        .dispatch("auth/register", this.user)
        .then(() => {
          this.processing = false;
          this.alert("Your account was successfully created.");
          this.isLoggingIn = true;
        })
        .catch(() => {
          this.processing = false;
          this.alert("Unfortunately we were unable to create your account.");
        });
    },
    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message:
          "Enter the email address you used to register for APP NAME to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
      }).then((data) => {
        if (data.result) {
          this.$store
            .dispatch("auth/refresh", data.text.trim())
            .then(() => {
              this.alert(
                "Your password was successfully reset. Please check your email for instructions on choosing a new password."
              );
            })
            .catch(() => {
              this.alert(
                "Unfortunately, an error occurred resetting your password."
              );
            });
        }
      });
    },
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "APP NAME",
        okButtonText: "OK",
        message: message,
      });
    },
  },
};
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  margin-top:40;
}

.logo {
  margin-bottom: 12;
  height: 100;
}

.header {
  horizontal-align: center;
  font-size: 20;
  font-weight: 400;
  margin-bottom: 70;
  text-align: center;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input:disabled {
  background-color: white;
  opacity: 0.5;
}

.btn-primary {
  margin: 30 5 15 5;
  color: aliceblue;
  background-color: #eb58acff;
  border-radius: 5;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
