import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <NavLink to="/books">Books</NavLink>
        <Switch>
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
