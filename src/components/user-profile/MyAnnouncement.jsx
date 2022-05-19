import ProfileCard from '../cards/ProfileCard'

const MyAnnouncement = () => {
   const data = [
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
         isRejected: true,
         isViewed: true,
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
   ]
   return data.map((el) => (
      <ProfileCard
         width="260px"
         images={el.Image}
         day={el.day}
         text={el.text}
         address={el.address}
         title={el.title}
         starRange={el.starRange}
         guest={el.guest}
         blocked={el.isBlocked}
         rejected={el.isRejected}
         isViewed={el.isViewed}
      />
   ))
}

export default MyAnnouncement
