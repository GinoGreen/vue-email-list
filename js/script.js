const app = new Vue({
   el: '#app',

   data: {
      isLoading: true,
      httpError: false,
      mails: [],
      MAIL_QUANTITY: 3

   },

   mounted() {
      
      this.getMails();
      
   },

   methods: {
      getMails() {
         
         this.isLoading = true;

         for (let i = 0; i < this.MAIL_QUANTITY; i++) {
         
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
               .then((response) => {
               
                  const data = response.data;
   
                  this.mails.push(data.response);

                  // stampo mail solo se ho raccolto 'MAIL_QUANTITY' MAIL
                  if (this.mails.length === this.MAIL_QUANTITY) this.isLoading = false;
               })
               .catch((error) => {
                  console.log('errore http', error);
                  //stop ciclo se error http
                  i = this.MAIL_QUANTITY;
                  console.log(i);
                  this.httpError = true;
               });
         }
         
      }
   }
});