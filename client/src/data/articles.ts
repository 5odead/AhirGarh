export interface Article {
  id: number;
  slug: string;
  title: string;
  titleHi: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  featured: boolean;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1, slug: "who-are-ahirs",
    title: "Who Are the Ahirs?",
    titleHi: "अहीर कौन हैं?",
    category: "Introduction",
    excerpt: "The Ahirs, also known as Yadavs, are one of India's oldest and most distinguished communities.",
    content: `The Ahir community, widely known as Yadavs, represents one of the most historically significant communities in the Indian subcontinent. The name "Ahir" is derived from the Sanskrit word "Abhira," found in ancient texts including the Mahabharata, Puranas, and various Vedic scriptures. The Abhiras were a powerful clan of pastoral warriors who herded cattle, fought wars, and ruled kingdoms across vast stretches of northern and western India. Their lineage traces directly to the Yadu dynasty — the clan of Lord Krishna himself, making them descendants of one of the most revered figures in all of Hindu tradition. Historically, the Ahirs were known not merely as farmers or cowherds but as a martial community. British colonial records specifically designated them as a "martial race," acknowledging their warrior tradition and physical prowess. The Ahirwal region of present-day Haryana — encompassing Rewari, Mahendragarh, and parts of Gurgaon — remains the traditional heartland of the Ahir community and is named after them. Today, the Yadav/Ahir community numbers over 100 million people across India, with strong concentrations in Uttar Pradesh, Bihar, Haryana, Rajasthan, Madhya Pradesh, and Maharashtra. They have produced national leaders, army generals, Bollywood stars, and Olympic athletes — a community that continues to shape India's political and cultural landscape.`,
    readTime: "5 min", date: "2024-01-15", featured: true,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800"
  },
  {
    id: 2, slug: "lord-krishna-legacy",
    title: "Lord Krishna & the Legacy",
    titleHi: "भगवान कृष्ण और विरासत",
    category: "History",
    excerpt: "Lord Krishna, the eighth avatar of Vishnu, was born into the Yadu clan — making him the most celebrated Ahir in all of history.",
    content: `Lord Krishna, revered as the eighth avatar of Lord Vishnu, was born in Mathura to Devaki and Vasudeva — both members of the illustrious Yadu clan. This divine lineage connects the entire Ahir/Yadav community to one of the most celebrated figures in human history. Krishna spent his childhood in Vrindavan among the Gopas and Gopis — the pastoral Ahir community — herding cattle, playing the flute, and performing the Ras Lila. His childhood name "Gopal" (protector of cows) and "Govinda" (one who brings joy to the earth and cows) directly reference the pastoral Ahir way of life. The city of Mathura-Vrindavan, the holiest site for Yadav/Ahir heritage, is known as the birthplace of Krishna and remains a major pilgrimage site. The Bhagavad Gita, delivered by Krishna on the battlefield of Kurukshetra, is one of humanity's most profound philosophical texts. Scholars, historians, and community leaders widely acknowledge that the Ahir/Yadav community's identity is inseparable from the legacy of Lord Krishna. The Janmashtami festival, celebrating Krishna's birth, is one of the most important festivals for Ahir families across India.`,
    readTime: "6 min", date: "2024-01-20", featured: true,
    image: "https://images.unsplash.com/photo-1609154807254-d5d4f5ce3f82?w=800"
  },
  {
    id: 3, slug: "ahir-kingdoms",
    title: "Ahir Kingdoms & Rulers of Ancient India",
    titleHi: "अहीर राज्य और प्राचीन भारत के शासक",
    category: "History",
    excerpt: "Long before the Mughal Empire, Ahir kings ruled vast territories across India. This is their story.",
    content: `The historical record of Ahir kingdoms stretches across centuries and geographies, revealing a community that was far more than pastoral herders. The Ahirwal region of modern Haryana — meaning "homeland of the Ahirs" — was ruled by Ahir chieftains for centuries. The city of Rewari served as a key administrative and military center for Ahir rulers. One of the most remarkable Ahir military figures was Hemu, also known as Hem Chandra Vikramaditya, who rose from humble origins to become the Prime Minister and military general of Adil Shah Suri, eventually crowning himself Emperor of India in 1556 after capturing Delhi and Agra. He won 22 consecutive battles before his eventual defeat at the Second Battle of Panipat. In Maharashtra, the Ahir community produced significant rulers in the Deccan region. In Rajasthan and Gujarat, Ahir chieftains controlled important trade and military routes. Ancient texts including the Puranas and various regional histories reference Abhira kings ruling in Sindh, Punjab, and the western coast of India. The Yadava dynasty of the Deccan (Devagiri, modern Daulatabad) was a prominent medieval Indian kingdom that ruled Maharashtra from the 9th to 14th centuries and is often associated with the broader Yadu lineage.`,
    readTime: "7 min", date: "2024-02-01", featured: false,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
  },
  {
    id: 4, slug: "yadav-political-rise",
    title: "The Political Rise of Yadavs in Modern India",
    titleHi: "आधुनिक भारत में यादवों का राजनीतिक उदय",
    category: "Modern Era",
    excerpt: "From village councils to the highest offices in the land — the Yadav community's political journey is one of India's greatest democratic stories.",
    content: `The post-Independence political rise of the Yadav community is one of the most dramatic stories in Indian democratic history. For centuries marginalized by the caste hierarchy, the Yadav community leveraged the power of the ballot box to transform itself into one of India's most politically powerful groups. The Yadav Mahasabha, founded in 1924, was one of the earliest organized political movements of the community. The organization worked to unite various sub-communities — Ahirs, Goalas, Gwalas, Rawats — under the single identity of "Yadav." The socialist movement in north India, championed by Ram Manohar Lohia, gave Yadavs a powerful ideological framework demanding social justice and equality. Mulayam Singh Yadav, the founder of the Samajwadi Party, became Chief Minister of Uttar Pradesh and a Union Defence Minister — one of the most powerful political figures in north Indian politics for three decades. His son Akhilesh Yadav became Chief Minister of UP and continues to lead one of India's major political parties. In Bihar, Lalu Prasad Yadav served as Chief Minister and Railway Minister, building a massive political movement. The Mandal Commission recommendations of 1990 proved to be a watershed moment, bringing OBC reservations into national policy and further consolidating Yadav political power.`,
    readTime: "8 min", date: "2024-02-10", featured: false,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800"
  },
  {
    id: 5, slug: "ahir-culture-traditions",
    title: "Culture, Traditions & Way of Life of the Ahir Community",
    titleHi: "अहीर समाज की संस्कृति और परंपराएं",
    category: "Culture",
    excerpt: "From Rasiya folk music to Janmashtami celebrations — the rich cultural tapestry of the Ahir community across India.",
    content: `The cultural life of the Ahir community is rich, diverse, and deeply intertwined with their pastoral heritage and devotion to Lord Krishna. Music forms the heart of Ahir culture. Rasiya, a traditional folk music genre of the Braj region (Mathura-Vrindavan area), is performed predominantly by Ahir communities and celebrates the love of Radha and Krishna. Ahiri folk songs are sung during festivals, marriages, and community gatherings across Haryana and UP. The Nautanki theatrical tradition, popular across north India, has deep roots in Ahir communities. Festivals hold enormous importance. Janmashtami (Krishna's birthday) is the most sacred festival for Ahir families, celebrated with fasting, all-night prayers, and dramatic performances of Krishna Leela. Holi, associated with Krishna's playfulness in Vrindavan, is celebrated with particular fervor. The Govardhan Puja following Diwali commemorates the legend of Krishna lifting Govardhan Hill. Traditional Ahir dress, particularly in Haryana and Rajasthan, features vibrant colors — women wear colorful ghaghra-choli with heavy silver jewelry, while men traditionally wore dhoti-kurta with distinctive turbans. The cattle-herding heritage remains part of Ahir identity — dairy farming, buffalo herding, and cattle care are traditional occupations that many families maintain alongside modern professions.`,
    readTime: "6 min", date: "2024-02-15", featured: true,
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800"
  },
  {
    id: 6, slug: "yadav-mahasabha",
    title: "Yadav Mahasabha — The Unifying Force",
    titleHi: "यादव महासभा — एकता की शक्ति",
    category: "Organizations",
    excerpt: "Founded in 1924, the Yadav Mahasabha has been the central organization uniting the diverse sub-communities under one Yadav identity.",
    content: `The All India Yadav Mahasabha, founded in 1924 during the colonial era, stands as one of the oldest and most significant community organizations in India. Its founding was a direct response to the need to unite the scattered Ahir, Goala, Gwala, Rawat, and other sub-communities under a single, powerful Yadav identity. The founding of the Mahasabha was driven by a dual need: first, to counter the social discrimination faced by the community within the caste hierarchy; and second, to leverage political unity for better representation in colonial governance structures. The organization played a significant role in the Mandal Commission debates, advocating strongly for OBC reservations. Today, the All India Yadav Mahasabha has state chapters across every Indian state with significant Yadav populations. It organizes annual conventions, educational scholarships, community welfare programs, and matrimonial services. State-level bodies include the UP Yadav Mahasabha, Bihar Yadav Mahasabha, Haryana Ahir Mahasabha, and the Maharashtra Ahir Samaj. Beyond India, diaspora organizations in the United States, United Kingdom, Canada, and the Gulf countries serve the global Yadav community.`,
    readTime: "5 min", date: "2024-02-20", featured: false,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800"
  }
];
