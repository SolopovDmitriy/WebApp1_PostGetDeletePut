import './App.css';
import {HashRouter, Route, Switch} from  'react-router-dom';
import TemplatePage from  "../../components/TemplatePage/TemplatePage";

/*                                                   start*/

import HomeRoute from '../../components/pages/Home/Home';
import ProductsRoute from '../../components/pages/Products/Products';  // подключаем компонент Products---------------
import WhoopsRoute from '../../components/pages/Whoops/Whoops';

/*                                                   end*/


// в строке 26     <Route exact path='/products' component={ProductsRoute}/>   привязываем компонент Products к пути /products
// ссылка в браузере фомируется не /products , а /#/products   
// В MainMenu.js в строке 32 делаем ссылку на продукты с помощью  <NavLink className="nav-link" to='/products'>
// <NavLink> вместо тега <a>            to='/products'  вместо  href="/products"

function App() {
  return (
      <HashRouter>
          <div className="container-fluid">
            <TemplatePage>
                <Switch>
                    <Route exact path='/' component={HomeRoute}/>
                    <Route exact path='/products' component={ProductsRoute}/>
                    <Route component={WhoopsRoute}/>
                </Switch>
            </TemplatePage>
          </div>
      </HashRouter>
  );
}

export default App;
