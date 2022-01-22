<template>
  <!-- <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true"> -->
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true" overfloSafeArea="true">

    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">
        <GridLayout
          class="bottom-tabs"
          columns="*,*,*,*"
          height="100"
          orientation="horizontal"
          dock="bottom"
        >
          <Image row="0" col="0" height="20" src="~/assets/images/home.png" />
          <Image
            row="0"
            col="1"
            height="20"
            src="~/assets/images/explore.png"

          />
          <Image row="0" col="2" height="20" src="~/assets/images/saved.png" />
          <Image
            row="0"
            col="3"
            height="20"
            src="~/assets/images/contacts.png"
          />
        </GridLayout>
        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="header" rows="auto" columns="*,auto,auto">
              <GridLayout columns="50, *">

                <Label
                  class="fas"
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
                src="~/assets/images/header-cart.png"
                verticalAlignment="middle"
                marginRight="10"
                row="0"
                col="2"
                height="14"
              />
            </GridLayout>
            <GridLayout class="tabs" columns="*,*,*,*,*" height="30">
              <Label class="active" text="Destacadas" row="0" col="0"></Label>
              <Label text="En renta" row="0" col="1"></Label>
              <Label text="En venta" row="0" col="2"></Label>
              <Label text="Piscina" row="0" col="3"></Label>
              <Label text="Terraza" row="0" col="4"></Label>
            </GridLayout>
            <StackLayout class="content">
              <Label class="h1" text="Propiedades destacadas"></Label>
              <GridLayout
                class="room-list-header"
                rows="auto"
                columns="*,auto"
                height="30"
              >
                <Label
                  class="h2"
                  text="En renta"
                  row="0"
                  col="0"
                  colspan="6"
                ></Label>
                <Label
                  class="see-all"
                  text="Mostrar todo"
                  row="0"
                  col="1"
                  colspan="2"
                ></Label>
              </GridLayout>
              <ScrollView
                class="rooms"
                height="180"
                orientation="horizontal"
                loaded="disableScrollBar"
                @scroll="horizontalPercentFunc($event)"

              >
                <StackLayout orientation="horizontal" >
                  <StackLayout
                    class="first-child room"
                    width="135"
                    @tap="showDetails(item)"
                    pageTransition="fade"
                    v-for="item in items" :key="item.id"
                  >

                    <Image style="border-radius: 10" height="100" :src="item.image ? item.image: 'https://cdn.pixabay.com/photo/2018/11/10/22/57/mountain-3807667_960_720.jpg'" />
                    <StackLayout
                      height="11"
                      class="stars"
                      orientation="horizontal"
                      style="padding-left: 15px;"
                    >

                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                    </StackLayout>
                    <Label style="padding-left: 10px" class="h3" height="23" :text="'$'+ numberFormat(item.price)+'.00'"></Label>
                    <Label style="padding-left: 10px" height="20" :text="item.address"></Label>
                  </StackLayout>

                </StackLayout>
              </ScrollView>
              <GridLayout
                class="room-list-header"
                rows="auto"
                columns="*,auto"
                height="30"
              >
                <Label
                  class="h2"
                  text="En renta"
                  row="0"
                  col="0"
                  colspan="6"
                ></Label>
                <Label
                  class="see-all"
                  text="See all"
                  row="0"
                  col="1"
                  colspan="2"
                ></Label>
              </GridLayout>
              <ScrollView class="rooms" height="185" orientation="horizontal">
                <StackLayout orientation="horizontal">
                  <StackLayout class="first-child room" width="138">
                    <Image height="138" src="~/assets/images/room2.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                    <Image src.decode="font://&#xf004;" class="fas" />

                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
                  </StackLayout>
                  <StackLayout class="room" width="138">
                    <Image height="138" src="~/assets/images/room1.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
                  </StackLayout>
                  <StackLayout class="room" width="138">
                    <Image height="138" src="~/assets/images/room3.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
                  </StackLayout>
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
import Details from "./Details";
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { mapState } from "vuex";
import NumberFormat from "../mixins/numberFormat";
import eventScroll from "../mixins/eventScroll";
export default {
  computed: {},
  mixins: [NumberFormat, eventScroll],
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
    // console.log('user', this.$store.state.auth.user);
    this.fetchProperties();
  },
  data() {
    return {
      form: {
        email: "admin@admin.com",
        password: "12345678",
        remember_me: true,
      },
      items: [],
      onStore:0,
      page: 1,
      perPage: 10,
    };
  },
  props:{
    fetchUser: Function
  },
  methods: {
    onButtonTap() {},
    showDetails(item) {
        console.log('show details', this.$store.state.auth.user);
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
    horizontalPercentFunc(event){
      const events = this.horizontalPercent(event);
      if(events.percent ==100){
        const count = this.items.length;
        const total = this.$store.getters['property/totalLoad'];
        if(count == total){
          this.page ++;
          console.log(this.page);
          this.fetchProperties();
          console.log('99percent');
        }
      }
    },
    async onDrawerButtonTap() {
      utils.showDrawer();
      // axios.post('https://realstate.kratoxxsoft.com/api/auth/login', this.form).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)});
      // console.log(this.$store.state.auth.user, 'desde home');
    },
    async onButtonTap() {

    },
    async fetchProperties(){
       const data = await this.$store.dispatch('property/index', {
        params: {
          page: this.page,
          per_page: this.perPage,
          limit: this.perPage,
          offset: this.page == 1 ? 0 : (this.page - 1) * this.perPage,
          search: ''
        },
      });
      this.items.push(...data.data);


      console.log('desde componente', data);
      // console.log('desde componente', this.items);
      // console.log('desde componentereverse', this.items.reverse());
    }

  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>
