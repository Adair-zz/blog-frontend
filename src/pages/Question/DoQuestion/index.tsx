import { CodeEditor } from '@/components';
import { ProForm } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Select, Space, message } from 'antd';
import React, { useState } from 'react';
import { doQuestionSubmit } from '../../../services/question/questionController';
import { javaCodeTemplate, languageList } from '../constants';
import QuestionView from './questionView';

const DoQuestion: React.FC = () => {
  const { id = '' } = useParams();
  const [codeValue, setCodeValue] = useState<string>(javaCodeTemplate);
  const [language, setLanguage] = useState<string>('java');

  const handleSubmit = async () => {
    try {
      const response = await doQuestionSubmit({
        questionId: parseInt(id),
        code: codeValue,
        language: language,
      });
      if (response.code === 0) {
        message.success('代码提交成功');
      } else {
        message.error('代码提交失败');
      }
    } catch (e: any) {
      message.error('代码提交失败');
    }
  };

  const resetForm = () => {
    setCodeValue(javaCodeTemplate);
  };

  return (
    <Space direction="horizontal" align="start" style={{ width: '100%' }}>
      <QuestionView id={id} style={{ height: '70vh', overflowY: 'auto', width: '500px' }} />
      <ProForm
        onFinish={handleSubmit}
        submitter={{
          render: (_, dom) => (
            <>
              {dom.pop()}
              <Button key="reset" onClick={resetForm} style={{ marginLeft: '10px' }}>
                Reset
              </Button>
            </>
          ),
        }}
      >
        <Space direction="vertical" style={{ marginBottom: '15px' }}>
          <Select
            defaultValue={language}
            onChange={setLanguage}
            style={{ width: 200 }}
            options={languageList}
          />
          <CodeEditor
            value={codeValue}
            language={language}
            handleChange={setCodeValue}
            style={{ minHeight: '400px', height: '65vh', width: '680px' }}
          />
        </Space>
      </ProForm>
    </Space>
  );
};

export default DoQuestion;
