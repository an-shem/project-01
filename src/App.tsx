import './App.css';
import Card from './components/Card/Card';
import Greeting from './components/Greeting/Greeting';
import ThankYou from './components/ThankYou/ThankYou';
import CatImg2 from './assets/cat2.jpeg';

function App() {
  const name = 'Vasiliy';
  return (
    <>
      <Greeting name={name} />
      <Greeting name={'Evgenii'} age={18} />
      <ThankYou />
      <Card url={'https://www.profguide.io/images/article/a/53/ajWJJPYY_9.webp'} alt={'Програмист за компьютером'} />
      <Card url="/cat-photo.jpeg" />
      <img src={CatImg2} alt="" style={{ width: '300px', marginTop: '40px' }} />
    </>
  );
}

export default App;
