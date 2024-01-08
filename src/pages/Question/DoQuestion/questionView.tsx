import { MDViewer } from '@/components';
import { getQuestionVOById } from '@/services/question/questionController';
import { Card, Skeleton, Tabs, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';

interface QuestionViewProps {
  id: string;
  style?: React.CSSProperties;
}

const QuestionView: React.FC<QuestionViewProps> = (props) => {
  const [questionVO, setQuestionVO] = useState<API.QuestionVO>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadQuestionVOById = async () => {
    setLoading(true);
    try {
      const response = await getQuestionVOById({
        id: parseInt(props.id),
      });
      if (response.code === 0) {
        setQuestionVO(response.data);
      } else {
        message.error('获取题目失败!');
      }
    } catch (e: any) {
      message.error('获取题目失败!');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadQuestionVOById();
  }, []);

  return (
    <>
      {questionVO && (
        <Tabs
          items={[
            {
              key: 'content',
              label: 'Content',
              children: (
                <Card style={{ ...props.style }}>
                  <Skeleton loading={loading} active>
                    <Typography.Title level={2}>{questionVO.title}</Typography.Title>
                    <MDViewer value={questionVO.content === undefined ? '' : questionVO.content} />
                  </Skeleton>
                </Card>
              ),
            },
            {
              key: 'answer',
              label: 'Solution',
              children: (
                <Card style={{ ...props.style }}>
                  <MDViewer value={questionVO.answer === undefined ? '' : questionVO.answer} />
                </Card>
              ),
            },
            {
              key: 'submissions',
              label: 'Submissions',
              children: (
                <Card style={{ ...props.style }}>
                  <Typography.Text>In Progress</Typography.Text>
                </Card>
              ),
            },
          ]}
        />
      )}
    </>
  );
};

export default QuestionView;
