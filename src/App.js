
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMember from './components/components/AddMember';
import NotFound from "./components/components/NotFound";
import ShoppingComponent from "./components/components/ShoppingComponent";

function App(){

  return(

    <Router>
    <div>
    <Routes>
    <Route path='/' element={<ShoppingComponent/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/add' element={<AddMember/>} />
    <Route path='/accounts/edit/:id' element={<AddMember/>} />
    <Route path='/accounts/delete/:id' element={<AddMember/>} />
     </Routes>
   </div>
  </Router>
  )
  
}
export default App;
