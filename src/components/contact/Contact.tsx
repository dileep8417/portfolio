import React from 'react';
import './Contact.css';
import Section from '../wrappers/Section';
import { contactDetails } from './contact.data';

const Contact = function() {
    return (
        <Section heading='Get In Touch' sectionId='contact-section'>
            <div className="contact-section">
                <div className="left">
                    <p>Do you have anything to share? Feel free to reach out to me.</p>
                    <form>
                        <div className="form-field">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" id="email" placeholder='yourmail@domain.com' required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Message for me <span>(Optional)</span></label>
                            <textarea id="message" placeholder='Please type here...'></textarea>
                        </div>

                        <button className='btn btn-primary form-submit-btn'>Get in touch</button>
                    </form>
                </div>

                <div className="right">
                    <h2>Available on</h2>
                    {contactDetails.map((contact, index) => {
                        return (
                            <a key={index} href={contact.url} target='_blank'>
                                <div className="icon-container">
                                    <img src={contact.icon} />
                                    {contact.value}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

export default Contact;