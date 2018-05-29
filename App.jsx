import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
class FirstApp extends React.Component{

    constructor() {
        super();
        this.state={
            inText:"",
            ansText:""
        };
    }

    click(bParam){
        if(bParam=="C"){
            this.setState({inText:""});
        }
        else if(bParam=="="){
                const ans="";
                if(this.state.inText!==" "){
                   try{
                       this.ans=eval(this.state.ansText);
                       this.setState({inText:this.ans});
                   }catch (e) {
                       this.setState({inText:"Error"});
                   }
                }
        }
        else{
            this.setState({ansText:this.state.inText+=bParam});
        }
    }

    render() {
        return(
       <div>
           <h2>Calculator</h2>
           <input type="text" value={this.state.inText}/><br/>
           <button onClick={(e)=> { this.click("1");}}>1</button>
           <button onClick={(e)=> {this.click("2");}}>2</button>
           <button onClick={(e)=> {this.click("3");}}>3</button>
           <button onClick={(e)=> {this.click("+");}}>+</button><br/>

           <button onClick={(e)=> {this.click("4");} }>4</button>
           <button onClick={(e)=> {this.click("5"); } }>5</button>
           <button onClick={(e)=> {this.click("6"); } }>6</button>
           <button onClick={(e)=> {this.click("-");} }>-</button><br/>

           <button onClick={(e)=> {this.click("7"); } }>7</button>
           <button onClick={(e)=> {this.click("8");} }>8</button>
           <button onClick={(e)=> {this.click("9");} }>9</button>
           <button onClick={(e)=> {this.click("/"); } }>/</button><br/>

           <button onClick={(e)=> { this.click("C"); } }>C</button>
           <button onClick={(e)=> { this.click("0"); } }>0</button>
           <button onClick={(e)=> { this.click("="); } }>=</button>
           <button onClick={(e)=> { this.click("*"); } }>*</button>
       </div>
        );
    }

   /* Button Example

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }*/
}

 /*   constructor(props){
        super(props);
        this.state={
            head:"This is header State",
            cont:"This is Content State"
        }
    }
    calc(id)
    {
        var res;
        this.state={
            stPlus:"+",stMinus:"-"
        }
        if (this.state.stPlus==id){
            res=4+5;
            return res;
        }
        else{
            res=10-5;
        }
    }
    render() {
        return (
            <div>
            <h3>Hello World</h3>
                <h4>{this.state.head}</h4>
                <h4>{this.state.cont}</h4>
                <input type="button" value="Click Me" name="+" onClick=""></input>
                <Header/>
                <Content/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(

            <h6>This is header Class</h6>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <p>This is Content Class</p>);
    }
}*/
export default FirstApp;