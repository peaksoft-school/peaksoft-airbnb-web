import AdminCard from '../../../components/admin-card/AdminCard'
import first from '../../../assets/images/Feadback1.jpg'
import second from '../../../assets/images/Feadback2.jpg'
import third from '../../../assets/images/Feedback3.jpg'
import fourth from '../../../assets/images/Feedback4.jpg'

const MyAnnouncement = () => {
   const data = [
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         text: 'hvvbhjbvc',
         address: 'ssdfsdf',
         price: '54',
         starRange: '4',
         guest: 4,
      },
   ]
   return data.map((el) => (
      <AdminCard
         key={el.id}
         width="260px"
         images={el.images}
         title={el.text}
         address={el.address}
         price={el.price}
         starRange={el.starRange}
         guest={el.guest}
      />
   ))
}

export default MyAnnouncement
