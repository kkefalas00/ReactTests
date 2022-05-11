class Table extends React.Component {
   constructor(props) {
		super(props);
		this.state={T:[["-","-","-"],["-","-","-"],["-","-","-"]], player:"X",game:1}
	}

  
	handleClick(x,y){
		  
		  if(this.state.game==1)
			  
		{
			  var p=this.state.T;
			  
			  if(p[x][y]=="-")
			  {
				p[x][y]=this.state.player;
				var p2= (this.state.player=="X"?"O":"X");
			  
				this.setState({T:p,player:p2});
				var g=1;
				  
					if(p[x][0]==p[x][1] && p[x][1]==p[x][2] && p[x][0]!="-")
					{
						alert("Win "+p[x][0]);
						g=0;
						
					}
					if(p[0][y]==p[1][y] && p[1][y]==p[2][y] && p[0][y]!="-")
					{
						alert("Win "+p[0][y]);
						g=0;
					}
				  
					if(p[0][0]==p[1][1] && p[1][1]==p[2][2] && p[0][0]!="-")
					{
						alert("Win "+p[0][0]);
						g=0;
					}
					if(p[0][2]==p[1][1] && p[1][1]==p[2][0] && p[0][2]!="-")
					{
						alert("Win "+p[0][2]);
						g=0;
					}
					
					this.setState({game:g});
			  }
		}
	}
  
	restart()
	{
		var s={T:[["-","-","-"],["-","-","-"],["-","-","-"]], player:"X",game:1};
		this.setState(s);	
	}
  
    render() {
		return (
		<>
		  <table className="tb">
		  <thead></thead>
		  <tbody>
			<tr>
			<td onClick={()=>this.handleClick(0,0)}>{this.state.T[0][0]}</td>
			<td onClick={()=>this.handleClick(0,1)}>{this.state.T[0][1]}</td>
			<td onClick={()=>this.handleClick(0,2)}>{this.state.T[0][2]}</td>
			</tr>
			
			<tr>
			<td onClick={()=>this.handleClick(1,0)}>{this.state.T[1][0]}</td>
			<td onClick={()=>this.handleClick(1,1)}>{this.state.T[1][1]}</td>
			<td onClick={()=>this.handleClick(1,2)}>{this.state.T[1][2]}</td>
			</tr>
			
			<tr>
			<td onClick={()=>this.handleClick(2,0)}>{this.state.T[2][0]}</td>
			<td onClick={()=>this.handleClick(2,1)}>{this.state.T[2][1]}</td>
			<td onClick={()=>this.handleClick(2,2)}>{this.state.T[2][2]}</td>
			</tr>
			
		  </tbody>
		  </table>
		  <button onClick={()=>this.restart()}>Restart</button>
		</>  
		);
  }
	
	
};

class Main extends React.Component {

	render()
	{
			var p=[];
			for (var i=0;i<5;i++)
				p.push(<Table />);
		
		return (
		<>
			{p}
		</>
		);
	}
}

ReactDOM.render(
  <><Main /></>,
  document.getElementById('main')
);