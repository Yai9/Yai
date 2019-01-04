import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePost from './components/createPost';
import UpdatePost from './components/updatePost';
import NewPost from './components/newPost';
import GetPosts from './components/getPosts';
import store from './store';
import { Provider } from 'react-redux';
import Person from './components/person';



class App extends Component {
  state = {
    username: '',
    showContainer: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });

  };

  toggleContainer = () => {
    const doesShow = this.state.showContainer;
    this.setState({ showContainer: !doesShow });
  }


  render() {
    console.log(store.getState())

    return (
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={GetPosts} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update' component={UpdatePost} />
            <Route exact path='/new' component={NewPost} />
          </Switch>
        </BrowserRouter>
       {this.state.showContainer ? <div>
          <button className='button'
            onClick={this.toggleContainer}>Toggle</button>
          <Person userName={this.state.username}
            changed={this.nameChangedHandler} /> <br />
            
        </div> :null
      }
       
      </Provider>
      </div>
    );
  }
}


export default App;
