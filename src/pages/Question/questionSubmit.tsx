import { MDEditor } from '@/components';
import { addQuestion } from '@/services/question/questionController';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { DrawerForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { Button, Form, Input, Select, Space, Typography, message } from 'antd';
import React, { useState } from 'react';
import { AnswerTemplate, QuestionTagOptions } from './constants';

const QuestionSubmit: React.FC = () => {
  const [contentValue, setContentValue] = useState<string>('');
  const [answerValue, setAnswerValue] = useState<string>(AnswerTemplate);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
        try {
          const response = await addQuestion({
            title: values.title,
            content: contentValue,
            tags: values.tags,
            answer: answerValue,
            judgeCase: values.judgeCase,
          });
          if (response.code === 0) {
            message.success('题目提交成功!');
          } else {
            message.error('题目提交失败!');
          }
        } catch (error) {
          message.error('题目提交失败, 发生错误!');
        }
      }}
      initialValues={{
        name: 'None',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          name="title"
          width="md"
          label="Title"
          placeholder="Please enter your title!"
          rules={[{ required: true, message: 'Please enter your title!' }]}
        />

        <Form.Item<API.QuestionAddRequest>
          label="Tags"
          name="tags"
          style={{ width: '328px' }}
          rules={[{ required: true, message: 'Please input your tags!' }]}
        >
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Tags Mode"
            onChange={handleChange}
            options={QuestionTagOptions}
          />
        </Form.Item>
      </ProForm.Group>

      <div style={{ marginBottom: 16 }}>
        <Typography.Text type="danger" style={{ marginRight: 4 }}>
          *
        </Typography.Text>
        <Typography.Text style={{ marginRight: 8 }}>Content</Typography.Text>
      </div>
      <MDEditor value={contentValue} onChange={setContentValue} />

      <div style={{ marginTop: 25, marginBottom: 16 }}>
        <Typography.Text type="danger" style={{ marginRight: 4 }}>
          *
        </Typography.Text>
        <Typography.Text style={{ marginRight: 8 }}>Answer</Typography.Text>
      </div>
      <MDEditor value={answerValue} onChange={setAnswerValue} />

      <div style={{ marginTop: 25, marginBottom: 16 }}>
        <Typography.Text type="danger" style={{ marginRight: 4 }}>
          *
        </Typography.Text>
        <Typography.Text style={{ marginRight: 8 }}>Judge Cases</Typography.Text>
      </div>
      <Form.List name="judgeCase">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'input']}
                  rules={[{ required: true, message: 'Missing input' }]}
                  style={{ width: '300px' }}
                >
                  <Input placeholder="Input" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'output']}
                  rules={[{ required: true, message: 'Missing ouput' }]}
                  style={{ width: '300px' }}
                >
                  <Input placeholder="Output" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </DrawerForm>
  );
};

export default QuestionSubmit;
