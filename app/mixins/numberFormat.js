export default {
  data(){
    return{

    }
  },
  methods: {
    numberFormat(number) {
      return new Intl.NumberFormat('en-US').format(number);
    }
  },
}
