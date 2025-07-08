import './App.css';
import Card from './components/Card/Card';
import Greeting from './components/Greeting/Greeting';
import ThankYou from './components/ThankYou/ThankYou';
import CatImg2 from './assets/cat2.jpeg';
import Avatar from './assets/avatar.jpeg';
import Goodbye from './components/Goodbye/Goodbye';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Counter from './components/Counter/Counter';
import PersonalGreeting from './components/PersonalGreeting/PersonalGreeting';
import WeightCalculator from './components/WeightCalculator/WeightCalculator';

const userProfile = {
  avatar: Avatar,
  name: 'Andrii',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Error labore ipsa recusandae omnis quibusdam corporis tempore mollitia id itaque? Facilis, fugit! Excepturi architecto ab, placeat culpa ratione animi quidem commodi!',
};

function App() {
  const name = 'Vasiliy';
  return (
    <>
      <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
      <Greeting name={name} />
      <Greeting name={'Evgenii'} age={18} />
      <Goodbye />
      <ProfileCard {...userProfile} />
      <ThankYou />
      <Card url={'https://www.profguide.io/images/article/a/53/ajWJJPYY_9.webp'} alt={'Програмист за компьютером'} />
      <Card url="/cat-photo.jpeg" />
      <img src={CatImg2} alt="" style={{ width: '300px', marginTop: '40px' }} />
    </>
  );
}

export default App;
