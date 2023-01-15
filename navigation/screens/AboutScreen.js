import * as React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

            <Text style={{ fontSize: 32, fontWeight: 'bold', paddingTop: 20, paddingBottom: 10}}>About</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey', paddingLeft: 22, paddingRight: 22, textAlign: 'justify' }}>Aplikacja została stworzona w celach edukacyjnych na zajęcia z Aplikacji Mobilnych. Głównym zadaniem aplikacji jest wyświetlanie w różnych częściach ekranu zielonych oraz czerwonych przycisków przez jedną minutę. Użytkownik ma za zadanie naciskać na zielone przyciski, których może się pojawić do pięciu na raz. Za nacisnięcie każdego przycisku  naliczane są punkty, dodanie jak i ujemne. Za zielone przyciski użytkownik otrzymuje 10 punktów, a za czerwone przyciski otrzymuje -5 punktów. Jednak przy użyciu wielokrotnego dotyku punkty za naciśnięcie zielonego przycisku mnożą się, czyli 10 punktów x liczba dotyków jednocześnie. W przypadku użycia wielokrotnego dotyku przy przyciskach czerwonych jest to -5 puntków x liczba dotyków jednocześnie.</Text>

            <Text style={{ fontSize: 32, fontWeight: 'bold', paddingTop: 70 }}>Authors</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey', paddingBottom: 5, textAlign: 'center'}}>Mateusz Gawlyta{"\n"}Mateusz Piotrowski{"\n"}Maciej Wajs</Text>

                
        </View>
    );
}