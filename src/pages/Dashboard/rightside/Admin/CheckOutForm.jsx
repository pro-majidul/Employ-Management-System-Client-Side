import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import useSecureAxios from '../../../../hooks/useSecureAxios';
import './from.css'
import useAuth from '../../../../hooks/UseAuth';
import Swal from 'sweetalert2';

const CheckOutForm = ({ paymentInfo, refetch, setIsModalOpen }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useSecureAxios()
    const [clientSecret, setClientSecret] = useState('')
    const [errors, setErrors] = useState('')
    const [transaction, setTransaction] = useState('')
    const { user } = useAuth()
    // console.log(paymentInfo.salary)

    useEffect(() => {
        if (paymentInfo.salary > 0) {
            // createPaymentIntent()
            axiosSecure.post('/create-payment-intent', { price: paymentInfo.salary })
                .then(res => {

                    // console.log(res);
                    setClientSecret(res?.data?.ClientSecret)
                })



        }
    }, [paymentInfo.salary, axiosSecure])

    // console.log(clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            // console.log('error message is', error)
            setErrors(error.message)
        } else {
            console.log('paymentMethod is', paymentMethod)
            setErrors('')
        }


        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })

        console.log(stripe)
        if (paymentError) {
            console.log('paymentError ', paymentError);
        } else {
            // console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id);
                // now save tha payment info in database
                const paymentdata = {
                    transaction: paymentIntent?.id,
                    date: new Date(),
                    id: paymentInfo._id,
                    salary: paymentInfo.salary,
                    isPayment: true,
                }
                console.log(paymentdata);

                const res = await axiosSecure.patch('/payrole', paymentdata);
                console.log('payment users history,modifiedCount', res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    setIsModalOpen(false)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks For Your Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
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
                        disabled={!stripe || !clientSecret}
                        htmlType="submit"
                    >Pay</Button>
                    <Button onClick={() => setIsModalOpen(false)} outline={true} label={'Cancel'} >Cancel </Button>
                </div>
            </form>

        </>
    );
};

export default CheckOutForm;