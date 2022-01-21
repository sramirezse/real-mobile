export default {
  data(){
    return{

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
    }
  },
}
