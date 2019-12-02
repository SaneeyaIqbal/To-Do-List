import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pageCount: 240,
      items: []
    }
    this.wordCount = this.wordCount.bind(this);
    this.addText = this.addText.bind(this);
  }
  addText() {
    let text = this.state.text;
    this.props.textItems(text);
    this.setState({
      text: '',
      pageCount:240,
      items: []
    })
  }
  wordCount(event) {
    let Count = 240 - event.target.value.length;
    this.setState({
      pageCount: Count,
      text: event.target.value
    });
  }
  render() {
    return (
      <div className="body">
        <div className="App">
          <div className='App-header'>
            <h1 >TO-DO-LIST</h1>
            <div className='header-content'>
              <div className='textarea-container'>
                <textarea className='textarea' maxLength='240' onChange={this.wordCount} value={this.state.text} placeholder='Note'></textarea>
              </div>
              <div >
                <button className='button' onClick={this.addText}>Add</button>
              </div>
            </div>
            <span className="box">{this.state.pageCount}</span>
          </div>
        </div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.textItems = this.textItems.bind(this);
  }
  textItems(note) {
    this.setState({
      text: note,
      items: [...this.state.items,note]
    });
  }

  render(){
    return(
      <div>
         <List textItems={this.textItems} />
         {this.state.items.map((item, index) => (
           <div key='index'>
             <div className="container">
             <input type="checkbox"  className="check"/>
              <h2>{item}</h2>
              </div>
            </div>
         ))
  } 
  </div>
    )
  }
}
export default App;



