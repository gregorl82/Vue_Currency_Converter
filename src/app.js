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
    computed: {
      convertFromEuros: function(){
        return (this.inputAmount * this.conversionFactor)
      }
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
