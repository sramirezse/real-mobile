import intl from "nativescript-intl";
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
