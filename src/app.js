import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: []
    },
    mounted() {
      fetchCurrency();
    },
    methods: {
       fetchCurrency: function(){
          fetch('https://api.exchangeratesapi.io/latest')
          .then(response => response.json())
  }
}
})
})
