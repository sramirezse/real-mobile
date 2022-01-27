<template>
  <Page class="page" backgroundSpanUnderStatusBar="true" overfloSafeArea="true">
    <Header></Header>

    <GridLayout class="page__content">
      <Label class="page__content-icon far" text.decode="&#xf1ea;" />
      <Label class="page__content-placeholder" :text="message" />
    </GridLayout>
  </Page>
</template>

<script>
import { SelectedPageService } from "../shared/selected-page-service";
import Header from "./Common/Header";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },
  components: {
    Header,
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
