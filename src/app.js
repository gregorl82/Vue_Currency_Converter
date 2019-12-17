import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      inputAmount: null,
      rates: {},
      conversionFactor: null
    },
    mounted() {
      this.getRates()
    },
    methods: {
      getRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then((data) => {
          this.rates = data.rates
        })
      }
    }
  })
})
