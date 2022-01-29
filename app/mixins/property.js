import intl from "nativescript-intl";
export default {
  data(){
    return{
      items: [],
      rents: [],
      sales: [],
      onStore:0,
      page: 1,
      perPage: 10,
    }
  },
  methods: {
    horizontalPercent(event) {
      console.log('scrollX',event.scrollX);
      const scrollX = event.scrollX;
      console.log('scrollX full width',event.object.scrollableWidth);
      const scrollWidth = event.scrollableWidth;
      console.log('Percent', event.scrollX/event.object.scrollableWidth*100);
      const percent = event.scrollX/event.object.scrollableWidth*100;
      const map = {
        percent : percent,
        scrollX : scrollX,
        scrollWidth : scrollWidth,
      }
      return map;
    },

    async fetchPropertiesRent(){
      const data = await this.$store.dispatch('property/index', {
       params: {
         page: this.page,
         per_page: this.perPage,
         limit: this.perPage,
         offset: this.page == 1 ? 0 : (this.page - 1) * this.perPage,
         search: '',
         origin: 'rent'

       },
     });
     this.rents.push(...data.data);


    //  console.log('desde componente', data);
     // console.log('desde componente', this.items);
     // console.log('desde componentereverse', this.items.reverse());
   },
    async fetchPropertiesSale(){
      const data = await this.$store.dispatch('property/index', {
       params: {
         page: this.page,
         per_page: this.perPage,
         limit: this.perPage,
         offset: this.page == 1 ? 0 : (this.page - 1) * this.perPage,
         search: '',


       },
     });
     this.sales.push(...data.data);


    //  console.log('desde componente', data);
     // console.log('desde componente', this.items);
     // console.log('desde componentereverse', this.items.reverse());
   },
  },
}
