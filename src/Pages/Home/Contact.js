import React from 'react';

const Contact = () => {
    return (
        <section>
          <div className="w-1/2 mx-auto py-6">
            <h2 className="text-violet-800 text-center text-4xl font-semibold my-6">Connect with Us</h2>
            <form  className='bg-white px-4 py-6 rounded-md shadow-md'>
              <div>
              <label className="text-violet-800">Name</label> <br />
              <input type="text" name="user_name" className="border-0 bg-transparent border-b-2 border-b-violet-800 w-full text-black focus:outline-none"/>
              </div>
              <div>
              <label className="text-violet-800">Email</label> <br />
              <input type="email" name="user_email" className="border-0 bg-transparent border-b-2 border-b-violet-800 w-full text-black focus:outline-none"/>
              </div>
              <div>
              <label className="text-violet-800">Message</label> <br />
              <textarea name="message" className="border-0 bg-transparent border-b-2 border-b-violet-800 w-full text-black focus:outline-none"/> <br />
              <input className="text-white px-5 py-2 bg-violet-800 rounded-sm w-full" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </section>
    );
};

export default Contact;