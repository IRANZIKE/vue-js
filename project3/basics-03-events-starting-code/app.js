const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    sumitForm (event){
    alert('Submitted')
    },
    setName (event, lastName){
      this.name= event.target.value+" "+ lastName
    },
    add(num) {
      this.counter = this.counter + num
    },

    remove(num) {
      this.counter = this.counter - num
    }

  },
});

app.mount('#events');
