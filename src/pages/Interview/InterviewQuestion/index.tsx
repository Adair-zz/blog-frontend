import { MDViewer } from '@/components';
import { getInterviewQuestionsByQuery } from '@/services/interview/interviewController';
import {
  LightFilter,
  ProCard,
  ProForm,
  ProFormRadio,
  ProFormSelect,
} from '@ant-design/pro-components';
import { Skeleton, Space, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import AddInterviewQuestion from './addInterviewQuestion';
import { topicOptions } from './constants';
import UpdateInterviewQuestion from './updateInterviewQuestion';

const InterviewQuestion: React.FC = () => {
  const [questionList, setQuestionList] = useState<API.InterviewQuestionVO[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(false);

  const initLoadQuestionList = async () => {
    setLoading(true);
    try {
      const response = await getInterviewQuestionsByQuery({ language: 'Chinese' });
      if (response.code === 0) {
        setQuestionList(response.data);
        setLoading(false);
      } else {
        message.error('获取数据失败!');
      }
    } catch (e: any) {
      message.error('获取数据失败!');
    }
  };

  useEffect(() => {
    initLoadQuestionList();
  }, []);

  return (
    <div>
      <Space
        size="large"
        style={{ width: '98%', justifyContent: 'space-between', marginBottom: '10px' }}
      >
        <Typography.Title level={2}>Interview Question</Typography.Title>
        <AddInterviewQuestion />
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
          marginBottom: '10px',
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

      {questionList ? (
        questionList.length > 0 ? (
          questionList.map((singleQuestion) => (
            <ProCard
              loading={loading}
              title={singleQuestion.question}
              subTitle={singleQuestion.topic}
              tooltip={singleQuestion.createTime}
              style={{ width: '98%', marginBottom: '10px' }}
              bordered
              actions={[
                <UpdateInterviewQuestion questionVO={singleQuestion} key={singleQuestion.id} />,
              ]}
              key={singleQuestion.createTime}
              headerBordered={true}
            >
              <MDViewer value={singleQuestion.answer ? singleQuestion.answer : ''} />
            </ProCard>
          ))
        ) : (
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
        )
      ) : (
        <Skeleton active style={{ marginBottom: '10px' }} />
      )}
    </div>
  );
};

export default InterviewQuestion;
