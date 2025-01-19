import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from 'antd';
import React from 'react';

const CheckOutForm = ({ paymentInfo, setIsModalOpen }) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-around mt-2 gap-2'>
                    <Button className='bg-blue-500 hover:bg-blue-400 text-white'
                        // disabled={!stripe || !clientSecret || processing}
                        type='submit'
                    >Pay</Button>
                    <Button onClick={()=>setIsModalOpen(false)} outline={true} label={'Cancel'} >Cancel </Button>
                </div>
            </form>
            {/* <button
              onClick={setIsModalOpen(false)}  
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded mt-4"
            >
                Close
            </button> */}
        </>
    );
};

export default CheckOutForm;