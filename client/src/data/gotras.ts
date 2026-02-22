export interface Gotra {
  id: number;
  name: string;
  nameHi: string;
  vansh: string;
  regions: string[];
  description: string;
}

export const gotras: Gotra[] = [
  { id: 1, name: "Kashyap", nameHi: "कश्यप", vansh: "Yaduvanshi", regions: ["UP", "Bihar", "Haryana"], description: "One of the oldest gotras, descended from the sage Kashyapa. Widely distributed across northern India." },
  { id: 2, name: "Atri", nameHi: "अत्री", vansh: "Nandavanshi", regions: ["UP", "Rajasthan"], description: "Descended from Maharishi Atri, one of the Saptarishis. Known for their scholarly tradition." },
  { id: 3, name: "Bharadwaj", nameHi: "भारद्वाज", vansh: "Krishnavanshi", regions: ["UP", "MP", "Maharashtra"], description: "Lineage of Rishi Bharadwaj, the great Vedic scholar and warrior-sage." },
  { id: 4, name: "Gautam", nameHi: "गौतम", vansh: "Yaduvanshi", regions: ["Bihar", "UP"], description: "From the lineage of sage Gautama. Prominent in eastern UP and Bihar." },
  { id: 5, name: "Vashishtha", nameHi: "वशिष्ठ", vansh: "Chandravanshi", regions: ["Haryana", "Rajasthan"], description: "One of the most revered gotras, tracing to Maharishi Vashishtha, royal priest of the Ikshvaku dynasty." },
  { id: 6, name: "Sandilya", nameHi: "सांडिल्य", vansh: "Nandavanshi", regions: ["UP", "Bihar"], description: "Ancient gotra from Rishi Shandilya. Concentrated in the Bhojpuri belt." },
  { id: 7, name: "Garg", nameHi: "गर्ग", vansh: "Yaduvanshi", regions: ["UP", "Haryana", "Rajasthan"], description: "Traced to sage Garga who performed the naming ceremony of Lord Krishna. Deeply connected to Yaduvanshi tradition." },
  { id: 8, name: "Parashara", nameHi: "पाराशर", vansh: "Krishnavanshi", regions: ["UP", "Bihar"], description: "Descended from Maharishi Parashara, grandfather of the Pandavas through Vyasa." },
  { id: 9, name: "Maudgalya", nameHi: "मौद्गल्य", vansh: "Yaduvanshi", regions: ["Maharashtra", "MP"], description: "From Rishi Mudgala. Prominent in Deccan Ahir communities." },
  { id: 10, name: "Kaushik", nameHi: "कौशिक", vansh: "Nandavanshi", regions: ["UP", "Bihar", "Haryana"], description: "Lineage of Vishwamitra (born Kaushika). Warriors by tradition." },
  { id: 11, name: "Vatsa", nameHi: "वत्स", vansh: "Chandravanshi", regions: ["UP", "Rajasthan"], description: "Ancient gotra found in the Gangetic plains. Associated with the Vatsa kingdom of ancient India." },
  { id: 12, name: "Nandavanshi", nameHi: "नंदवंशी", vansh: "Nandavanshi", regions: ["UP", "Bihar", "Haryana"], description: "Direct lineage from Nanda, the foster father of Lord Krishna. Most sacred gotra for Ahir communities of Braj." },
  { id: 13, name: "Aharwar", nameHi: "अहरवार", vansh: "Yaduvanshi", regions: ["Haryana", "Rajasthan"], description: "Native gotra of the Ahirwal region of Haryana. Warriors and pastoralists." },
  { id: 14, name: "Rohilla", nameHi: "रोहिल्ला", vansh: "Yaduvanshi", regions: ["Haryana"], description: "Martial gotra from the Rewari-Mahendragarh belt of Haryana." },
  { id: 15, name: "Sindhwal", nameHi: "सिंधवाल", vansh: "Chandravanshi", regions: ["Haryana", "Rajasthan"], description: "Historically linked to Sindh region. Prominent in western Haryana." },
  { id: 16, name: "Dahiya", nameHi: "डाहिया", vansh: "Nandavanshi", regions: ["Haryana"], description: "Ancient clan of Haryana. Known for military service traditions." },
  { id: 17, name: "Khanzad", nameHi: "खानजाद", vansh: "Yaduvanshi", regions: ["Bihar", "UP"], description: "Found predominantly in Bihar's Magadh region." },
  { id: 18, name: "Palhwar", nameHi: "पलहवार", vansh: "Krishnavanshi", regions: ["Rajasthan", "MP"], description: "Rajasthan-based gotra with warrior traditions." },
  { id: 19, name: "Bachhal", nameHi: "बछल", vansh: "Nandavanshi", regions: ["UP", "Bihar"], description: "Common gotra in eastern UP. Trace lineage to the Nandavanshi tradition." },
  { id: 20, name: "Bhadauriya", nameHi: "भदौरिया", vansh: "Yaduvanshi", regions: ["UP", "MP"], description: "Historic clan of the Chambal and Gwalior regions." },
  { id: 21, name: "Choudhary", nameHi: "चौधरी", vansh: "Yaduvanshi", regions: ["UP", "Bihar", "Rajasthan"], description: "A widely distributed gotra across the Gangetic belt." },
  { id: 22, name: "Mangal", nameHi: "मंगल", vansh: "Chandravanshi", regions: ["Rajasthan"], description: "Found mainly in Rajasthan's Yadav communities." },
  { id: 23, name: "Pachhad", nameHi: "पच्छाड", vansh: "Nandavanshi", regions: ["Haryana", "HP"], description: "Gotra of hill-region Ahirs of Himachal and Haryana." },
  { id: 24, name: "Mor", nameHi: "मोर", vansh: "Yaduvanshi", regions: ["Haryana", "UP"], description: "Named after the peacock (mor), sacred to Krishna. Concentrated in Haryana." },
  { id: 25, name: "Boken", nameHi: "बोकेन", vansh: "Krishnavanshi", regions: ["UP"], description: "Lesser-known gotra found in central UP districts." },
  { id: 26, name: "Haritwal", nameHi: "हरितवाल", vansh: "Yaduvanshi", regions: ["UP", "Haryana"], description: "Gotra connected to the Harita sage lineage." },
  { id: 27, name: "Rawat", nameHi: "रावत", vansh: "Chandravanshi", regions: ["Rajasthan", "MP", "Maharashtra"], description: "Sub-community name that also serves as a gotra identifier in western India." },
  { id: 28, name: "Goala", nameHi: "गोआला", vansh: "Nandavanshi", regions: ["Bihar", "West Bengal"], description: "Bengal and Bihar Yadav sub-community with ancient pastoral roots." },
  { id: 29, name: "Bhati", nameHi: "भाटी", vansh: "Yaduvanshi", regions: ["Rajasthan", "Haryana"], description: "Royal Rajput-connected Yaduvanshi gotra of the Thar desert region." },
  { id: 30, name: "Jadaun", nameHi: "जादौन", vansh: "Yaduvanshi", regions: ["UP", "Rajasthan"], description: "Direct Yaduvanshi clan of Mathura and Karauli regions. Considered closest to the original Yadu lineage." }
];
