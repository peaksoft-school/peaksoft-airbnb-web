import ProfileCard from '../cards/ProfileCard'

const MyAnnouncement = () => {
   const data = []
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
