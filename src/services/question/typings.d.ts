declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageQuestionVO = {
    code?: number;
    data?: PageQuestionVO;
    message?: string;
  };

  type BaseResponseQuestionVO = {
    code?: number;
    data?: QuestionVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getQuestionByIdParams = {
    questionId: number;
  };

  type getQuestionVOByIdParams = {
    id: number;
  };

  type getSubmittedQuestionByIdParams = {
    submittedQuestionId: number;
  };

  type JudgeCase = {
    input?: string;
    output?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageQuestionVO = {
    records?: QuestionVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Question = {
    id?: number;
    title?: string;
    content?: string;
    tags?: string;
    answer?: string;
    judgeCase?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    idDelete?: number;
  };

  type QuestionAddRequest = {
    title?: string;
    content?: string;
    tags?: string[];
    answer?: string;
    judgeCase?: JudgeCase[];
  };

  type QuestionQueryRequest = {
    currentPage?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    title?: string;
    content?: string;
    tags?: string[];
    answer?: string;
    userId?: number;
  };

  type QuestionUpdateRequest = {
    id?: number;
    title?: string;
    content?: string;
    tags?: string[];
    answer?: string;
    judgeCase?: JudgeCase[];
  };

  type QuestionVO = {
    id?: number;
    title?: string;
    content?: string;
    tags?: string[];
    answer?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
  };

  type SubmittedQuestion = {
    id?: number;
    language?: string;
    code?: string;
    judgeInfo?: string;
    status?: number;
    questionId?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    idDelete?: number;
  };

  type SubmittedQuestionAddRequest = {
    language?: string;
    code?: string;
    questionId?: number;
  };
}
