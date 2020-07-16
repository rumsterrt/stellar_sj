export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PLanding
  },
  {
    path: '/about',
    exact: true,
    component: components.PLanding
  }
]
