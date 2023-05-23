import React from "react";

import {
  useDisclosure,
} from '@chakra-ui/react';

import Layout from "../components/layout";

import Hero from '../components/index-components/hero-1';
import Section1 from '../components/index-components/fuelProject-2'
import Section2 from '../components/index-components/partners-3'
import Section3 from '../components/index-components/worldmap-4'
import Section4 from '../components/index-components/collabModels-5'
import Section5 from '../components/index-components/companyRely-6'
import Section6 from '../components/index-components/testimonials-7'
import Section7 from '../components/index-components/technologies-8'
import Section8 from '../components/index-components/industries-9'
import Section9 from '../components/index-components/itConsultation-10'
import DiscussModalForm from '../components/index-components/discussProject'

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure() // For modal

  return (
    <Layout modalOpen={onOpen}>
      <Hero onOpen={onOpen} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <DiscussModalForm isOpen={isOpen} onClose={onClose} />
    </Layout >
  )
}
