import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import ModalFloatButton from './floatButton';
import ModalContents from './contents';

import 'react-spring-bottom-sheet/dist/style.css';

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ModalFloatButton setOpen={setOpen} />
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <ModalContents setOpen={setOpen} />
      </BottomSheet>
    </div>
  );
}
