import AdminCard from '../../../components/admin-card/AdminCard'

const Bookings = () => {
   const data = [
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hd',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
   ]
   return data.map((el) => (
      <AdminCard
         key={el.id}
         width="260px"
         images={el.Image}
         title={el.text}
         address={el.address}
         price={el.title}
         starRange={el.starRange}
         guest={el.guest}
         blocked={el.isBlocked}
         rejected={el.isRejected}
         isViewed={el.isViewed}
      />
   ))
}

export default Bookings
