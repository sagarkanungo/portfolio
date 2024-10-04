import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="p-5 border border-gray-500  bg-gray-900 flex flex-col lg:flex-row 
    justify-between items-start lg:items-center lg:px-72 ">
      <div className="mb-4 lg:mb-0">
        <p className='font-serif'>
          @2024 Sagar Kanungo <span>All Rights Reserved</span>
        </p>
      </div>
      <div className="space-y-4 lg:space-y-0  flex flex-col  lg:space-x-5 lg:flex lg:flex-row font-serif">
        <Link href="#about" className="hover:text-orange-600 underline">
          About
        </Link>
        <Link href="/privacy" className="hover:text-orange-600 underline">
          Privacy Policy
        </Link>
        <Link href="/licensing" className="hover:text-orange-600 underline">
          Licensing
        </Link>
        <Link href="#contact" className="hover:text-orange-600 underline">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Footer
// [
//   {
//       "$match": {
//           "Description": {
//               "$regex": ".*(Created|Moved|Cancelled|Updated).*"
//           },
//           "$expr": {
//               "$cond": {
//                   "if": { "$and": [{ "$eq": ["{{dateRange1.value.start}}", ""] }, { "$eq": ["{{dateRange1.value.end}}", ""] }] }, 
//                   "then": true,
//                   "else": { 
//                       "$and": [
//                           { "$gte": ["$Booking Date", "{{dateRange1.value.start}}"] },
//                           { "$lte": ["$Booking Date", "{{dateRange1.value.end}}"] }
//                       ]
//                   } 
//               }
//           }
//       }
//   },
//   {
//       "$group": {
//           "_id": null,
//           "totalCreated": {
//               "$sum": {
//                   "$cond": [{ "$regexMatch": { "input": "$Description", "regex": "Created" } }, 1, 0]
//               }
//           },
//           "totalMoved": {
//               "$sum": {
//                   "$cond": [{ "$regexMatch": { "input": "$Description", "regex": "Moved" } }, 1, 0]
//               }
//           },
//           "totalCancelled": {
//               "$sum": {
//                   "$cond": [{ "$regexMatch": { "input": "$Description", "regex": "Cancelled" } }, 1, 0]
//               }
//           },
//           "totalUpdated": {
//               "$sum": {
//                   "$cond": [{ "$regexMatch": { "input": "$Description", "regex": "Updated" } }, 1, 0]
//               }
//           }
//       }
//   },
//   {
//       "$project": {
//           "_id": 0,
//           "data": [
//               {
//                   "title": "Created",
//                   "count": "$totalCreated"
//               },
//               {
//                   "title": "Moved",
//                   "count": "$totalMoved"
//               },
//               {
//                   "title": "Cancelled",
//                   "count": "$totalCancelled"
//               },
//               {
//                   "title": "Updated",
//                   "count": "$totalUpdated"
//               }
//           ]
//       }
//   }
// ]
