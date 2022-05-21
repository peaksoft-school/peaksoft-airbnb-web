import ProfileCard from '../cards/ProfileCard'

const MyAnnouncement = () => {
   const data = []
   return data.map((el) => (
      <ProfileCard
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

export default MyAnnouncement
