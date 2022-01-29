<template>
  <StackLayout>
    <GridLayout
      class="room-list-header"
      rows="auto"
      columns="*,auto"
      height="30"
    >
      <Label class="h2" text="En renta" row="0" col="0" colspan="6"></Label>
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
      <StackLayout orientation="horizontal">
        <StackLayout
          class="first-child room"
          width="135"
          @tap="showDetails(item)"
          pageTransition="fade"
          v-for="item in rents"
          :key="item.id"
        >
          <Image
            style="border-radius: 10"
            height="100"
            :src="
              item.image
                ? item.image
                : 'https://cdn.pixabay.com/photo/2018/11/10/22/57/mountain-3807667_960_720.jpg'
            "
          />
          <StackLayout
            height="11"
            class="stars"
            orientation="horizontal"
            style="padding-left: 15px"
          >
            <Image height="11" src.decode="font://&#11088;" />
            <Image height="11" src.decode="font://&#11088;" />
            <Image height="11" src.decode="font://&#11088;" />
            <Image height="11" src.decode="font://&#11088;" />
            <Image height="11" src.decode="font://&#11088;" />
          </StackLayout>
          <Label
            style="padding-left: 10px"
            class="h3"
            height="23"
            :text="'$' + numberFormat(item.price) + '.00'"
          ></Label>
          <Label
            style="padding-left: 10px"
            height="20"
            :text="item.address"
          ></Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import NumberFormat from "../../mixins/numberFormat";
import eventScroll from "../../mixins/eventScroll";
import propertyMixin from "../../mixins/property";
import Details from "../Details";

export default {
  mixins: [NumberFormat, eventScroll, propertyMixin],
  methods: {
    showDetails(item) {
      console.log("show details", this.$store.state.auth.user);
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
      // console.log('horizontalPercentFunc', events);

      if(events.percent ==100){
        const count = this.rents.length;
        const total = this.$store.getters['property/totalLoadRent'];
        console.log('total', total);
        console.log('count', count);
        if(count == total){
          this.page ++;
          console.log(this.page);
          this.fetchPropertiesRent();
          console.log('99percent');
        }
      }
    },
  },
  created() {
    this.fetchPropertiesRent();;
  },
};
</script>

<style scoped>
.content {
  padding: 32 0 0 0;
}

.content .h1,
.content .h2 {
  padding-left: 18;
}

.room-list-header {
  margin-top: 24;
}

.see-all {
  color: #979797;
  font-size: 10pt;
  font-weight: 600;
  text-align: right;
}

.rooms {
  margin-top: 18;
}

.room {
  padding-right: 12;
}

.room.first-child {
  margin-left: 18;
}

.room .h2 {
  padding-left: 0;
}

.room Image {
  border-radius: 12;
}

.room Label.h2 {
  color: #ce9f70;
  margin-top: 8.29;
}

.stars {
  margin-top: 2;
  margin-bottom: 2;
}

.stars Image {
  padding-right: 1.71;
}
</style>
