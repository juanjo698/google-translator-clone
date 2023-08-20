import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore.ts'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowsIcon } from './components/Icons.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx'
import { SectionType } from './enum.ts'
import { TextArea } from './components/TextArea.tsx'

function App () {
  const { fromLanguage, toLanguage, fromText, result, loading, setResult, setFromText, setFromLanguage, setToLanguage, interChangeLanguages } = useStore()

  return (
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>

        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
