import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Loading from 'components/loading';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/main');
    }, 1000);
  }, []);

  return <Loading />;
}
