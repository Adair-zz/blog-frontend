declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListInterviewQuestionVO = {
    code?: number;
    data?: InterviewQuestionVO[];
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: string;
    message?: string;
  };

  type DeleteRequest = {
    id?: string;
  };

  type InterviewQuestionAddRequest = {
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
  };

  type InterviewQuestionQueryRequest = {
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
  };

  type InterviewQuestionVO = {
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
    userId?: string;
    createTime?: string;
  };
}
