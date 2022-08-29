import IntroObject from './components/intro/IntroTypes'
import { EducationsObject } from './components/education/EducationTypes'
import { ExperiencesObject } from './components/experiences/ExperienceTypes'
import { LanguagesObject } from './components/languages/LanguageTypes'
import FooterObject from './components/footer/FooterTypes'
import AboutObject from './components/about/AboutTypes'

interface ContentObject {
  name: string;
  background: string;
  logo: string;
  intro?: IntroObject;
  about?: AboutObject;
  education?: EducationsObject;
  experiences?: ExperiencesObject;
  languages?: LanguagesObject;
  footer?: FooterObject
}

export default ContentObject