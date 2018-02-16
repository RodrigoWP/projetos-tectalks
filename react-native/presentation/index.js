import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import johnTravoltaPerdido from '../assets/john-travolta-perdido.png'
import reconciliation from '../assets/reconciliation.jpg'
import reconciliationRn from '../assets/reconciliation-rn.jpg'
import gatinhoDigitando from '../assets/gatinho-digitando.gif'
require('normalize.css')

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            React Native
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            Aprenda uma vez, escreva em qualquer lugar
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary'>
            O que é React Native/Porque ele existe?
          </Heading>
          <img src={johnTravoltaPerdido} />
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Permite que você use REACT para fazer aplicativos nativos para IOS e Android
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
          Write once, run anywhere
          </Heading>
          <Heading size={6} textColor='primary'>
            X
          </Heading>
          <Heading size={6} textColor='primary'>
            Learn onde, write anywhere
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Permite utilizar os mesmos principios do desenvolvimento web
          </Heading>
          <Text size={6} textColor='primary'>
            Composição e UI declarativa
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Pode ser muito vantagoso sendo necessário apenas uma equipe de UI
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary'>
            Descobrindo o React Native
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Virtual DOM
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
              Inicia quando chamado setState()
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Reconciliação
          </Heading>
          <Text size={6} textColor='primary'>
            Tem como objetivo final atualizar a UI com base nesse novo estado da maneira mais eficiente possível.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Reconciliação (Na web)
          </Heading>
          <img src={reconciliation} />
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Reconciliação (No React Native)
          </Heading>
          <img src={reconciliationRn} />
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Hands On
          </Heading>
          <img src={gatinhoDigitando} />
        </Slide>

        {/*hands on*/}
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Web x Nativo
          </Heading>
          <Text textSize={30} textColor='primary'>
            Aplicações fundamentalmente diferentes
          </Text>
          <List>
            <ListItem textSize={30}>Animações</ListItem>
            <ListItem textSize={30}>Navegação</ListItem>
            <ListItem textSize={30}>Android x IOS (Barra de navegação e Abas inferiores)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Componentes comuns do React Native
          </Heading>
          <Text textSize={30} textColor='primary'>
            Componentes fornecidos pelo React Native
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            AsyncStorage
          </Heading>
          <Text textSize={30} textColor='primary'>
            Sistema de armazenamento simples
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Redux e React Native
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Estilo e Layout
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Navigation
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <Heading size={6} textColor='primary'>
            Recursos Nativos
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={6} textColor='primary'>
            Alguns links
          </Heading>
          <br />
          <Text textSize={30} textColor='primary'>
            https://github.com/RodrigoWP/react-native-talk
          </Text>
          <br />
          <Text textSize={30} textColor='primary'>
            http://formidable.com/open-source/spectacle
          </Text>
          <BlockQuote>
            <Cite>Rodrigo Wippel</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
