export interface IContactRes {
  _meta: {
    success: boolean;
    code: number;
    message: string;
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
    rateLimit: {
      limit: number;
      remaining: number;
      reset: number;
    };
  };
  result: IContact[];
}

export interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  status: string;
  _links: {
    self: {
      href: string;
    };
    edit: {
      href: string;
    };
    avatar: {
      href: string;
    };
  };
}
