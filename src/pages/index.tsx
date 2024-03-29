import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar/NavBar'
import Bg from '../components/background/Background'
import About from '../components/about/About'
import Intro from '../components/intro/Intro'
import Languages from '../components/languages/Languages'
import Educations from '../components/education/Eductaions'
import Footer from '../components/footer/Footer'
import Experiences from '../components/experiences/Experiences'

import ContentObject from '../contentType'

const Home: NextPage = () => {

  const contentJSON: JSON = require("../conent.json");
  const content: ContentObject = JSON.parse(JSON.stringify(contentJSON));
  const title = `${content.name} | Software Engineer`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='Portfolio' content='A portfolio website' />
        <link rel='icon' href='images/T_logo.png' />
      </Head>

      <Bg />
      <NavBar content={content}/>
      {content.intro ? <Intro data={content.intro} name={content.name} /> : <></>}
      {content.about ? <About data={content.about} /> : <></>}
      {content.education ? <Educations data={content.education} /> : <></>}
      {content.experiences ? <Experiences data={content.experiences} /> : <></>}
      {content.languages ? <Languages data={content.languages} /> : <></>}
      {content.footer ? <Footer data={content.footer} /> : <></>}
    </>
  )
}

export default Home
