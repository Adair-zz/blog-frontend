import { MDViewer } from '@/components';
import { getQuestionVOById } from '@/services/question/questionController';
import { Card, Skeleton, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import AnswerView from './answerView';

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
        <Card
          style={{ ...props.style }}
          actions={[
            <AnswerView
              key={questionVO.id}
              answer={questionVO.answer === undefined ? '' : questionVO.answer}
            />,
          ]}
        >
          <Skeleton loading={loading} active>
            <Typography.Title>{questionVO.title}</Typography.Title>
            <MDViewer value={questionVO.content === undefined ? '' : questionVO.content} />
          </Skeleton>
        </Card>
      )}
    </>
  );
};

export default QuestionView;
