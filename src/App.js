import React, {Component} from 'react'
import './App.css'
import Form from './components/Form'
import Recipes from './components/Recipes'



//there is no need for a constructor any more with React 16 so there is no binding.

const API_KEY = 'e9c421cdc11fea9b4fbba3cb5dcaeac3'



class App extends Component{
  state = {
    recipes:[]
  }

  getRecipe = async (e) => {

    const recipeName= e.target.elements.recipeName.value
    e.preventDefault()

    const api_call = await fetch
    (`https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)

    const data = await api_call.json()
    this.setState({recipes:data.recipes})

    console.log(this.state.recipes)
}

componentDidMount = () => {
  const json = localStorage.getItem('recipes')
  const recipes = JSON.parse(json)
  this.setState({recipes})

}

componentDidUpdate=()=>{
  const recipes = JSON.stringify(this.state.recipes)
  localStorage.setItem("recipes",recipes)
}


  render(){
    return (
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Reciepe Search</h1>
          </header>

        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>

      </div>
    )
  }

}










export default App
