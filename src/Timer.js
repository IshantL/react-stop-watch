 import React,{Component} from 'react';


class Timer extends Component{
	constructor(props){
		super(props);
		this.state={
			clock:0
		}
		this.ticker=this.ticker.bind(this);
	}
	ticker(){
		this.setState({clock:Math.round((new Date()-this.props.start)/1000)})
	}

	componentDidMount(){
		this.timer=setInterval(this.ticker,1000);
	}
  render(){
  	console.log(this.props);
    return(
      <div>
      <p>You have been on this site Since:</p>
      <span>{this.state.clock}</span>
      <p>Seconds</p>
      </div>
      )}
  }
  export default Timer;