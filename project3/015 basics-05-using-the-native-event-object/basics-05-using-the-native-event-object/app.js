const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = "";
      } else {
        this.fullname = value + ' ' + Schwarzmuller;
      }
    },
  },
  computed: {
    // fullname (){
    //   console.log('Running again...');
    //   if (this.name === ''){
    //     return '';
    //   }
    //   return this.name+ '' + 'Schwarzmuller';
    // }
  },
  methods: {
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + '' + 'Schwarzmuller';
    },
    resetInput() {
      this.name = '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');