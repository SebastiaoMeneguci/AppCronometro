import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #8e6307;
`;

export const BackGround = styled.View`
    flex: 1;
    background-color: #b66809;
    top: 70px;
    border-radius: 30px;
    align-items: center;
`;

export const Image = styled.Image`
    height: 300px;
    width: 250px;
    top: 100px;
`;

export const TextTimer = styled.Text`
    font-size: 28px;
    top: -40px;
    font-style: bold;
    color: #FFF;
`;

export const BtnArea = styled.View`
    flex-direction: row;
    margin-top: 130px;
`;

export const BtnIniciar = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    border-radius: 7px;
    background-color: #089021;
    align-items: center;
    justify-content: center;
    margin: 17px;
`;

export const BtnLimpar = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    border-radius: 7px;
    background-color: #6676089d;
    align-items: center;
    justify-content: center;
    margin: 17px;
`;

export const BtnText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #FFFF;
`;

export const UltimoTempoArea = styled.View`
`;

export const TextoUltimoTempo = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFFF;
`;