export default {
  routes: [
    {
      method: 'GET',
      path: '/documents',
      handler: 'document.find',
      config: { auth: false }
    },
    {
      method: 'GET',
      path: '/documents/:id',
      handler: 'document.findOne',
      config: { auth: false }
    }
  ]
}
