<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="Search" colSpan="2"/>

          <Label class="fas" style="font-size: 30" text.decode="&#8672;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf002;"/>
            <Label class="page__content-placeholder" :text="message"/>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Search");
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        // utils.showDrawer();
        this.$routeBack();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
