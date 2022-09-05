import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">

            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: michael1990spw@gmail.com</li>
              <li className="contact-item">Phone: +43 677 62350934</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
