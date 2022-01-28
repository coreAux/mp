import React from "react"

// const LinkedInIcon = ({ ...props }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="linkedinTitle linkedinDesc" role="img" {...props} >
//     <title id="linkedinTitle">LinkedIn Logo</title>
//     <desc id="linkedinDesc">LinkedIn Logo in a circle</desc>
//     <defs>
//       {/*<linearGradient id="grad_linkedin" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop
//           offset="0%"
//           style="stop-color:hsl({(cursor.x /  2)}, 100%, 70.6%); stop-opacity:1" />
//         <stop
//           offset="100%"
//           style="stop-color:hsl({(cursor.x / 2) - 50}, 100%, 70.6%); stop-opacity:1" />
//       </linearGradient>*/}
//     </defs>
//     <circle cx="12" cy="12" r="11"/>
//     <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" fill="url(#grad_linkedin)" />
//   </svg>
// )

const LinkedInIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props} >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
)

export default LinkedInIcon
