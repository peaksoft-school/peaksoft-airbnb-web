import ProfileCard from '../cards/ProfileCard'

const Bookings = () => {
   const data = []
   return data.map((el) => (
      <ProfileCard
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
