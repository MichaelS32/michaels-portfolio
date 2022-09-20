import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
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
                <div className="card portfolio-card card-width row">
                    <div className="card-body col-11 col-sm-10 col-md-9 col-lg-8 col-xl-8">
                        <h1 className="card-title form-text-1">Contact me</h1>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='center'>Name:</label>
                                <input type="text" name="name" className='form-input' defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='center'>Email address:</label>
                                <input type="email" name="email" className='form-input' defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className='center'>Message:</label>
                                <textarea name="message" rows="5" className='form-input' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button data-testid="button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;