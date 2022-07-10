import React, { useState, useEffect } from 'react';

import Loading from 'components/loading';
import Nav from 'components/nav';

const Main = () => {
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(1);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Nav></Nav>
    </div>
  );
};

export default Main;
