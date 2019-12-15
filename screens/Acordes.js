import React from "react";
import {
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableHighlight,
  Alert
} from "react-native";

const alunos = [
  {
    id: 1,
    nome: "Dó",
    cifra: "C",
    label: "Cê",
    descricao:
      "Corda Mi: Abafada,  Corda Lá: 3ª Casa,   Corda Ré: 2ª Casa,  Corda Sol: Solta,    Corda Si: 1ª Casa,   Corda Mizinha: Solta"
  },
  {
    id: 2,
    nome: "Ré",
    cifra: "D",
    label: "Dê",
    descricao:
      "Corda Mi: Abafada,  Corda Lá: Abafada,   Corda Ré: Solta,    Corda Sol: 2ª Casa,  Corda Si: 3ª Casa    Corda Mizinha: 2ª Casa"
  },
  {
    id: 3,
    nome: "Mi",
    cifra: "E",
    label: "ê",
    descricao:
      "Corda Mi: Solta,    Corda Lá: 2ª Casa,   Corda Ré: 2ª Casa,  Corda Sol: 1ª Casa,  Corda Si: Solta,     Corda Mizinha: Solta"
  },
  {
    id: 4,
    nome: "Fá",
    cifra: "F",
    label: "Éfe",
    descricao:
      "Pestana: 1ª Casa,   Corda Mi: Solta,     Corda Lá: 3ª Casa,  Corda Ré: 3ª Casa,   Corda Sol: 2ª Casa,  Corda Si: Solta,    Corda Mizinha: Solta"
  },
  {
    id: 5,
    nome: "Sol",
    cifra: "G",
    label: "Gê",
    descricao:
      "Corda Mi: 3ª Casa,  Corda Lá: 2ª Casa,   Corda Ré: Solta,    Corda Sol: Solta,    Corda Si: Solta,     Corda Mizinha: 3ª Casa"
  },
  {
    id: 6,
    nome: "Lá",
    cifra: "A",
    label: "A",
    descricao:
      "Corda Mi: Abafada,  Corda Lá: Solta,     Corda Ré: 2ª Casa,  Corda Sol: 2ª Casa,  Corda Si: 2ª Casa,   Corda Mizinha: Solta"
  },
  {
    id: 7,
    nome: "Si",
    cifra: "B",
    label: "Bê",
    descricao:
      "Pestana: 2ª Casa,   Corda Mi: Abafada,   Corda Lá: Solta,    Corda Ré: 4ª Casa,   Corda Sol: 4ª Casa,  Corda Si: 4ª Casa,  Corda Mizinha: Solta"
  }
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: "#DDD",
  borderWidth: 0.5,
  borderColor: "#222",

  // Flex
  // justifyContent: 'space-around'
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between"
  // justifyContent: 'space-around',
  // alignItems: 'flex-start',
};

const estiloBotão = {
  // paddingHorizontal: 15,
  marginVertical: 5,
  // borderRadius: 10,
  borderWidth: 2,
  borderColor: "#222",
  //   fontWeight: "bold",
  flex: 1,
  //   fontSize: 15,

  justifyContent: "space-between"
};

// var SoundPlayer = require('react-native-sound')

export const Aluno = props => (
  <View style={itemEstilo}>
    {/* <Text style={{ borderWidth: 2, borderColor: '#222', flex: 1}}>Nome: {props.nome}</Text> */}
    {/* <Text style={{ fontWeight: 'bold', borderWidth: 2, borderColor: '#222', flex: 1 }}>Nota: {props.nota}</Text> */}

    <TouchableHighlight style={estiloBotão}>
      <Text>Nome:{props.nome}</Text>
    </TouchableHighlight>

    <TouchableHighlight
      style={estiloBotão}
      accessibilityLabel={"Cifra" + props.label}
    >
      <Text> Cifra: {props.cifra}</Text>
    </TouchableHighlight>

    <TouchableHighlight
      style={estiloBotão}
      accessibilityLabel={"Descrição" + props.descricao}
    >
      <Text> Descrição </Text>
    </TouchableHighlight>
  </View>
);

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
