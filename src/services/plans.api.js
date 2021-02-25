export const GetAllPlans = () => {

  return new Promise((res, rej) => {
    setTimeout(() => res([
      {
        id: 1,
        name:'Standard',
        price: 9,
        billedTime: 'montly',
        topFeatures: ['Unlimit search', '10 apps', 'Group calls']
      },
      {
        id: 2,
        name: 'Advanced',
        price: 15,
        billedTime: 'montly',
        topFeatures: ['Advance admin control', 'Domain verification', 'Message exports']
      },
      {
        id: 3,
        name: 'Enterprice',
        billedTime: 'yearly',
        topFeatures: ['Unlimit worspaces', 'Data loss prevention', 'Network control']
      }
    ]), 1000);
  });

};