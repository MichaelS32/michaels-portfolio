import React, { useState } from 'react';
import apiKey from '../../emailKey.js'
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperAirplane } from '@fortawesome/free-svg-icons';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section id="contact">
            <div className='container center'>
                <div className="card portfolio-card row">
                    <div className="">
                        <h1 className="card-title form-text-1 spacing">Contact me</h1>
                        <form id="contact-form" className='form-container' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='center form-text-1'>Name:</label>
                                <input type="text" name="name" className='form-input' defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='center form-text-1'>Email address:</label>
                                <input type="email" name="email" className='form-input' defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className='center form-text-1'>Message:</label>
                                <textarea name="message" rows="5" className='form-input' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button data-testid="button" type="submit" className='submit-btn'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;