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
         
      },
      
      getFromApi() {
         
         //inizio il loading
         this.isLoading = true;
         
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
            
            const data = response.data;
            
            this.mails.push(data.response);

            //stop loading se array é pieno
            if (this.mails.length === this.MAIL_QUANTITY) this.isLoading = false;
               // console.log('loading', this.isLoading);

            // richiamo se stesso finché se non ci sono errori e il loading é ancora in corso
            if (!this.httpError && this.isLoading) this.getMails();

         })
         .catch((error) => {
            console.log('errore http', error);
            //errore
            this.httpError = true;
         });
   
      }
   }

});