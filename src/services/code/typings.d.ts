declare namespace API {
  type doExecutionParams = {
    submittedQuestionId: number;
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
}
