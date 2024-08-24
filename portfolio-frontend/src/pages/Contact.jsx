import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <section className="contact-container container">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-content">
                <p>Feel free to reach out if you have any questions or would like to collaborate on a project.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('/api/contact', formData)
//             .then(() => alert('Form submitted successfully!'))
//             .catch((err) => alert('Form submission failed.'));
//     };

//     return (
//         <section className="bg-gray-900 text-white p-8">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl mb-4">Contact Me</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-lg mb-2">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full p-2 rounded bg-gray-800"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-lg mb-2">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full p-2 rounded bg-gray-800"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-lg mb-2">Message</label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="w-full p-2 rounded bg-gray-800"
//                             rows="5"
//                         />
//                     </div>
//                     <button type="submit" className="bg-blue-500 p-2 rounded">Send</button>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default Contact;
