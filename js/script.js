const app = new Vue({
   el: '#app',

   data: {
      isLoading: false,
      httpError: false,
      mails: [],
      MAIL_QUANTITY: 10

   },

   mounted() {
      
      this.getMails();
      
   },

   methods: {
      getMails() {
         
         this.getFromApi();

   
         // axios
         // -> se vuoi continuare richami axios
         //    -> se vuo continarue richiami axios
         
      },
      
      getFromApi() {

         this.isLoading = true;
         
         axios.get('htps://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
            
            const data = response.data;
            
            this.mails.push(data.response);
            if (this.mails.length === this.MAIL_QUANTITY) {
               this.isLoading = false;
               console.log('loading', this.isLoading);
            }
            if (!this.httpError && this.isLoading) {
               this.getMails();
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