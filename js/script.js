const app = new Vue({
   el: '#app',

   data: {
      isLoading: true,
      httpError: false,
      mails: [],
      MAIL_QUANTITY: 10

   },

   mounted() {
      
      this.getMails();
      
   },

   methods: {
      getMails() {
         
         this.isLoading = true;

         for (let i = 0; i < this.MAIL_QUANTITY; i++) {
         
            // stampo mail solo se ho raccolto 'MAIL_QUANTITY' MAIL
            if (!this.httpError) {
               this.getFromApi();
            } 
         }
         
      },
      
      getFromApi() {
         
         axios.get('https://flynn.boolean.careers/exercises/api/random/mal')
         .then((response) => {
            
            const data = response.data;
            
            this.mails.push(data.response);
            if (this.mails.length === this.MAIL_QUANTITY) {
               this.isLoading = false;
               console.log('loading', this.isLoading);
            }
   
         })
         .catch((error) => {
            console.log('errore http', error);
            this.httpError = true;
         });
   
         // axios
         // -> se vuoi continuare richami axios
         //    -> se vuo continarue richiami axios
      }
   }

});