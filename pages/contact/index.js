import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="You can contact me sending messages"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
