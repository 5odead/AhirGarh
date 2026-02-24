export interface Village {
  id: number;
  name: string;
  state: string;
  district: string;
  notablePeople: string[];
  history: string;
}

export const villages: Village[] = [
  { id: 1, name: "Kaluwas", state: "Haryana", district: "Bhiwani", notablePeople: ["Vijender Singh (Olympic Boxer)"], history: "Famous as the hometown of Olympic boxer Vijender Singh. A predominantly Ahir village with strong military service tradition." },
  { id: 2, name: "Batham", state: "Uttar Pradesh", district: "Etawah", notablePeople: ["Mulayam Singh Yadav"], history: "Home village of Mulayam Singh Yadav. A historic village in the Etawah district that has produced one of India's most powerful political leaders." },
  { id: 3, name: "Gopalganj", state: "Bihar", district: "Gopalganj", notablePeople: ["Lalu Prasad Yadav"], history: "Home district of Lalu Prasad Yadav. Strong Yadav political presence spanning decades." },
  { id: 4, name: "Rewari", state: "Haryana", district: "Rewari", notablePeople: ["Hemu (Emperor Vikramaditya)"], history: "Capital of the Ahirwal region. Birthplace of Hemu, the last Hindu emperor to sit on the Delhi throne. Strong martial tradition." },
  { id: 5, name: "Vrindavan", state: "Uttar Pradesh", district: "Mathura", notablePeople: ["Lord Krishna (historical)"], history: "The holiest site for the Ahir/Yadav community. Where Lord Krishna spent his childhood among the Gopa Ahirs. Thousands of Ahir families trace their origin here." },
  { id: 6, name: "Mahendragarh", state: "Haryana", district: "Mahendragarh", notablePeople: [], history: "Central district of the Ahirwal belt. Known for highest military recruitment rates in India, with Ahir families serving in the Indian Army for generations." },
  { id: 7, name: "Balali", state: "Haryana", district: "Charkhi Dadri", notablePeople: ["Geeta Phogat", "Babita Phogat"], history: "Famous as the village that produced India's greatest female wrestlers, the Phogat sisters. A small Ahir village that became nationally famous after the film Dangal." },
  { id: 8, name: "Saifai", state: "Uttar Pradesh", district: "Etawah", notablePeople: ["Mulayam Singh Yadav family"], history: "Home village of the Yadav political dynasty. Has been developed significantly and hosts an annual international sports event." },
  { id: 9, name: "Ratu", state: "Jharkhand", district: "Ranchi", notablePeople: ["Deepika Kumari (Archer)"], history: "Home of world champion archer Deepika Kumari. A tribal-belt Yadav community with strong sporting tradition." },
  { id: 10, name: "Champaran", state: "Bihar", district: "West Champaran", notablePeople: ["Manoj Bajpayee"], history: "Birthplace of actor Manoj Bajpayee. West Champaran district has significant Yadav population with deep roots in agricultural and pastoral traditions." },
  { id: 11, name: "Karauli", state: "Rajasthan", district: "Karauli", notablePeople: [], history: "Ancient seat of the rulers. One of the oldest surviving kingdoms with a palace that still stands today." },
  { id: 12, name: "Ahirwal Belt", state: "Haryana", district: "Rewari/Mahendragarh", notablePeople: [], history: "The heartland of the Ahir community spanning three districts of Haryana. Named after the Ahirs themselves, this region has the highest concentration of Ahir population in India." },
  { id: 13, name: "Mathura", state: "Uttar Pradesh", district: "Mathura", notablePeople: ["Lord Krishna"], history: "Birthplace of Lord Krishna. The most sacred city for the Ahir/Yadav community. Home to numerous Ahir communities who trace their lineage to the original Yadavas." },
  { id: 14, name: "Deoghar", state: "Jharkhand", district: "Deoghar", notablePeople: [], history: "Significant Yadav community in Jharkhand's pilgrimage city. Pastoral and dairy traditions remain strong." },
  { id: 15, name: "Gorakhpur", state: "Uttar Pradesh", district: "Gorakhpur", notablePeople: ["Ravi Kishan"], history: "Major city with significant Yadav political and cultural presence. Home of actor-politician Ravi Kishan." },
  { id: 16, name: "Nashik", state: "Maharashtra", district: "Nashik", notablePeople: [], history: "Significant Ahir/Yadav population in Maharashtra's wine capital. Pastoral dairy traditions date back centuries." },
  { id: 17, name: "Rohtak", state: "Haryana", district: "Rohtak", notablePeople: [], history: "Major Ahir-dominated city in Haryana. Known for wrestling culture and army recruitment." },
  { id: 18, name: "Ara", state: "Bihar", district: "Bhojpur", notablePeople: [], history: "Historic city with deep Yadav roots. The Bhojpur district has been a center of Yadav political organizing." },
  { id: 19, name: "Jaipur", state: "Rajasthan", district: "Jaipur", notablePeople: [], history: "Rajasthan's capital has significant Yadav communities." },
  { id: 20, name: "Bhopal", state: "Madhya Pradesh", district: "Bhopal", notablePeople: [], history: "MP's capital has a large Yadav community involved in government service, dairy, and politics." },
  { id: 21, name: "Devagiri (Daulatabad)", state: "Maharashtra", district: "Aurangabad", notablePeople: [], history: "Ancient capital of the Yadava dynasty of the Deccan. The hilltop fort of Devagiri was the center of the greatest Yadav kingdom in medieval India." },
  { id: 22, name: "Patna", state: "Bihar", district: "Patna", notablePeople: [], history: "Bihar's capital has a massive Yadav community. The Goala sub-community of dairy Yadavs has been present in Patna for centuries." },
  { id: 23, name: "Agra", state: "Uttar Pradesh", district: "Agra", notablePeople: [], history: "Significant Ahir/Yadav presence in Agra. Located near the sacred Braj region." },
  { id: 24, name: "Sikar", state: "Rajasthan", district: "Sikar", notablePeople: [], history: "Shekhawati region's Yadav community. Known for merchant and pastoral traditions." },
  { id: 25, name: "Bhiwani", state: "Haryana", district: "Bhiwani", notablePeople: ["Vijender Singh"], history: "Known as the 'City of Boxers', Bhiwani's Ahir community has produced more Indian boxing champions than any other district in India." }
];
