import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      inputInEuroAmount: null,
      rates: {},
      conversionFactor1: null,
      conversionFactor2: null,
      inputInOtherCurrency: null
    },
    mounted() {
      this.getRates()
    },
    computed: {
      convertFromEuros: function(){
        return (this.inputInEuroAmount * this.conversionFactor1);
      },
      convertToEuros: function(){
        return (this.inputInOtherCurrency / this.conversionFactor2);
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
    },
    filters: {
      formatOutput: function(value){
        return value.toFixed(2);
      }
    }
  })
})
