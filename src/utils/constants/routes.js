export const USER_ROUTES = {
   INDEX: {
      path: '/',
      label: 'index',
   },
   MAIN: {
      path: '/main',
      label: 'MAIN',
   },
   REGION: {
      path: '/main/:region',
      label: 'REGIONS',
   },
   HOUSE: {
      path: '/main/:region/:house',
      label: 'Hause',
   },
   PROFILE: {
      path: '/profile',
      label: 'Profile',
   },
   SUBMIT_AN_AD: {
      path: '/submit-an-ad',
      label: 'Submit-an-ad',
   },
}

export const ADMIN_ROUTES = {
   ANNOUNCEMENT: {
      path: '/announcement',
      label: 'Announcement',
   },
   ANNOUNCEMENT_NAME: {
      path: '/announcement/:name',
      label: 'Announcement',
   },
   USERS: {
      path: '/users',
      label: 'Users',
   },
   USER: {
      path: '/users/:userId',
      label: 'Announcement',
   },
   USER_HOUSE: {
      path: '/users/:userId/:houseId',
      label: 'User-house',
   },
   ALL_HOUSING: {
      path: '/all-housing',
      label: 'All-housing',
   },
}
