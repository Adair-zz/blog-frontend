declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getByIdParams = {
    userId: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type listByIdsParams = {
    idList: number[];
  };

  type LoginUserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageUser = {
    records?: User[];
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

  type PageUserVO = {
    records?: UserVO[];
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

  type User = {
    id?: number;
    userAccount?: string;
    userPassword?: string;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    currentPage?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    userName?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    confirmPassword?: string;
  };

  type UserUpdateMyRequest = {
    userName?: string;
    userAvatar?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type UserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    createTime?: string;
  };
}
