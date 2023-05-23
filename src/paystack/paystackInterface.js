import PaystackPop from '@paystack/inline-js';
import { toast } from 'react-hot-toast';

export const handlePayment = (email, amount) => {
  const paystack = new PaystackPop();
paystack.newTransaction({
	key: 'pk_test_e2f11bcc6e8ba94bb218a9b03bae850b9cb06092',
  email,
  amount: amount * 100,


  onSuccess: function (transaction) { 
    const message =  `Payment complete! Reference: ${transaction.reference}`
    toast.success(message)
  },
  onCancel: (response) => {
    toast.error(`Cancelled ${response.reference}`)
  }
});

  
}