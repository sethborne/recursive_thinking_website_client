export const ROUTES_API = {
  users: '/users',
  lessons: '/lessons',
  interviewquestions: '/interviewquestions',
  interviewquestionsanswers: '/interviewquestionsanswers',
  skills: '/skills',
  homeScreenQuotes: '/homescreenquotes',
  ranks: '/ranks',
};

export const CEDV = {
  create: '/create',
  view: '/view',
  edit: '/edit',
  delete: '/delete',
};

export const ROUTES_REACT = {
  root: '/',
  dashboard: '/dashboard',

  users_create: `${ROUTES_API.users}${CEDV.create}`,
  users_create_id: `${ROUTES_API.users}${CEDV.create}/:id`,
};
