import React, { useState } from "react";

import {
    Container,
    BackGround,
    Image,
    TextTimer,
    BtnArea,
    BtnIniciar,
    BtnLimpar,
    BtnText,
    UltimoTempoArea,
    TextoUltimoTempo
} from "./Index.styled";

let timer: string | number | NodeJS.Timeout | null | undefined = null;
let ss = 0;
let mm = 0;
let hh = 0;

function Home() {
    const [timerNumero, setTimerNumero] = useState('00:00:00')
    const [botao, setBotao] = useState('INICIAR')
    const [ultimoTimer, setUltimoTimer] = useState('')


    function iniciar() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            setBotao('INICIAR')
        } else {
            timer = setInterval(() => {
                ss++;

                if (ss == 60) {
                    ss = 0;
                    mm++;
                }

                if (mm == 60) {
                    mm = 0;
                    hh++;
                }

                let format = (hh < 10 ? '0' + hh : hh) + ":"
                    + (mm < 10 ? '0' + mm : mm) + ":"
                    + (ss < 10 ? '0' + ss : ss);

                setTimerNumero(format)
            }, 1000)
            setBotao("PARAR")
        }
    }

    function limpar() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        setUltimoTimer(timerNumero)
        setTimerNumero('00:00:00')
        ss = 0;
        mm = 0;
        hh = 0;
        setBotao("INICIAR")
    }

    return (
        <Container>
            <BackGround>
                <Image source={require('./../Images/crono.png')} />
                <TextTimer>{timerNumero}</TextTimer>
                <BtnArea>
                    <BtnIniciar onPress={iniciar}>
                        <BtnText>{botao}</BtnText>
                    </BtnIniciar>

                    <BtnLimpar onPress={limpar}>
                        <BtnText>LIMPAR</BtnText>
                    </BtnLimpar>
                </BtnArea>

                <UltimoTempoArea>
                    <TextoUltimoTempo>{ultimoTimer ? "Ultimo Tempo: " + ultimoTimer : ''}</TextoUltimoTempo>
                </UltimoTempoArea>
            </BackGround>
        </Container>
    )
}

export default Home