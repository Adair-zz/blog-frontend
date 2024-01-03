import { MDViewer } from '@/components';
import { getInterviewQuestionsByQuery } from '@/services/interview/interviewController';
import { EditOutlined } from '@ant-design/icons';
import {
  LightFilter,
  ProCard,
  ProForm,
  ProFormRadio,
  ProFormSelect,
} from '@ant-design/pro-components';
import { Space, Typography } from 'antd';
import React, { useState } from 'react';
import { topicOptions } from './constants';
import InterviewQuestionSubmit from './interviewQuestionSubmit';

const InterviewQuestion: React.FC = () => {
  const [questionList, setQuestionList] = useState<API.InterviewQuestionVO[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Space
        size="large"
        style={{ width: '98%', justifyContent: 'space-between', marginBottom: '30px' }}
      >
        <Typography.Title level={2}>Interview Question</Typography.Title>
        <InterviewQuestionSubmit />
      </Space>

      <LightFilter
        // @ts-ignore
        labelWidth="auto"
        onFinish={async (values: any) => {
          try {
            setLoading(true);
            setQuestionList(undefined);
            const response = await getInterviewQuestionsByQuery(values);
            if (response.code === 0) {
              setQuestionList(response.data);
              setLoading(false);
            } else {
              setLoading(false);
            }
          } catch (error) {
            setLoading(false);
          }
        }}
        initialValues={{
          name: 'None',
          useMode: 'chapter',
        }}
        style={{
          marginBottom: '20px',
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
          />

          <ProFormSelect width="md" options={topicOptions} name="topic" label="Topic" />
        </ProForm.Group>
      </LightFilter>

      {questionList &&
        questionList.map((singleQuestion) => (
          <ProCard
            loading={loading}
            title={singleQuestion.question}
            subTitle={singleQuestion.topic}
            tooltip={singleQuestion.createTime}
            style={{ width: '98%', marginBottom: '10px' }}
            bordered
            actions={[<EditOutlined key="edit" />]}
            key={singleQuestion.createTime}
            headerBordered={true}
          >
            <MDViewer value={singleQuestion.answer ? singleQuestion.answer : ''} />
          </ProCard>
        ))}

      {!questionList && (
        <Typography.Title
          level={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '500px',
          }}
        >
          Not Found
        </Typography.Title>
      )}
    </div>
  );
};

export default InterviewQuestion;
