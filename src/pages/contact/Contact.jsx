import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'
import { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com'

const Contact = ({ isVisible }) => {

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
// enter your email js id here
    emailjs.sendForm('service_pkijp0i', 'template_ew6i8md', form.current, 'juPAIDUSogv2tWdEl', { user_email: e.target.email.value })
    e.target.reset()
  };
  return (
    <>
      <ContentInOut isVisible={isVisible} id="contact">
        <div className=" min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-4 overflow-y-auto">
          <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
            <span className="text-[var(--text-1)] relative">G<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
            </span>et in Touch
          </h1>

          <div className="grid lg:grid-cols-2 my-12  font-semibold text-left text-base" style={{ fontFamily: "var(--poppin) !important" }}>
            <p>ADDRESS. . . . .<span className='text-[var(--text-2)] text-lg'> Karachi, Pakistan.</span></p>
            <p>EMAIL. . . . .<span className='text-[var(--text-2)] text-base '> malikruhama7@gmail.com </span></p>
            <p>PHONE. . . . .<span className='text-[var(--text-2)] text-lg '> +92162446746</span></p>
            <p>FREELANCE. . . . .<span className='text-[var(--text-2)] text-lg'> AVAILABLE</span></p>
          </div>

          <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
            <span className="text-[var(--text-1)] relative">C<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
            </span>onctact Form
          </h1>

          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 text-base'>
          <input type="text" name='name' placeholder='Your Full Name' required className='py-4 bg-transparent border-b border-b-[var(--text-2)] outline-0 border-0 focus:border-b-[var(--text-1)] focus:text-[var(--text-1)] ' />
          <input type="email" name="email" placeholder='Your Email' required className='py-4 bg-transparent border-b border-b-[var(--text-2)] outline-0 border-0 focus:border-b-[var(--text-1)] focus:text-[var(--text-1)] ' />
          <textarea name="message" rows="7" placeholder='Your Message' required className='py-4 bg-transparent border-b border-b-[var(--text-2)] outline-0 border-0 focus:border-b-[var(--text-1)] focus:text-[var(--text-1)] '></textarea>
          <button type='submit' className='btn !border-t-0 hover:!border-t-0 text-center xl:text-left '>Send Message</button>
        </form>

        </div>
      </ContentInOut>
    </>
  )
}

export default Contact
