import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import ModalButton from './button';
import ModalContents from './contents';

import 'react-spring-bottom-sheet/dist/style.css';

export default function Modal({ place, setPlace, time, setTime }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ModalButton setOpen={setOpen} />
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <ModalContents setOpen={setOpen} place={place} setPlace={setPlace} time={time} setTime={setTime} />
      </BottomSheet>
    </div>
  );
}
