import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStore } from './hooks/useStore.ts'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowsIcon } from './components/Icons.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './types'

function App () {
  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interChangeLanguages } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
