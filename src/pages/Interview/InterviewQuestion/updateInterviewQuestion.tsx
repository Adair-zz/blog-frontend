import { MDEditor } from '@/components';
import {
  deleteInterviewQuestionById,
  updateInterviewQuestion,
} from '@/services/interview/interviewController';
import { EditOutlined } from '@ant-design/icons';
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

const UpdateInterviewQuestion: React.FC<{ questionVO: API.InterviewQuestionVO }> = (props) => {
  const [language, setLanguage] = useState<string>(props.questionVO.language ?? 'Chinese');
  const [topic, setTopic] = useState<string>(props.questionVO.topic ?? '');
  const [question, setQuestion] = useState<string>(props.questionVO.question ?? '');
  const [mdValue, setMdValue] = useState<string>(props.questionVO.answer ?? '');
  const [form] = ProForm.useForm();

  const deleteInterviewQuestion = async () => {
    try {
      const response = await deleteInterviewQuestionById({ id: props.questionVO.id });
      if (response.code === 0) {
        setLanguage('Chinese');
        setTopic('');
        setQuestion('');
        setMdValue('');
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
    } catch (e: any) {
      message.error('删除失败, 发生错误!');
    }
  };

  return (
    <DrawerForm
      // @ts-ignore
      labelWidth="auto"
      trigger={<EditOutlined key="edit" />}
      form={form}
      onFinish={async (values: any) => {
        if (!mdValue || mdValue.trim() === '') {
          message.error('Answer cannot be empty!');
          return;
        }
        try {
          const response = await updateInterviewQuestion({
            id: props.questionVO.id,
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
      submitter={{
        render: (_, dom) => (
          <>
            {dom}
            <Button
              onClick={deleteInterviewQuestion}
              style={{ margin: '0 15px' }}
              type="primary"
              danger
            >
              删除
            </Button>
            {dom.pop()}
          </>
        ),
      }}
      initialValues={
        {
          // language: language,
          // topic: topic,
          // question: question,
        }
      }
    >
      <ProForm.Group>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          label="Language"
          radioType="button"
          name="language"
          initialValue={language}
          options={['English', 'Chinese']}
          rules={[{ required: true }]}
        />

        <ProFormSelect
          width="sm"
          options={topicOptions}
          name="topic"
          label="Topic"
          initialValue={topic}
          rules={[{ required: true, message: 'Please choose topic!' }]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="question"
          width="xl"
          label="Question"
          initialValue={question}
          placeholder="Please enter your question!"
          rules={[{ required: true, message: 'Please enter your question!' }]}
        />
      </ProForm.Group>

      <MDEditor value={mdValue} onChange={setMdValue} />
    </DrawerForm>
  );
};

export default UpdateInterviewQuestion;
