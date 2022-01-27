import intl from "nativescript-intl";
export default {
  data(){
    return{
      items: [],
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
    horizontalPercentFunc(event){
      const events = this.horizontalPercent(event);
      // console.log('horizontalPercentFunc', events);

      if(events.percent ==100){
        const count = this.items.length;
        const total = this.$store.getters['property/totalLoad'];
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
    async fetchPropertiesRent(){
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


    //  console.log('desde componente', data);
     // console.log('desde componente', this.items);
     // console.log('desde componentereverse', this.items.reverse());
   }
  },
}
