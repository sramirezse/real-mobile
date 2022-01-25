<template>
  <Page
    class="page"
    actionBarHidden="true"
    backgroundSpanUnderStatusBar="true"
    overfloSafeArea="true"
  >
    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">
        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="header" rows="auto" columns="*,auto,auto">
              <GridLayout columns="50, *">
                <Label
                  class="fas"
                  style="font-size: 20; font-weight: bold"
                  text.decode="&#xf0c9;"
                  @tap="onDrawerButtonTap"
                />
              </GridLayout>
              <Image
                src="~/assets/images/search.png"
                verticalAlignment="center"
                marginRight="25"
                row="0"
                col="1"
                height="22"
                @tap="$routeTo('/search')"
              />
              <Image
                src="~/assets/images/houses.png"
                verticalAlignment="middle"
                marginRight="10"
                row="0"
                col="2"
                height="30"
              />
            </GridLayout>

            <StackLayout class="content">


              <ScrollView>
                <StackLayout style="font-size: 18">
                  <StackLayout alignItems="center">
                    <Image
                      :src="user.profile_photo_url"
                      stretch="aspectFill"
                      class="profilePic"
                    >
                    </Image>
                    <Label
                      :text="user.name"
                      color="#000"
                      fontSize="19"
                      fontWeight="bold"
                      textAlignment="center"
                    />
                    <StackLayout class="aboutContainer">
                      <StackLayout orientation="horizontal">
                        <Label
                          text=""
                          style="font-size: 18; color: #557aad"
                          class="font-awesome"
                        />
                        <Label
                          :text="user.address.address"
                          style="
                            font-size: 16;
                            color: #000;
                            margin-left: 9;
                            margin-top: 1;
                          "
                          class="font-awesome"
                        />
                      </StackLayout>
                      <StackLayout orientation="horizontal" class="aboutRow">
                        <Label
                          text=""
                          style="font-size: 16; color: #557aad"
                          class="font-awesome"
                        />
                        <Label
                          text="Website.com"
                          style="font-size: 16; color: #000; margin-left: 6"
                          class="font-awesome"
                        />
                      </StackLayout>
                    </StackLayout>
                    <StackLayout
                      orientation="horizontal"
                      class="followersContainer"
                    >
                      <StackLayout width="33%">
                        <Label text="6" class="followersTxtValue" />
                        <Label text="Posts " class="followersTxt" />
                      </StackLayout>
                      <StackLayout width="33%">
                        <Label text="2300" class="followersTxtValue" />
                        <Label text="Followers " class="followersTxt" />
                      </StackLayout>
                      <StackLayout width="33%">
                        <Label text="400" class="followersTxtValue" />
                        <Label text="Following " class="followersTxt" />
                      </StackLayout>
                    </StackLayout>
                  </StackLayout>

                  <WrapLayout
                    alignItems="left"
                    backgroundColor="#eeeeee"
                    marginTop="10"
                  >
                    <Image
                      src="~/assets/images/New-York.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                    <Image
                      src="~/assets/images/ny2.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                    <Image
                      src="~/assets/images/food.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                    <Image
                      src="~/assets/images/wedding.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                    <Image
                      src="~/assets/images/Selfie.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                    <Image
                      src="~/assets/images/nature.jpg"
                      stretch="aspectFill"
                      class="listImage"
                      width="33.3%"
                      height="140"
                    />
                  </WrapLayout>
                </StackLayout>
              </ScrollView>
            </StackLayout>
          </StackLayout>
        </ScrollView>
      </DockLayout>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Profile");
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    },
    user(){
      return this.$store.state.auth.user;
    }
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables
@import url("../assets/css/profile.css");

</style>
