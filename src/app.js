import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: {},
      inputInEuroAmount: null,
      inputInOtherCurrency: null,
      inputForNonBase: null,
      conversionFactorFromEuros: null,
      conversionFactorToEuros: null,
      conversionFactorFromNonBase: null,
      conversionFactorToNonBase: null
    },
    mounted() {
      this.getRates()
    },
    computed: {
      convertFromEuros: function(){
        return (this.inputInEuroAmount * this.conversionFactorFromEuros);
      },
      convertToEuros: function(){
        return (this.inputInOtherCurrency / this.conversionFactorToEuros);
      },
      convertNonBase: function(){
        return (this.inputForNonBase / this.conversionFactorFromNonBase * this.conversionFactorToNonBase)
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
