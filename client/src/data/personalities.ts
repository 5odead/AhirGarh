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
  }
];