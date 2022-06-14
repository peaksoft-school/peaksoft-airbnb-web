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
      path: '/main/regions',
      label: 'REGIONS',
   },
   HOUSE: {
      path: '/main/:region/:homeId',
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
   PROFILE_ANNOUNCEMENTS_HOME_DETAIL: {
      path: '/profile/my-announcements/:homeId',
      label: 'my-announcements',
   },
   PROFILE_BOOKINGS_HOME_DETAIL: {
      path: '/profile/bookings/:homeId',
      label: 'bookings',
   },
   LISTING_EDIT: {
      path: '/profile/my-announcements/:homeId/edit',
      label: 'edit',
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
   ADMIN_PROFILE_ANNOUNCEMENTS_HOME_DETAIL: {
      path: '/users/:userId/my-announcements/:homeId',
      label: 'my-announcements',
   },
   ADMIN_PROFILE_BOOKINGS_HOME_DETAIL: {
      path: '/users/:userId/bookings/:homeId',
      label: 'bookings',
   },
}
