<template>
  <Page class="page">
    <Header
      :burguerIcon="false"
      :searchBar="true"
      :searchIcon="false"
      :housesIcon="false"
      :backIcon="true"
    ></Header>

    <GridLayout class="page__content">
      <ScrollView dock="top">
        <ListView separatorColor="transparent" for="item in searchResult" @itemTap="onItemTap">
          <v-template>
            <!-- Shows the list item label in the default color and style. -->
            <Label :text="item.address" />
          </v-template>
        </ListView>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import Header from "./Common/Header";
import Details from "./Details";
export default {
  components: {
    Header,
    Details
  },
  data(){
    return{
      listOfItems:[
        {
          text: "Destacadas",
        },
        {
          text: "En renta",
        },
        {
          text: "En venta",
        },
        {
          text: "Piscina",
        },
        {
          text: "Terraza",
        },
      ]
    }
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Search");
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    },
    searchResult(){
      return this.$store.getters["property/searchResult"];
    }
  },
  methods: {
    onDrawerButtonTap() {
      // utils.showDrawer();
      this.$routeBack();
    },
    onItemTap(args){
      const item = args.item;
      console.log("onItemTap", item);
      this.$navigateTo(Details, {
        animated: true,
        transition: {
          name: "slide",
          duration: 200,
          curve: "easeIn",
        },
        props: {
          item: item,
        },
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
