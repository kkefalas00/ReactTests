class Table extends React.Component {
   constructor(props) {
    super(props);
	
}
  
    render() {
		return (
		  <table className="tb">
		  <thead></thead>
		  <tbody>
			<tr><td>{this.props.t0.toFixed(2)}</td><td>{this.props.t1.toFixed(2)}</td></tr>
			<tr><td>{this.props.t2.toFixed(2)}</td><td>{this.props.t3.toFixed(2)}</td></tr>
		  </tbody>
		  </table>
		);
  }
	
	
};

class Timer extends React.Component {
 
 constructor(props) {
    super(props);
	
    this.state = { seconds: 0 };
  }

  tick() {
	var x=this.state.seconds+1;
	this.setState({seconds: x});
    
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
};


class TimerTable extends React.Component {
 
 constructor(props) {
    super(props);
	this.x=0;
    this.state = { t0: 0, t1:0, t2:0, t3:0 };
  }

  tick() {
	this.setState({
			t0:this.x,
			t1:this.state.t0,
			t2:this.state.t1,
			t3:this.state.t2
		
	});
	
	
	var  x=1000+Math.random()*2000;
	this.x=this.x+x/1000;
    this.t = setTimeout(() => this.tick(), x);
  }

  componentDidMount() {
	var  x=1000+Math.random()*2000;
	this.x=x/1000;
    this.t = setTimeout(() => this.tick(), x);
  }

  componentWillUnmount() {
    clearTimeout(this.t);
  }

  render() {
    return (
      <div>
        <Table t0={this.state.t0} t1={this.state.t1} t2={this.state.t2} t3={this.state.t3} />
      </div>
    );
  }
};





class Pelatis extends React.Component {
	constructor (props)
	{
		super(props);
		this.state={check:"[ ]"};
	}
	
	handleClick(){
		if(this.state.check=="[ ]")
			this.setState({check:" [X] checked"});
		else
			this.setState({check:"[ ]"});	
	}	
	
	render(){
		return (
			<li className="client" onClick={() => this.handleClick()}>
			{this.props.fname}  | {this.props.lname} | {this.props.phone} | {this.state.check }
			</li>
		);
	}
	
}


class ListPelates extends React.Component {
	constructor (props)
	{
		super(props);
		this.state={clients:""}
	}
	
	componentDidMount() {
		fetch("back.php")
		.then(response=>response.json())
		.then(data=>{
		var A=data.map(x => <Pelatis fname={x.fname} lname={x.lname} phone={x.phone} />); 
		this.setState({clients: A});
		});
				
		
	}
	
	render()
	{
		
		
		return (
				<ul>
				{this.state.clients}
				
				</ul>
			);
	}
	
}

class Pelates extends React.Component
{
	constructor (props)
	{
		super(props);
		
	}
	
	render()
	{
		return (
			<div>
				<h1>Clients</h1>
				<ListPelates />
				
				
			</div>
		);
	}
	
	
}

function Main(props)
{
	return (
		<> 
			<Timer />
			<TimerTable />
			<Pelates />
		</>
	);
	
}


ReactDOM.render(
  <Main />,
  document.getElementById('main')
);