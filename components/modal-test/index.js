// import React from 'react';
// import { BottomSheet } from 'react-spring-bottom-sheet';

// import 'react-spring-bottom-sheet/dist/style.css';

// export default function Bottom() {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <div>
//       <button onClick={() => setOpen(true)}>Fine</button>
//       <BottomSheet open={open} onDismiss={() => setOpen(false)}>
//         <button onClick={() => setOpen(false)}>Close</button>
//       </BottomSheet>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { BottomModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';

import 'react-spring-modal/styles.css';

/**
 * Renders a white modal that slides up from the bottom and back down when leaving.
 *
 * Has a built-in max-width for larger devices.
 * The max-width for smaller devices is the entire screen.
 */
export default function Bottom() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open bottom modal</button>
      <BottomModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
        <ModalTitle>My Bottom Modal</ModalTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <ModalCloseTarget>
          <button>Close</button>
        </ModalCloseTarget>
      </BottomModal>
    </>
  );
}
