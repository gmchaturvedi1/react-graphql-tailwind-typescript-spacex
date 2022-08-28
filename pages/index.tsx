import * as React from 'react';
import LaunchList from '../src/components/LaunchList';
import LaunchProfile from '../src/components/LaunchProfile';

const App = () => {
 const [id, setId] = React.useState<number>(42);
 const handleIdChange = React.useCallback((newId: number) => {
  setId(newId);
 }, []);

 return (
  <div>
   <LaunchList handleIdChange={handleIdChange} />
   <LaunchProfile id={id} />
  </div>
 );
};

export default App;
