import './App.css'
import {Component} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Services from "./components/Services";
import Banner from "./components/Banner";
import Features from './components/Features';
import Rating from './components/Rating';
import Question from './components/Question';
import Packages from './components/Packages';
import Wrap from './components/Wrap';
import "@fontsource/lexend-deca";
class App extends Component
{
  state={responseObject:[]};
  componentDidMount()
    {
        const fetchDetails =  async ()=>
        {
            const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
            const data = await response.json();
            this.setState({responseObject:data[0].page_config});
        }
        fetchDetails();
    }
  render()
  {
    {
      return (this.state.responseObject.length!==0)&&(
      <div className='main-container'>
        <Header/>
        <Search/>
        <Services serviceObject={this.state.responseObject[0]}/>
        <Banner bannerObject={this.state.responseObject[1]}/>
        <Features featuresObject={this.state.responseObject[2]}/>
        <Wrap/>
        <Rating ratingsObject={this.state.responseObject[5]}/>
        <Packages packageObject={this.state.responseObject[3]}/>
        <Question questionObject={this.state.responseObject[6]}/>
      </div>
  )
  }
  }
}
export default App;