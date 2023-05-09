import React, {Component} from 'react'

// Class Components: Mounting LifeCycle Method
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
    console.log('[App-1] Constructor only one time call')
  }
  authHandler= () => {
    this.setState({auth: !this.state.auth});
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App-2] getDerivedStateFromProps \n If setState use call this second time")
    return null
  }
  componentDidMount(){
    this.setState({auth: true})
    console.log("[App-4] componentDidMount \n first time last call but next time fast call")
  }

  // Component Will UnMount (use for all destroyed the state render)
  // componentWillUnmount(){
  //   console.log("[App] componentWillUnmount")
  // }

  render() {
    console.log("[App-3] render If setSate use call this second time")
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}
export default Home;
