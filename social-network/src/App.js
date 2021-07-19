import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

  
  return (
    <BrowserRouter>
    <div className="app-wrapper" >
      <Header/>
      <Navbar/>    
      <div className="app-wrapper-content">
        {/* <Route exact path="/dialogs" component={Dialogs}/>
        <Route exact path="/profile"component={Profile}/> */}

        <Route exact path="/dialogs" 
                    render={ () => <Dialogs state={props.state.dialogsPage} />}/>

        <Route exact path="/profile" 
                    render={ () => <Profile state={props.state.profilePage}/>}/>
        
      </div>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
