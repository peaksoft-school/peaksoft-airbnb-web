export const ratingPercentageCalculator = (data = []) => {
   const ratings = {
      fife: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
   }
   data.forEach((el) => {
      if (el.rating === 5) {
         ratings.fife += 1
      } else if (el.rating === 4) {
         ratings.four += 1
      } else if (el.rating === 3) {
         ratings.three += 1
      } else if (el.rating === 2) {
         ratings.two += 1
      } else if (el.rating === 1) {
         ratings.one += 1
      }
      return el
   })
   const percentRatings = Object.values(ratings).reduce((acc, cur) => {
      return acc + cur
   })
   const fife = Math.round((100 / percentRatings) * ratings.fife)
   const four = Math.round((100 / percentRatings) * ratings.four)
   const three = Math.round((100 / percentRatings) * ratings.three)
   const two = Math.round((100 / percentRatings) * ratings.two)
   const one = Math.round((100 / percentRatings) * ratings.one)

   const isValidPercent = (percent) => {
      if (data.length > 0) return percent
      return 0
   }

   return {
      ratings: [
         { star: 5, percent: isValidPercent(fife) },
         {
            star: 4,
            percent: isValidPercent(four),
         },
         {
            star: 3,
            percent: isValidPercent(three),
         },
         {
            star: 2,
            percent: isValidPercent(two),
         },
         {
            star: 1,
            percent: isValidPercent(one),
         },
      ],
   }
}
