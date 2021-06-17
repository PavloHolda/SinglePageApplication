import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Loader from './components/Loader/Loader';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {

  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2dcf01c917344fb2b74cf20a3284a298';
    const fetchData = async () => {
      const response = await axios.get(requestUrl);
      dispatch({type: "UPDATE_DATE", news: response.data});
    }
    fetchData();
  }, []);

  if(news.length < 1) {
    return <Loader/>
  }

  return (
    <div className="app">
      <Header
        menuItem={[{title:'Home', path:'/'},{title:'News', path:'/News'},{title:'Contacts', path:'/Contacts'}]}
      />
      <Route
        path="/"
        exact
        render={() => 
          news ? <News
          countOfNews={6}
          isHome={true}
        /> : null}
      />
      <Route
        path="/News"
        exact
        render={() => 
          news ? <News
          countOfNews={18}
          />  : null}
      />
      <Route
        path="/Contacts"
        exact
        render={() => <Contacts firstName={'Pavlo'} lastName={'Holda'}/>}
      />
      <Route
        path="/News/:name"
        exact
        component={NewsDetail}
      />
      <Footer firstName={'Pavlo'} lastName={'Holda'}/>
    </div>
  );
}

export default App;
