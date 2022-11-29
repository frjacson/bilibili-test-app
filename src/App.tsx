import React from 'react';

import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';

import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
