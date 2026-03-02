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
  { id: 4, name: "Rewari", type: "City", state: "Haryana", district: "Rewari", history: "Capital of the Ahirwal region. Strong martial tradition among Ahir community.", notablePeople: [] },
  { id: 5, name: "Vrindavan", type: "Town", state: "Uttar Pradesh", district: "Mathura", history: "Holiest site for Ahir/Yadav community. Thousands of Ahir families trace origin to Krishna's Gopa companions.", notablePeople: [] },
  { id: 6, name: "Mahendragarh", type: "District", state: "Haryana", district: "Mahendragarh", history: "Central district of Ahirwal belt. Known for highest military recruitment rates among Ahir families.", notablePeople: [] },
  { id: 7, name: "Balali", type: "Village", state: "Haryana", district: "Charkhi Dadri", history: "Small Ahirwal village known for wrestling culture and sports achievements.", notablePeople: [] },
  { id: 8, name: "Ratu", type: "Town", state: "Jharkhand", district: "Ranchi", history: "Tribal-belt Yadav community with strong sporting tradition.", notablePeople: [] },
  { id: 9, name: "Champaran", type: "District", state: "Bihar", district: "West Champaran", history: "Significant Yadav population with agricultural and pastoral traditions.", notablePeople: [] },
  { id: 10, name: "Karauli", type: "Town", state: "Rajasthan", district: "Karauli", history: "Ancient Yadav kingdom seat with historic palace.", notablePeople: [] },
  { id: 11, name: "Ahirwal Belt", type: "District", state: "Haryana", district: "Rewari/Mahendragarh", history: "Heartland of Ahir community spanning three Haryana districts with highest Ahir concentration.", notablePeople: [] },
  { id: 12, name: "Mathura", type: "City", state: "Uttar Pradesh", district: "Mathura", history: "Birthplace of Lord Krishna. Most sacred city for Ahir/Yadav community.", notablePeople: [] },
  { id: 13, name: "Deoghar", type: "City", state: "Jharkhand", district: "Deoghar", history: "Significant Yadav community in pilgrimage city with strong dairy traditions.", notablePeople: [] },
  { id: 14, name: "Gorakhpur", type: "City", state: "Uttar Pradesh", district: "Gorakhpur", history: "Major city with significant Yadav political presence.", notablePeople: [] },
  { id: 15, name: "Nashik", type: "City", state: "Maharashtra", district: "Nashik", history: "Significant Ahir/Yadav population with pastoral dairy traditions.", notablePeople: [] },
  { id: 16, name: "Ara", type: "City", state: "Bihar", district: "Bhojpur", history: "Historic city with deep Yadav agricultural roots and political organizing.", notablePeople: [] },
  { id: 17, name: "Jaipur", type: "City", state: "Rajasthan", district: "Jaipur", history: "Rajasthan capital with significant Yadav merchant communities.", notablePeople: [] },
  { id: 18, name: "Bhopal", type: "City", state: "Madhya Pradesh", district: "Bhopal", history: "MP capital with large Yadav community in government service and dairy.", notablePeople: [] },
  { id: 19, name: "Devagiri", type: "City", state: "Maharashtra", district: "Aurangabad", history: "Ancient capital of Yadava dynasty. Center of greatest medieval Yadav kingdom.", notablePeople: [] },
  { id: 20, name: "Patna", type: "City", state: "Bihar", district: "Patna", history: "Bihar capital with massive Yadav Goala dairy community.", notablePeople: [] },
  { id: 21, name: "Agra", type: "City", state: "Uttar Pradesh", district: "Agra", history: "Significant Ahir/Yadav presence near sacred Braj region.", notablePeople: [] },
  { id: 22, name: "Sikar", type: "City", state: "Rajasthan", district: "Sikar", history: "Shekhawati region's Yadav merchant and pastoral community.", notablePeople: [] },
  { id: 23, name: "Bhiwani", type: "District", state: "Haryana", district: "Bhiwani", history: "Ahirwal district known for sports culture and military tradition.", notablePeople: [] },
  { id: 24, name: "Saharanpur", type: "City", state: "Uttar Pradesh", district: "Saharanpur", history: "Major Yadav stronghold with agricultural roots and community organization.", notablePeople: [] },
  { id: 25, name: "Mainpuri", type: "District", state: "Uttar Pradesh", district: "Mainpuri", history: "Yadav-dominated district with pastoral traditions and political influence.", notablePeople: [] },
  { id: 26, name: "Azamgarh", type: "District", state: "Uttar Pradesh", district: "Azamgarh", history: "Significant Yadav agricultural and dairy farming heritage.", notablePeople: [] },
  { id: 27, name: "Madhepura", type: "District", state: "Bihar", district: "Madhepura", history: "Yadav-majority area with rural leadership and farming communities.", notablePeople: [] },
  { id: 28, name: "Samastipur", type: "District", state: "Bihar", district: "Samastipur", history: "Central Bihar district with Yadav presence in agriculture and dairy cooperatives.", notablePeople: [] },
  { id: 29, name: "Vaishali", type: "District", state: "Bihar", district: "Vaishali", history: "Historic district with large Yadav farming communities.", notablePeople: [] },
  { id: 30, name: "Aligarh", type: "City", state: "Uttar Pradesh", district: "Aligarh", history: "Western UP city with prominent Yadav dairy communities.", notablePeople: [] },
  { id: 31, name: "Etah", type: "District", state: "Uttar Pradesh", district: "Etah", history: "Yadav heartland known for cooperative dairy farming.", notablePeople: [] },
  { id: 32, name: "Kaimur", type: "District", state: "Bihar", district: "Kaimur", history: "Yadav-dominated southern Bihar district with agricultural base.", notablePeople: [] },
  { id: 33, name: "Noida", type: "City", state: "Uttar Pradesh", district: "Gautam Buddh Nagar", history: "Major hub for Yadav community in real estate, construction, and NCR politics.", notablePeople: [] },
  { id: 34, name: "Greater Noida", type: "City", state: "Uttar Pradesh", district: "Gautam Buddh Nagar", history: "Planned city with strong Yadav migrant communities from western UP.", notablePeople: [] },
  { id: 35, name: "Ghaziabad", type: "City", state: "Uttar Pradesh", district: "Ghaziabad", history: "Industrial hub with substantial Yadav workforce from western UP.", notablePeople: [] },
];
