import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './store/actions';
import Text from './text';
import Button from './button';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {counters} = useSelector(state => state.counters)
  const onIncrement = () => dispatch(incrementCounter())
  const handleClick = e => {
    onIncrement();
  }
  return (
    <div className="App">
      <Button handleClick={e => handleClick(e)}/>
      <Text text={counters}/>
    </div>
  );
}

export default App;
