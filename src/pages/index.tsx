import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Cookies from "universal-cookie";

import Layout from "../components/layout";

import Hero from "../components/index-components/hero-1";
import WhatsAppStickyButton from "../components/index-components/WhatsAppStickyButton";
import Section1 from "../components/index-components/fuelProject-2";
import Section2 from "../components/index-components/partners-3";
import Section3 from "../components/index-components/worldmap-4";
import Section4 from "../components/index-components/collabModels-5";
import Section5 from "../components/index-components/companyRely-6";
import Section6 from "../components/index-components/testimonials-7";
import Section7 from "../components/index-components/technologies-8";
import Section8 from "../components/index-components/industries-9";
import Section9 from "../components/index-components/itConsultation-10";
import DiscussModalForm from "../components/index-components/discussProject";

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // For modal

  const [formSubmitted, setFormSubmitted] = useState(false);

  const cookies = new Cookies();

  useEffect(() => {
    // This code will only run on the client side
    let params = new URLSearchParams(window.location.search);
    let referrer = params.get("referrerId");

    console.log(cookies.get("referrerId") === "null");
    console.log(referrer);

    if (referrer !== null) {
      cookies.set("referrerId", referrer, { path: "/" });
    }
  }, []);

  return (
    <Layout modalOpen={onOpen}>
      <Hero onOpen={onOpen} />
      <WhatsAppStickyButton />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <DiscussModalForm
        isOpen={isOpen}
        onClose={onClose}
      />
    </Layout>
  );
}
