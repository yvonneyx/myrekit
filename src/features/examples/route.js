import {
  Layout,
  WelcomePage,
  CounterPage,
  RedditListPage,
  Login,
  Forbidden403,
  SignInSideWithMaterialUi,
  DetailPage,
  ListPage,
  Chat,
} from './';
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html


export default {
  path: 'examples',
  component: Layout,
  childRoutes: [
    { path: '', component: WelcomePage, isIndex: true },
    { path: 'counter', component: CounterPage },
    { path: 'reddit', role:'admin', component: RedditListPage },
    { path: 'login', component: Login },
    { path: '403', component: Forbidden403 },
    { path: 'sign_with_material_ui', component: SignInSideWithMaterialUi },
    { path: 'detailpage', component: DetailPage },
    { path: 'listpage', component: ListPage },
    { path: 'chat', component: Chat },
  ],
};
