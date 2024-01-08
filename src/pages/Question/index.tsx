import { ProList } from '@ant-design/pro-components';
import { Space, Tag, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';

import { listQuestionVOByPage } from '@/services/question/questionController';
import { useNavigate } from '@umijs/max';
import AddQuestion from './addQuestion';

const Question: React.FC = () => {
  const initSearchParams = {
    currentPage: 1,
    pageSize: 20,
    sortField: 'createTime',
    sortOrder: 'descend',
  };
  const [searchParams, setSearchParams] = useState<API.QuestionQueryRequest>({
    ...initSearchParams,
  });
  const [questionList, setQuestionList] = useState<API.QuestionVO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(questionList);
  const loadData = async () => {
    setLoading(true);
    try {
      const response = await listQuestionVOByPage(searchParams);
      if (response.data) {
        setQuestionList(response.data.records ?? []);
        setTotal(response.data.total ?? 0);
      } else {
        message.error('获取题目数据失败!');
      }
    } catch (e: any) {
      message.error('获取题目数据失败:' + e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  const navigate = useNavigate();

  return (
    <div>
      <Space
        size="large"
        style={{ width: '98%', justifyContent: 'space-between', marginBottom: '30px' }}
      >
        <Typography.Title level={2}>我的题目</Typography.Title>
        <AddQuestion />
      </Space>

      <ProList<API.QuestionVO>
        rowKey={'id'}
        headerTitle={' '}
        dataSource={questionList}
        metas={{
          title: {
            dataIndex: 'title',
            render: (text: React.ReactNode) => <div style={{ fontSize: 20 }}>{text}</div>,
          },
          subTitle: {
            dataIndex: 'tags',
            render: (dom: React.ReactNode) => (
              <Space size={0}>
                {Array.isArray(dom)
                  ? dom.map((tag: string) => (
                      <Tag color="#5BD8A6" key={tag}>
                        {tag}
                      </Tag>
                    ))
                  : null}
              </Space>
            ),
          },
        }}
        onRow={(question: API.QuestionVO) => ({
          onClick: () => {
            navigate(`/question/${question.id}`);
          },
          style: {
            cursor: 'pointer',
          },
        })}
        pagination={{
          onChange: (page, pageSize) => {
            setSearchParams({
              ...searchParams,
              currentPage: page,
              pageSize,
            });
          },
          current: searchParams.currentPage,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        loading={loading}
        style={{ width: '98%' }}
      />
    </div>
  );
};

export default Question;
