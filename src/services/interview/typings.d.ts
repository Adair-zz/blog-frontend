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
    data?: number;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type InterviewQuestionAddRequest = {
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
  };

  type InterviewQuestionQueryRequest = {
    id?: number;
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
  };

  type InterviewQuestionUpdateRequest = {
    id?: number;
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
  };

  type InterviewQuestionVO = {
    id?: number;
    language?: string;
    topic?: string;
    question?: string;
    answer?: string;
    userId?: number;
    createTime?: string;
  };
}
