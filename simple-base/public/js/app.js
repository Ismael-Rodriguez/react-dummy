class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('content'));
