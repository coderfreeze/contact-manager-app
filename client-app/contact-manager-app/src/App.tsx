import * as React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Container/>
      <Footer/>
    </div>
    </>
  );
};

export default App;

