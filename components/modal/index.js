import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        My awesome content here Open
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </BottomSheet>
    </>
  );
}
