import { useState } from 'react'

import Menu from './menu'
import Conteudo from './conteudo'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { temaClaro, temaEscuro } from '../theme/theme'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Site = () => {

    const [ tema, setTema ] = useState( temaEscuro )
    const [ escuro, setEscuro ] = useState( true )


    const alterarTema = () => {
        if (escuro) 
            setTema( temaClaro )
        else
            setTema( temaEscuro )

        setEscuro( !escuro )
    }



    return (
        <ThemeProvider theme={ tema }>
            <CssBaseline />
            <Menu tema={ alterarTema } />
        <Carousel 
                autoplay={ true }
                infiniteLoop={ true }
                interval={ 2000 }
            >
                <div>
                    <img alt="1" src="https://vitoriasupervarejo.com.br/wp-content/uploads/2017/07/banner-topo.png" />
                    <p className="legend">Sempre o melhor para você e sua família</p>
                </div>
                <div>
                    <img alt="1"  src="https://supermillas.com.br/wp-content/uploads/2020/02/banner.png" />
                    <p className="legend">Economia de verdade você encontra aqui</p>
                </div>
                <div>
                    <img alt="1"  src="https://ojilo.com.br/arquivos_personalizados/uploads/noticias/fotos/POST_5da0848ba0b5d.jpg" />
                    <p className="legend">Toda terça e quarta tem hortifruti com tudo fresquinho</p>
                </div>
            </Carousel>

            <Conteudo />            
        </ThemeProvider>
    )
}

export default Site