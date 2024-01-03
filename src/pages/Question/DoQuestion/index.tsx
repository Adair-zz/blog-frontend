import { CodeEditor } from '@/components';
import { ProForm } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Select, Space } from 'antd';
import React, { useState } from 'react';
import { languageList } from '../constants';
import QuestionView from './questionView';

const DoQuestion: React.FC = () => {
  const { id = '' } = useParams();
  const [value, setValue] = useState<string>('');
  const [language, setLanguage] = useState<string>('java');

  return (
    <Space direction="horizontal" align="start" style={{ width: '100%' }}>
      <QuestionView id={id} style={{ height: '80vh', overflowY: 'auto', width: '600px' }} />
      <ProForm
      // onFinish={}
      // submitter={{
      //   render: (_, dom) => (
      //     <>
      //       {dom.pop()}
      //       <Button key="reset" onClick={handleCustomReset}>
      //         Reset
      //       </Button>
      //     </>
      //   )
      // }}
      >
        <Space direction="vertical">
          <Select
            defaultValue={language}
            onChange={setLanguage}
            style={{ width: 200 }}
            options={languageList}
          />
          <CodeEditor
            value={value}
            language={language}
            handleChange={setValue}
            style={{ minHeight: '400px', height: '65vh', width: '800px' }}
          />
        </Space>
      </ProForm>
    </Space>
  );
};

export default DoQuestion;
