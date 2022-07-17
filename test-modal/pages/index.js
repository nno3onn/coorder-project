import React, { useState } from 'react';
import { BottomModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';

import 'react-spring-modal/styles.css';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open bottom modal</button>
      <BottomModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
        <ModalTitle>My Bottom Modal</ModalTitle>
        <p>This is a modal</p>
        <ModalCloseTarget>
          <button>Send Name</button>
        </ModalCloseTarget>
      </BottomModal>
    </>
  );
}
