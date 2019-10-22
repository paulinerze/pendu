import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import './App.css';
import Canvas from "./Canvas.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: 0,
      word: 'abc',
      alphabet : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      wordList2: [],
      usedLetters: [],
      uselessUsedLetters: [],
      start: true,
      nbWin: 0,
      nbLoose: 0
    };
    this.randomWord = this.randomWord.bind(this);
    this.incrementerrors = this.incrementerrors.bind(this);
    this.isReadyToPlayAgain = this.isReadyToPlayAgain.bind(this);
    this.handleAlphabetClick = this.handleAlphabetClick.bind(this);
    this.computeDisplay = this.computeDisplay.bind(this);
    this.doMatch = this.doMatch.bind(this);
    this.handleGameManagerClick = this.handleGameManagerClick.bind(this);
    this.removeAccents = this.removeAccents.bind(this);
    this.manageWordList = this.manageWordList.bind(this);
    this.deleteMultipleOcc = this.deleteMultipleOcc.bind(this);
    this.transformToLowerCase = this.transformToLowerCase.bind(this);
  }

  deleteMultipleOcc(myarray){
    let i, j, len = myarray.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[myarray[i]] = 0;
    }
    for (j in obj) {
      out.push(j);
    }
    return out
  }

  transformToLowerCase(myarray){
    let out = []
    for (let i = 0; i < myarray.length; i++) {
      const element = myarray[i];
      let elementLowerCase = element.toLowerCase();
      out.push(elementLowerCase)
    }
    return out
  }

  manageWordList(){
    let myarray = []
    for (let i = 0; i < this.state.wordList2.length; i++) {
      let element = this.state.wordList2[i];
      element = this.removeAccents(element)
      element = element.replace(new RegExp(",+","g"),"")
      let matchResult = []
      if ((matchResult = element.match(new RegExp("[A-Z]+[a-z]+","g")))) {
        myarray.push(...matchResult)        
      }
    }

    let out = this.deleteMultipleOcc(myarray)
    out = this.transformToLowerCase(out)
        
    return out
  }

  removeAccents(str) {
    let accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    let accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    str = str + ''
    str = str.split('');
    let strLen = str.length;
    let i, x;
    for (i = 0; i < strLen; i++) {
      if ((x = accents.indexOf(str[i])) != -1) {
        str[i] = accentsOut[x];
      }
    }
    return str.join('');    
  }

  componentDidMount() {
    fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&rows=10&facet=emetteur&facet=rubrique&facet=lieu&facet=villenplaceholder.typicode.com/users')
    .then(res => res.json()) 
    .then((data) => {
      this.setState({ wordList2: data.records.map(record => record.fields.type)})
    })    
  }

   randomWord(){
    let wordList = sessionStorage.getItem("wordList");
    wordList = JSON.parse(wordList);
    let rand = 0 + Math.random() * (this.state.wordList2.length - 0);
    this.setState({word: this.state.word = wordList[Math.round(rand)]}); 
   }


  incrementerrors (){
    let futureStateErrors = this.state.errors +1;
    if(futureStateErrors > 9) this.isReadyToPlayAgain();
    this.setState({errors: futureStateErrors});
  }

  isReadyToPlayAgain(){
    if (this.state.word.length === this.state.usedLetters.length+1) {
      this.setState({nbWin: this.state.nbWin+1});
    } else {
      this.setState({nbLoose: this.state.nbLoose+1});
    }
    this.setState({start: this.state.start = true});
  }

  handleAlphabetClick (letter){
    if (this.state.word.length === this.state.usedLetters.length+1){
      this.isReadyToPlayAgain();
      this.doMatch(letter);
    } else if (this.state.errors < 12 ) {
      this.doMatch(letter);
    } else {
      this.isReadyToPlayAgain();
    }
  }

  computeDisplay(word, usedLetters){
    return word.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  doMatch(theLetter){
    let l = theLetter.toString();
    if (this.state.word.includes(theLetter)){ //si le mot contient la lettre
      let nbOcc = this.state.word.match(new RegExp(theLetter,"gi")).length 
      if (!this.state.usedLetters.includes(l)) { //si la lettre n'a pas déjà été utilisée

        switch (nbOcc) {
          case 1:
            this.setState({usedLetters: this.state.usedLetters.concat(l)});
            break;
          case 2:
            this.setState({usedLetters: this.state.usedLetters.concat(l,l)});
            break;
          case 3:
            this.setState({usedLetters: this.state.usedLetters.concat(l,l,l)});
            break;
          case 4:
            this.setState({usedLetters: this.state.usedLetters.concat(l,l,l,l)});
            break;
          default:
            break;
        }  
      } else {
        this.setState({uselessUsedLetters: this.state.uselessUsedLetters.concat(l)})
        this.incrementerrors();
      }
    } else {
      this.setState({uselessUsedLetters: this.state.uselessUsedLetters.concat(l)})
      this.incrementerrors();
    }
  }

  handleGameManagerClick(){
    if (this.state.nbWin < 1 && this.state.nbLoose < 1) {
      let wordList = this.manageWordList();
      wordList = JSON.stringify(wordList);
      sessionStorage.setItem("wordList",wordList);
    }

    this.setState({start: this.state.start = false}); 
    this.setState({errors: 0});
    this.setState({usedLetters: this.state.usedLetters = []});
    this.setState({uselessUsedLetters: this.state.uselessUsedLetters = []});
    this.randomWord();
  }

   

  render() {  
    
    const GameManager = () => {
      let disableButton = !this.state.start;
      return <Button disabled={disableButton} onClick={this.handleGameManagerClick}>{"Jouer"}</Button>
    }
    
    const ScoreBoard = () => {
      return <div><p>{"Nombre de victoire(s) : " + this.state.nbWin}</p>
      <p>{"Nombre de défaite(s) : " + this.state.nbLoose}</p>
      <p>{"Nombre d'erreurs : "+ this.state.errors}</p></div>
    }
    
    const GuessList = () => {
      const guessList = "Mot à deviner : " + this.computeDisplay(this.state.word,this.state.usedLetters);
      return(
        <ul>{guessList}</ul>
      )      
    }

    const AlphabetList = (props) => {
      const letters = props.letters;
      let disableButton = ( this.state.word.length === this.state.usedLetters.length || this.state.errors > 10 || this.state.start);
      const listLetters = letters.map((letter) => {
      if(this.state.usedLetters.includes(letter) || this.state.uselessUsedLetters.includes(letter)){
        return <Button className="bouton" disabled={disableButton} onClick={() => {this.handleAlphabetClick([letter])}}>{letter}</Button> 
      } else return <Button disabled={disableButton} onClick={() => {this.handleAlphabetClick([letter])}}>{letter}</Button>
      });
      return (
      <ul>{listLetters}</ul>
      );
      
    }

    const Pendu = () => {
      return <Canvas errors={this.state.errors}/> 
    }

    const Results = () => {
      if(this.state.errors > 9){
        return <p>{"Looser"}</p>
      }
      if(this.state.word.length === this.state.usedLetters.length){
        return <p>{"Winner"}</p>
      }
      return <p></p>
    }

    
    return (
      <React.Fragment>
        <GameManager/>
        <Pendu/>
        <ScoreBoard/>
        <div>
          <Results/>
          <GuessList/>
        </div>
        <div>
          <AlphabetList letters={this.state.alphabet}/>
        </div>
      </React.Fragment>                          
    );
  }
}

export default App;
