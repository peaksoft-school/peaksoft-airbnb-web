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
      path: '/profile/',
      label: 'Profile',
   },
   PROFILE_TABS: {
      PFOFILE_BOOKINGS: {
         path: '/profile/bookings',
         label: 'bookings',
      },
      PROFILE_MY_ANNOUNCEMENTS: {
         path: '/profile/my-announcements',
         label: 'my-announcements',
      },
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
      path: '/users:userId',
      label: 'Announcement',
   },
   USER_HOUSE: {
      path: '/user/:userId/:houseId',
      label: 'User-house',
   },
   USER_HOUSE_EDIT: {
      path: '/user/:userId/:houseId/edit',
      label: 'Edit',
   },
   ALL_HOUSING: {
      path: '/all-housing',
      label: 'All-housing',
   },
}
