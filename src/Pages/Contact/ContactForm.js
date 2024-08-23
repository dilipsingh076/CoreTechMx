import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send(
                'your_service_id', // Replace with your EmailJS service ID
                'your_template_id', // Replace with your EmailJS template ID
                data,
                'your_user_id' // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    reset(); // Reset form fields after submission
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl mx-auto p-8 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">CONTACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    className="p-2 rounded bg-white text-gray-800"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                <input
                    type="text"
                    placeholder="Phone"
                    {...register('phone', { required: 'Phone is required' })}
                    className="p-2 rounded bg-white text-gray-800"
                />
                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}

                <input
                    type="email"
                    placeholder="Email address"
                    {...register('email', { required: 'Email is required' })}
                    className="p-2 rounded bg-white text-gray-800"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <textarea
                placeholder="Message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 rounded bg-white text-gray-800 mb-4"
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            <div className="text-center">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    CONTACT US
                </button>
            </div>
        </form>
    );
};

export default ContactForm;