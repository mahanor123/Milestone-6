import React, { Component } from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
const TodosQuery = gql`
{
  todos{
    id
    text
    complete
  }
}
`;



class App extends Component {
  state ={
    checked: [0]
 };
 handleToogle = value => () => {
   const{ checked} = this.state;
   const currentIndex = checked.indexOf(value);
   const newChecked = [...checked];
   if(currentIndex ===-1)
   { newChecked.push(value);
 }
 else{
  newChecked.splice(currentIndex,1);
 }
 this.setState({
   checked : newChecked
 });
 }
  render() 
  { 
    const
    {
      data:{loading,todos}
    }=this.props;
  if(loading)
    {   return null;}
    return ( <div>
      {todos.map(todo => <div key={`${todo.id}-todo-item`}>{todo.text}</div>) }
      </div>
      );
  }
} 

export default graphql(TodosQuery)(App);

