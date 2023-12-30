import MDEditor from '@/components/MDEditor';
import { addInterviewQuestion } from '@/services/interview/interviewController';
import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useState } from 'react';
import { topicOptions } from './constants';

const QuestionSubmit: React.FC = () => {
  const [mdValue, setMdValue] = useState<string>('');

  return (
    <DrawerForm
      // @ts-ignore
      labelWidth="auto"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          添加面试题目
        </Button>
      }
      onFinish={async (values: any) => {
        if (!mdValue || mdValue.trim() === '') {
          message.error('Answer cannot be empty!');
          return;
        }
        try {
          const response = await addInterviewQuestion({
            language: values.language,
            topic: values.topic,
            question: values.question,
            answer: mdValue,
          });
          if (response.code === 0) {
            message.success('提交成功');
          } else {
            message.error('提交失败');
          }
        } catch (error) {
          message.error('提交失败, 发生错误!');
        }
      }}
      initialValues={{
        name: 'None',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          label="Language"
          radioType="button"
          name="language"
          initialValue={'Chinese'}
          options={['English', 'Chinese']}
          rules={[{ required: true }]}
        />

        <ProFormSelect
          width="sm"
          options={topicOptions}
          name="topic"
          label="Topic"
          rules={[{ required: true, message: 'Please choose topic!' }]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="question"
          width="xl"
          label="Question"
          placeholder="Please enter your question!"
          rules={[{ required: true, message: 'Please enter your question!' }]}
        />
      </ProForm.Group>

      <MDEditor value={mdValue} handleChange={setMdValue} />
    </DrawerForm>
  );
};

export default QuestionSubmit;
