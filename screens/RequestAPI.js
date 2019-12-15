import React from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  ScrollView,
  YellowBox,
  TouchableHighlight,
  TextInput
} from "react-native";
import Padrao from "./estilo/Padrao";

export default class PersonList extends React.Component {
  state = {
    data: "",
    api: "https://chordcipher-api.herokuapp.com/generate_html",
    // url: 'https://www.cifraclub.com.br/marilia-mendonca/todo-mundo-vai-sofrer/',
    // url: 'https://m.cifraclub.com.br/lady-gaga/shallow/',
    // url: 'https://www.cifraclub.com.br/melim/meu-abrigo/simplificada.html',
    url: "",
    nome_musica: "",
    texto: "Insira a URL",
    texto: "",
    // texto: "https://www.cifraclub.com.br/melim/meu-abrigo/simplificada.html",
    cifra: [],
    cifra_index: 0,
    acorde: ""
  };

  seleciona_entre(tag) {
    var init = this.state.data.split("<" + tag + ">");
    init = init[1].split("</" + tag + ">");
    var data = init[0];
    //  console.log('seleciona_entre(): ')
    //  console.log(data)
    this.setState({ data });
  }

  alterarTexto = texto => {
    this.setState({ texto });
    this.setState({ url: texto });
  };

  seleciona_acorde() {
    var aux;
    var cifra = [];
    var init = this.state.data.split("<b>");
    console.log("Cifra Length = " + init.length);

    for (i = 1; i < init.length; i++) {
      // for (i = 1; i < 11; i++) {

      aux = init[i].split("</b>");
      // console.log('Aux[' + i + '] : ' + aux[0])

      i !== 1 ? (cifra = cifra + "," + aux[0]) : (cifra = aux[0]);
      // console.log('Cifra: ' + cifra)
    }
    cifra = cifra.split(",");
    // console.log('Cifra: ' + cifra[0])
    this.setState({ cifra });
  }

  componentDidMount() {
    axios
      .get(this.state.url, { cipher: this.state.api })
      .then(res => {
        // console.log('PRA ONDE VAI ISSO?')
        // YellowBox.ignoreWarnings(['Warning: Pra onde vai isso?  2.0'])
        // console.warn()
        var data = res.data;
        this.setState({ data });

        this.seleciona_entre("pre");

        this.seleciona_acorde();
        this.pesquisaNomeAcorde(this.state.cifra[this.state.cifra_index]);

        var musica = this.state.url.split("/");
        console.log("musica[4]: " + musica[4]);

        musica = musica[4].split("-");
        var nome_musica = "";
        for (i = 0; i < musica.length; i++) {
          nome_musica = nome_musica + musica[i] + " ";
          // console.log(nome_musica)
        }
        this.setState({ nome_musica });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  proximoAcorde(cifra_index) {
    if (cifra_index < this.state.cifra.length) {
      cifra_index++;

      this.pesquisaNomeAcorde(this.state.cifra[cifra_index]);
      this.setState({ cifra_index });
      // console.log('cifra_index: ' + this.state.cifra_index + ' Nome Acorde: '+ this.state.acorde)
    } else {
      console.log('proximoAcorde: "FIM DA CIFRA"');
    }
  }

  pesquisarCifra(url) {
    this.setState({ url });
    this.componentDidMount();
  }

  pesquisaNomeAcorde(acorde) {
    var i = 0,
      tam = acorde.length;
    var nome = "";
    console.log("pesquisaNomeAcorde: " + acorde + " Tam: " + tam);

    do {
      console.log("inicio DO, char: " + acorde[i]);

      switch (acorde[i]) {
        case "D":
          nome = nome + "ré";
          break;

        case "C":
          nome = nome + "dó";
          break;

        case "E":
          nome = nome + "mi";
          break;

        case "F":
          nome = nome + "fá";
          break;

        case "G":
          nome = nome + "sol";
          break;

        case "A":
          nome = nome + "lá";
          break;

        case "B":
          nome = nome + "si";
          break;

        case "m":
          nome = nome + " menor";
          break;

        case "#":
          nome = nome + " sustenido";
          break;

        case "b":
          nome = nome + " bemol";
          break;

        case "9":
          nome = nome + " com nona";
          break;

        case "4":
          nome = nome + " com quarta";
          break;

        case "7":
          nome = nome + " com sétima";
          break;
          º;
        case "M":
          nome = nome + " aumentada";
          break;

        case "º":
          nome = nome + " di minuto";
          break;

        case "/":
          nome = nome + " com baixo em";
          break;

        default:
          break;
      }

      console.log("pesquisaNomeAcorde: Loop nome = " + nome);
      i++;
    } while (i < tam);

    console.log("pesquisaNomeAcorde: " + acorde + " Nome: " + nome);
    acorde = nome;
    this.setState({ acorde });
  }

  render() {
    return (
      <View style={Padrao.container}>
        <View style={Padrao.norte}>
          {/* ENTRADA URL */}
          <TextInput
            value={this.state.texto}
            onChangeText={this.alterarTexto}
            style={Padrao.ex}
            accessibilityLabel={"Insira a URL"}
          />

          {/* BOTÃO PESQUISA */}
          <TouchableHighlight
            onPress={() => this.pesquisarCifra(this.state.texto)}
          >
            <Text style={Padrao.ex}>Pesquisar</Text>
          </TouchableHighlight>
        </View>

        <View style={Padrao.centro}>
          {/* NOME MUSICA */}
          <Text style={Padrao.fonte40}>{this.state.nome_musica}</Text>

          {/* PRINT PÓXIMO ACORDE */}
          <Text
            style={[
              Padrao.ex,
              {
                flex: 1,
                width: 350,
                height: 350,
                fontSize: 40,
                justifyContent: "center",
                alignItems: "center"
              }
            ]}
            onPress={() => this.proximoAcorde(this.state.cifra_index)}
            accessibilityLabel={this.state.acorde}
          >
            {this.state.cifra[this.state.cifra_index]}
          </Text>
        </View>

        {/* <View style={Padrao.sul}>

					BOTÃO PRÓXIMO ACORDE
					<TouchableHighlight onPress={() => this.proximoAcorde(this.state.cifra_index)}>
						<Text style={Padrao.ex}>Próximo Acorde</Text>
					</TouchableHighlight>
				</View> */}
      </View>
    );
  }
}
