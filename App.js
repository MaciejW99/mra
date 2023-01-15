import React from 'react';
import { RecoilRoot } from 'recoil';

//screens
import Timer from './components/timer';

import RootStack from './navigation/RootStack';

function App() {
  return (
    //<Timer/>
    <RecoilRoot>
      <RootStack />
    </RecoilRoot>
  );
}

export default App;
