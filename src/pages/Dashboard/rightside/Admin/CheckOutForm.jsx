// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import UsetansTackQuery from "../../hooks/UsetansTackQuery";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useUsers from "../../hooks/useUsers";

// const CheckOutForm = () => {

//     const handelSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }


//         const card = elements.getElement(CardElement)
//         if (card == null) {
//             return
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if (error) {
//             console.log('error message is', error)
//             setErrors(error.message)
//         } else {
//             console.log('paymentMethod is', paymentMethod)
//             setErrors('')
//         }

//         const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     name: users?.name || 'anonymous',
//                     email: users?.email || 'anonymous'
//                 }
//             }
//         })
//         if (paymentError) {
//             console.log('paymentError ', paymentError);
//         } else {
//             console.log("paymentIntent", paymentIntent);
//         }




//     }


//     return (
//         <form onSubmit={handelSubmit}>
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}


//             />
//             <button className="btn btn-primary btn-sm my-4" type="submit" disabled={!stripe || !clientSecret}>
//                 Pay
//             </button>
//             <p className="text-red-500">{errors}</p>


//         </form>

//     );
// };

// export default CheckOutForm;