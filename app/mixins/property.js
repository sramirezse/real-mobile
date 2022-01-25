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


    //  console.log('desde componente', data);
     // console.log('desde componente', this.items);
     // console.log('desde componentereverse', this.items.reverse());
   }
  },
}
