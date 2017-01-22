let channels = [
  {name: "Hardware Support"},
  {name: "Software Support"}
];
class Channel extends React.Component{
  onClick(){
    console.log("I am clicked", this.props.name);
  }
  render(){
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    );
  }
}

class ChannelList extends React.Component{
  render(){
    return (
      <ul>
        {this.props.channels.map( channel => {
          return (
              <Channel name={channel.name} />
            )
          }
        )}
      </ul>
    );
  }
}

class ChannelForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  onSubmit(e){
    let {channelName} = this.state;
    channels.push({
      name: channelName
    });
    this.setState({
      channelName: ''
    });
    console.log(channelName);
    e.preventDefault();
  }

  onChange(e){
    this.setState({
      channelName: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input onChange={this.onChange.bind(this)} type="text" value={this.state.channelName}/>
      </form>
    );
  }
}

class ChannelSection extends React.Component{
  render() {
    return (
      <div>
        <ChannelList channels={channels}/>
        <ChannelForm />
      </div>
    );
  }
}

ReactDOM.render(<ChannelSection />,
  document.getElementById('app'));