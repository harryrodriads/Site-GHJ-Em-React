// pages/HomePage.jsx
import React from 'react';
import { HeaderBar } from '../Header';
import { Banner } from './banner';
import { Section } from './sectionOne';
import { SectionProjects } from './sectionProjects';
import { SectionForm } from './sectionForm';
import { SectionText } from './sectionText';
import { Footer } from '../Footer';


export const Home = () => {
  return (
    <div>
      <HeaderBar />
      <Banner/>
      <Section/>
      <SectionProjects/>
      <SectionText/>
      <SectionForm/>
      <Footer/>
    </div>
  )
}
