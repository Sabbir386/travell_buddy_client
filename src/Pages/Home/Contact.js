import React from 'react';

const Contact = () => {
    return (
        <section>
          <div className="w-1/2 mx-auto py-6">
            <h2 className="text-red-500 text-center text-4xl font-semibold my-6">Connect with Us</h2>
            <form >
              <div>
              <label className="text-white">Name</label> <br />
              <input type="text" name="user_name" className="border-0 bg-transparent border-b-2 border-b-red-500 w-full text-white focus:outline-none"/>
              </div>
              <div>
              <label className="text-white">Email</label> <br />
              <input type="email" name="user_email" className="border-0 bg-transparent border-b-2 border-b-red-500 w-full text-white focus:outline-none"/>
              </div>
              <div>
              <label className="text-white">Message</label> <br />
              <textarea name="message" className="border-0 bg-transparent border-b-2 border-b-red-500 w-full text-white focus:outline-none"/> <br />
              <input className="text-white px-5 py-2 bg-red-500 rounded-sm w-full" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </section>
    );
};

export default Contact;