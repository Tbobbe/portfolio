import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar/NavBar'
import Bg from '../components/background/Bg'
import About from '../components/about/About'
import Intro from '../components/intro/Intro'
import Languages from '../components/languages/Languages'
import Education from '../components/education/Eductaion'
import Footer from '../components/footer/Footer'
import Experiences from '../components/experiences/Experiences'

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Tobias | Software Engineer</title>
        <meta name='description' content='Placeholder content' />
        <link rel='icon' href='/../public/favicon.ico' />
      </Head>

      <Bg />
      <Intro/>
      <NavBar />
      <About />
      <Education />
      <Experiences />
      <Languages />
      <Footer />
    </>
  )
}

export default Home
