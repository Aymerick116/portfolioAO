import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLine from './AnimatedLine';






const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <a
            href="https://www.linkedin.com/in/aymerick-osse-9722b2173"
            className="mx-2 hover:text-violet-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            className="mx-2 hover:text-violet-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/Aymerick116"
            className="mx-2 hover:text-violet-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </footer>
    );
  };
  

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aatg7lk', 'template_z1chns7', form.current, 'ZuMI9RkULBEAyfgNM')
      .then((result) => {
          console.log(result.text);
          alert("Email sent!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center  ">
        <h1  className="text-4xl font-bold mt-8 mb-4 text-white " >Contact</h1>
    </div>
    <div className="flex items-center justify-center mb-8">
  
      <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-violet-500">Contact me</h2>

        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input type="text" name="user_name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-violet-500" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" name="user_email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-violet-500" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600">Message</label>
          <textarea name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-violet-500" rows="4"></textarea>
        </div>

        <button type="submit" className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none">
          Send
        </button>
        
      </form>
      
    </div >
  
    <AnimatedLine/>
       <Footer/>
    </>
  );
};

export default Contact;
