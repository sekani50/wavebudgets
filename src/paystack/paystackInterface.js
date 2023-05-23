export const handlePayment = (email, amount) => {
    const handler = PaystackPop.setup({
        key: 'pk_test_e2f11bcc6e8ba94bb218a9b03bae850b9cb06092', 
        email,
        amount: amount * 100,
       
        onClose: function(){
          alert('Window closed.');
        },
        callback: function(response){
          const message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });

      handler.openIframe();
}