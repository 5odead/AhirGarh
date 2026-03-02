export interface Village {
  id: number;
  name: string;
  type: "Village" | "Town" | "City" | "District";
  state: string;
  district: string;
  history: string;
  notablePeople: string[];
}

export const villages: Village[] = [
  { id: 1, name: "Kaluwas", type: "Village", state: "Haryana", district: "Bhiwani", history: "Predominantly Ahir village with strong military service tradition.", notablePeople: [] },
  { id: 2, name: "Saifai", type: "Village", state: "Uttar Pradesh", district: "Etawah", history: "Birthplace of Mulayam Singh Yadav. Home village of the Yadav political dynasty. Hosts annual international sports event.", notablePeople: [] },
  { id: 3, name: "Phulwaria", type: "Village", state: "Bihar", district: "Gopalganj", history: "Ancestral village of Lalu Prasad Yadav. Strong Yadav political presence spanning decades.", notablePeople: [] },
  { id: 4, name: "Rewari", type: "Village", state: "Haryana", district: "Rewari", history: "Capital of the Ahirwal region. Strong martial tradition among Ahir community.", notablePeople: [] },
  { id: 5, name: "Vrindavan", type: "Village", state: "Uttar Pradesh", district: "Mathura", history: "Holiest site for Ahir/Yadav community. Thousands of Ahir families trace origin to Krishna's Gopa companions.", notablePeople: [] },
  { id: 6, name: "Mahendragarh", type: "Village", state: "Haryana", district: "Mahendragarh", history: "Central district of Ahirwal belt. Known for highest military recruitment rates among Ahir families.", notablePeople: [] },
  { id: 7, name: "Balali", type: "Village", state: "Haryana", district: "Charkhi Dadri", history: "Small Ahirwal village known for wrestling culture and sports achievements.", notablePeople: [] },
  { id: 8, name: "Saifai", type: "Village", state: "Uttar Pradesh", district: "Etawah", history: "Birthplace of Mulayam Singh Yadav. Home village of the Yadav political dynasty. Hosts annual international sports event.", notablePeople: [] },
  { id: 9, name: "Ratu", type: "Village", state: "Jharkhand", district: "Ranchi", history: "Tribal-belt Yadav community with strong sporting tradition.", notablePeople: [] },
  { id: 10, name: "Champaran", type: "Village", state: "Bihar", district: "West Champaran", history: "Significant Yadav population with agricultural and pastoral traditions.", notablePeople: [] },
  { id: 11, name: "Karauli", type: "Village", state: "Rajasthan", district: "Karauli", history: "Ancient Yadav kingdom seat with historic palace.", notablePeople: [] },
  { id: 12, name: "Ahirwal Belt", type: "Village", state: "Haryana", district: "Rewari/Mahendragarh", history: "Heartland of Ahir community spanning three Haryana districts with highest Ahir concentration.", notablePeople: [] },
  { id: 13, name: "Mathura", type: "Village", state: "Uttar Pradesh", district: "Mathura", history: "Birthplace of Lord Krishna. Most sacred city for Ahir/Yadav community.", notablePeople: [] },
  { id: 14, name: "Deoghar", type: "Village", state: "Jharkhand", district: "Deoghar", history: "Significant Yadav community in pilgrimage city with strong dairy traditions.", notablePeople: [] },
  { id: 15, name: "Gorakhpur", type: "Village", state: "Uttar Pradesh", district: "Gorakhpur", history: "Major city with significant Yadav political presence.", notablePeople: [] },
  { id: 16, name: "Nashik", type: "Village", state: "Maharashtra", district: "Nashik", history: "Significant Ahir/Yadav population with pastoral dairy traditions.", notablePeople: [] },
  { id: 17, name: "Rewari City", type: "Village", state: "Haryana", district: "Rewari", history: "Core Ahirwal city with strong military and agricultural traditions.", notablePeople: [] },
  { id: 18, name: "Ara", type: "Village", state: "Bihar", district: "Bhojpur", history: "Historic city with deep Yadav agricultural roots and political organizing.", notablePeople: [] },
  { id: 19, name: "Jaipur", type: "Village", state: "Rajasthan", district: "Jaipur", history: "Rajasthan capital with significant Yadav merchant communities.", notablePeople: [] },
  { id: 20, name: "Bhopal", type: "Village", state: "Madhya Pradesh", district: "Bhopal", history: "MP capital with large Yadav community in government service and dairy.", notablePeople: [] },
  { id: 21, name: "Devagiri (Daulatabad)", type: "Village", state: "Maharashtra", district: "Aurangabad", history: "Ancient capital of Yadava dynasty. Center of greatest medieval Yadav kingdom.", notablePeople: [] },
  { id: 22, name: "Patna", type: "Village", state: "Bihar", district: "Patna", history: "Bihar capital with massive Yadav Goala dairy community.", notablePeople: [] },
  { id: 23, name: "Agra", type: "Village", state: "Uttar Pradesh", district: "Agra", history: "Significant Ahir/Yadav presence near sacred Braj region.", notablePeople: [] },
  { id: 24, name: "Sikar", type: "Village", state: "Rajasthan", district: "Sikar", history: "Shekhawati region's Yadav merchant and pastoral community.", notablePeople: [] },
  { id: 25, name: "Bhiwani", type: "Village", state: "Haryana", district: "Bhiwani", history: "Ahirwal district known for sports culture and military tradition.", notablePeople: [] },
  { id: 26, name: "Saharanpur", type: "Village", state: "Uttar Pradesh", district: "Saharanpur", history: "Major Yadav stronghold with agricultural roots and community organization.", notablePeople: [] },
  { id: 27, name: "Mainpuri", type: "Village", state: "Uttar Pradesh", district: "Mainpuri", history: "Yadav-dominated district with pastoral traditions and political influence.", notablePeople: [] },
  { id: 28, name: "Azamgarh", type: "Village", state: "Uttar Pradesh", district: "Azamgarh", history: "Significant Yadav agricultural and dairy farming heritage.", notablePeople: [] },
  { id: 29, name: "Madhepura", type: "Village", state: "Bihar", district: "Madhepura", history: "Yadav-majority area with rural leadership and farming communities.", notablePeople: [] },
  { id: 30, name: "Samastipur", type: "Village", state: "Bihar", district: "Samastipur", history: "Central Bihar district with Yadav presence in agriculture and dairy cooperatives.", notablePeople: [] },
  { id: 31, name: "Vaishali", type: "Village", state: "Bihar", district: "Vaishali", history: "Historic district with large Yadav farming communities.", notablePeople: [] },
  { id: 32, name: "Aligarh", type: "Village", state: "Uttar Pradesh", district: "Aligarh", history: "Western UP city with prominent Yadav dairy communities.", notablePeople: [] },
  { id: 33, name: "Etah", type: "Village", state: "Uttar Pradesh", district: "Etah", history: "Yadav heartland known for cooperative dairy farming.", notablePeople: [] },
  { id: 34, name: "Kaimur", type: "Village", state: "Bihar", district: "Kaimur", history: "Yadav-dominated southern Bihar district with agricultural base.", notablePeople: [] },
  { id: 35, name: "Noida", type: "Village", state: "Uttar Pradesh", district: "Gautam Buddh Nagar", history: "Birthplace and political stronghold of DP Yadav. Major hub for Yadav community in real estate, construction, and NCR politics.", notablePeople: [] },
  { id: 36, name: "Greater Noida", type: "Village", state: "Uttar Pradesh", district: "Gautam Buddh Nagar", history: "Planned city with strong Yadav migrant communities from western UP.", notablePeople: [] },
  { id: 37, name: "Ghaziabad", type: "Village", state: "Uttar Pradesh", district: "Ghaziabad", history: "Industrial hub with substantial Yadav workforce from western UP.", notablePeople: [] }
];
