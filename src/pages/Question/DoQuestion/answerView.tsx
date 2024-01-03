import { MDViewer } from '@/components';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const AnswerView: React.FC<{ answer: string }> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Answer
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        // destroyOnClose
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        //   width={500}
      >
        <MDViewer value={props.answer} />
      </Modal>
    </>
  );
};

export default AnswerView;
