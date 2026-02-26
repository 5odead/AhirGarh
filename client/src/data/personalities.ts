export interface Personality {
  id: number;
  name: string;
  nameHi: string;
  category: string;
  born: string;
  died: string;
  birthPlace: string;
  knownFor: string;
  photo: string;
  bio: string;
  achievements: string[];
}

export const personalities: Personality[] = [
  {
    id: 1,
    name: "Mulayam Singh Yadav",
    nameHi: "मुलायम सिंह यादव",
    category: "Politicians",
    born: "22 November 1939",
    died: "10 October 2022",
    birthPlace: "Saifai, Etawah, Uttar Pradesh",
    knownFor: "Founder of Samajwadi Party",
    photo: "",
    bio: "Mulayam Singh Yadav was an Indian politician who served as the Chief Minister of Uttar Pradesh three times and as the Minister of Defence of India. He was the founder of the Samajwadi Party, one of the major political parties in India. Born into a farming family in Saifai village of Etawah district, he rose through the ranks of socialist politics to become one of the most influential politicians in north India.",
    achievements: [
      "Founded Samajwadi Party in 1992",
      "Chief Minister of Uttar Pradesh — 1989, 1993, 2003",
      "Minister of Defence of India — 1996",
      "Member of Parliament for over 3 decades"
    ]
  },
  {
    id: 2,
    name: "Akhilesh Yadav",
    nameHi: "अखिलेश यादव",
    category: "Politicians",
    born: "1 July 1973",
    died: "",
    birthPlace: "Saifai, Etawah, Uttar Pradesh",
    knownFor: "Chief Minister of Uttar Pradesh",
    photo: "",
    bio: "Akhilesh Yadav is an Indian politician serving as the President of the Samajwadi Party. He served as the Chief Minister of Uttar Pradesh from 2012 to 2017, becoming the youngest person to hold that office. He is the son of Samajwadi Party founder Mulayam Singh Yadav.",
    achievements: [
      "Chief Minister of Uttar Pradesh 2012-2017",
      "Youngest CM in UP history",
      "President of Samajwadi Party",
      "Developed Agra-Lucknow Expressway and Lucknow Metro"
    ]
  },
  {
    id: 3,
    name: "Lalu Prasad Yadav",
    nameHi: "लालू प्रसाद यादव",
    category: "Politicians",
    born: "11 June 1948",
    died: "",
    birthPlace: "Phulwaria, Gopalganj, Bihar",
    knownFor: "Founder of Rashtriya Janata Dal",
    photo: "",
    bio: "Lalu Prasad Yadav is an Indian politician and the founder of the Rashtriya Janata Dal party. He served as the Chief Minister of Bihar and as the Union Railway Minister of India. He is one of the most prominent OBC leaders in Indian politics.",
    achievements: [
      "Chief Minister of Bihar — 1990 to 1997",
      "Union Railway Minister of India — 2004 to 2009",
      "Founded Rashtriya Janata Dal in 1997",
      "Known for turnaround of Indian Railways"
    ]
  },
  {
    id: 4,
    name: "Bindheshwari Prasad Mandal",
    nameHi: "बिंदेश्वरी प्रसाद मंडल",
    category: "Politicians",
    born: "1915",
    died: "1982",
    birthPlace: "",
    knownFor: "Chair of Mandal Commission",
    photo: "",
    bio: "Bindheshwari Prasad Mandal was an Indian politician who chaired the Mandal Commission, which recommended reservations for Other Backward Classes in government jobs and education.",
    achievements: [
      "Chief Minister of Bihar 1963 and 1979",
      "Chaired Mandal Commission 1979-1980"
    ]
  },
  {
    id: 5,
    name: "Rao Birender Singh",
    nameHi: "राव बीरेंद्र सिंह",
    category: "Politicians",
    born: "20 February 1921",
    died: "30 September 2009",
    birthPlace: "Haryana",
    knownFor: "Chief Minister of Haryana",
    photo: "",
    bio: "Rao Birender Singh was an Indian politician who served as Chief Minister of Haryana and later as a minister in the Government of India.",
    achievements: [
      "First Chief Minister of Haryana 1966-1967",
      "Union Minister of Shipping and Transport"
    ]
  },
  {
    id: 6,
    name: "Tej Pratap Yadav",
    nameHi: "तेज प्रताप यादव",
    category: "Politicians",
    born: "9 November 1988",
    died: "",
    birthPlace: "Gopalganj, Bihar",
    knownFor: "Former Health Minister of Bihar",
    photo: "",
    bio: "Tej Pratap Yadav is an Indian politician and member of the Rashtriya Janata Dal. He is the eldest son of Lalu Prasad Yadav and has served as a cabinet minister in Bihar.",
    achievements: [
      "Minister for Health in Bihar Government",
      "Member of Bihar Legislative Assembly"
    ]
  },
  {
    id: 7,
    name: "Tejashwi Yadav",
    nameHi: "तेजस्वी यादव",
    category: "Politicians",
    born: "9 November 1989",
    died: "",
    birthPlace: "Gopalganj, Bihar",
    knownFor: "Deputy Chief Minister of Bihar",
    photo: "",
    bio: "Tejashwi Yadav is an Indian politician and cricketer serving as Deputy Chief Minister of Bihar. He is the younger son of Lalu Prasad Yadav and leader of the Rashtriya Janata Dal.",
    achievements: [
      "Deputy Chief Minister of Bihar",
      "Leader of Opposition in Bihar Assembly",
      "Played for Delhi Daredevils in IPL"
    ]
  },
  {
    id: 8,
    name: "D. P. Yadav",
    nameHi: "डी. पी. यादव",
    category: "Politicians",
    born: "",
    died: "",
    birthPlace: "",
    knownFor: "Founder of Rashtriya Parivartan Dal",
    photo: "",
    bio: "D. P. Yadav is an Indian politician and founder of the Rashtriya Parivartan Dal.",
    achievements: [
      "Founder of Rashtriya Parivartan Dal"
    ]
  },
  {
    id: 9,
    name: "Rahul Yadav",
    nameHi: "राहुल यादव",
    category: "Entrepreneurs",
    born: "",
    died: "",
    birthPlace: "",
    knownFor: "Former CEO of Housing.com",
    photo: "",
    bio: "Rahul Yadav is an Indian entrepreneur known for his controversial tenure as CEO of Housing.com and founding Intelligent Interfaces.",
    achievements: [
      "Co-founder and ex-CEO of Housing.com",
      "Founder of Intelligent Interfaces"
    ]
  },
  {
    id: 10,
    name: "Virender Singh Yadav",
    nameHi: "विरेंदर सिंह यादव",
    category: "Athletes",
    born: "4 December 1986",
    died: "",
    birthPlace: "Haryana, India",
    knownFor: "Para-wrestler",
    photo: "",
    bio: "Virender Singh Yadav is an Indian para-wrestler who competes in the 57 kg category. He is deaf and has won multiple international medals.",
    achievements: [
      "4-time Deaflympics gold medalist",
      "Padma Shri awardee"
    ]
  },
  {
    id: 11,
    name: "Suryakumar Yadav",
    nameHi: "सूर्यकुमार यादव",
    category: "Athletes",
    born: "14 September 1990",
    died: "",
    birthPlace: "Mumbai, Maharashtra",
    knownFor: "Indian cricketer",
    photo: "",
    bio: "Suryakumar Yadav is an Indian international cricketer who plays for the Mumbai Indians in IPL and captains the Indian T20I team.",
    achievements: [
      "No. 1 T20I batsman (ICC)",
      "Mumbai Indians captain",
      "2023 Major League Cricket MVP"
    ]
  },
  {
    id: 12,
    name: "Pappu Yadav",
    nameHi: "पप्पू यादव",
    category: "Politicians",
    born: "25 January 1969",
    died: "",
    birthPlace: "Purnia, Bihar",
    knownFor: "Independent MP from Purnia",
    photo: "",
    bio: "Pappu Yadav is an Indian politician who has represented Purnia constituency as an independent MP.",
    achievements: [
      "Elected MP from Purnia Lok Sabha"
    ]
  },
  {
    id: 13,
    name: "Dimple Yadav",
    nameHi: "डिंपल यादव",
    category: "Politicians",
    born: "15 January 1972",
    died: "",
    birthPlace: "Delhi",
    knownFor: "MP Mainpuri",
    photo: "",
    bio: "Dimple Yadav is an Indian politician and Member of Parliament from Mainpuri. She is the wife of former UP CM Akhilesh Yadav.",
    achievements: [
      "MP from Kannauj and Mainpuri",
      "First Lady of Uttar Pradesh 2012-2017"
    ]
  },
  {
    id: 14,
    name: "Ram Naresh Yadav",
    nameHi: "राम नरेश यादव",
    category: "Politicians",
    born: "1926",
    died: "25 February 2015",
    birthPlace: "Saurai, Azamgarh, UP",
    knownFor: "Governor of Madhya Pradesh",
    photo: "",
    bio: "Ram Naresh Yadav was an Indian politician who served as Chief Minister of Uttar Pradesh and later as Governor of Madhya Pradesh.",
    achievements: [
      "Chief Minister of Uttar Pradesh 1977-1979",
      "Governor of Madhya Pradesh 2011-2014"
    ]
  },
  {
    id: 15,
    name: "Elvish Yadav",
    nameHi: "एल्विश यादव",
    category: "Entertainers",
    born: "22 September 1997",
    died: "",
    birthPlace: "Faridabad, Haryana",
    knownFor: "YouTuber and Bigg Boss OTT 2 winner",
    photo: "",
    bio: "Elvish Yadav is an Indian YouTuber, rapper and internet personality known for his comedy videos and music. He gained fame after winning Bigg Boss OTT Season 2.",
    achievements: [
      "Winner of Bigg Boss OTT 2 (2023)",
      "Most subscribed YouTuber in India (non-corporate)",
      "Over 15 million YouTube subscribers"
    ]
  },
  {
    id: 16,
    name: "Kuldeep Yadav",
    nameHi: "कुलदीप यादव",
    category: "Athletes",
    born: "14 December 1994",
    died: "",
    birthPlace: "Kanpur, Uttar Pradesh",
    knownFor: "Indian cricketer (left-arm spinner)",
    photo: "",
    bio: "Kuldeep Yadav is an Indian international cricketer who plays as a left-arm wrist-spin bowler for India, Delhi Capitals and Uttar Pradesh.",
    achievements: [
      "300+ international wickets",
      "Key player in India's 2024 T20 World Cup victory",
      "Hat-trick in Test cricket vs Australia (2017)"
    ]
  },
  {
    id: 17,
    name: "Mayank Yadav",
    nameHi: "मयंक यादव",
    category: "Athletes",
    born: "19 June 2002",
    died: "",
    birthPlace: "Meerut, Uttar Pradesh",
    knownFor: "Fastest bowler in IPL history",
    photo: "",
    bio: "Mayank Yadav is an Indian cricketer known for his extreme pace bowling, clocking 156.7 km/h in IPL 2024, the fastest ever in the tournament.",
    achievements: [
      "Fastest delivery in IPL history (156.7 km/h)",
      "IPL 2024 Purple Cap contender",
      "Lucknow Super Giants pace spearhead"
    ]
  },
  {
    id: 18,
    name: "Rajpal Yadav",
    nameHi: "राजपाल यादव",
    category: "Entertainers",
    born: "16 March 1971",
    died: "",
    birthPlace: "Shahjahanpur, Uttar Pradesh",
    knownFor: "Comedian and film actor",
    photo: "",
    bio: "Rajpal Yadav is an Indian film actor known for his comic roles in Hindi cinema. He has appeared in over 200 films.",
    achievements: [
      "Starred in 200+ Bollywood films",
      "Known for roles in Bhool Bhulaiyaa, Hungama",
      "Filmfare Best Comedian nominations"
    ]
  }
];
