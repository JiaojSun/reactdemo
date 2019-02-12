import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemeBar';
// import NameCard from './components/NameCard';
// import LikesButton from './components/LikesButton';
// import DigitalClock from './components/DigitalClock';
// import CommentBox1 from './components/CommentBox1';
// import CommentBox from './components/CommentBox';
// import CommentList from './components/CommentList';
// const tags = ['恐龙','足球小子']
const themes = {
  light:{
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark:{
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // comments:['this is my first reply']
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment){
    this.setState({
      comments: [...this.state.comments,comment]
    })
  }
  changeTheme(theme){
    this.setState({
      theme,
    })
  }

  render() {
    // const {comments} = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a href="#theme-switcher"
              className="btn btn-light"
              onClick={()=>{this.changeTheme('light')}}
            >
              浅色主题
            </a>
            <a href="#theme-switcher"
              className="btn btn-secondary"
              onClick={()=>{this.changeTheme('dark')}}
            >
              深色主题
            </a>
          </header>
          <ThemeBar />





  {/*         <LikesButton tags={tags} />
  */}        {/* <NameCard name="viking" number={1233444} isHuman tags={tags}/> */}
          {/* <DigitalClock /> */}
          {/* <CommentList comments={comments}/> */}
          {/* <CommentBox1 commentsLength={comments.length} onAddComment={this.addComment} /> */}

        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App;
