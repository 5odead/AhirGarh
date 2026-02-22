export interface Matrimonial {
  id: number;
  name: string;
  gender: string;
  age: number;
  gotra: string;
  state: string;
  education: string;
  profession: string;
  city: string;
  avatar: string;
}

export const matrimonials: Matrimonial[] = [
  { id: 1, name: "Rahul Y.", gender: "groom", age: 28, gotra: "Kashyap", state: "Uttar Pradesh", education: "B.Tech (Computer Science)", profession: "Software Engineer", city: "Noida", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=rahul" },
  { id: 2, name: "Priya Y.", gender: "bride", age: 25, gotra: "Nandavanshi", state: "Bihar", education: "MBBS", profession: "Doctor", city: "Patna", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=priya" },
  { id: 3, name: "Vikram A.", gender: "groom", age: 30, gotra: "Garg", state: "Haryana", education: "B.Com + MBA", profession: "Bank Manager", city: "Rohtak", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=vikram" },
  { id: 4, name: "Sunita Y.", gender: "bride", age: 24, gotra: "Bharadwaj", state: "Rajasthan", education: "BA + B.Ed", profession: "School Teacher", city: "Jaipur", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=sunita" },
  { id: 5, name: "Ajay Y.", gender: "groom", age: 27, gotra: "Atri", state: "Madhya Pradesh", education: "B.E. (Civil)", profession: "Government Engineer", city: "Bhopal", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=ajay" },
  { id: 6, name: "Kavita A.", gender: "bride", age: 26, gotra: "Vashishtha", state: "Haryana", education: "M.Sc (Chemistry)", profession: "Research Scientist", city: "Gurugram", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=kavita" },
  { id: 7, name: "Rohit Y.", gender: "groom", age: 32, gotra: "Jadaun", state: "Rajasthan", education: "LLB", profession: "Advocate", city: "Karauli", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=rohit" },
  { id: 8, name: "Meena Y.", gender: "bride", age: 23, gotra: "Gautam", state: "Bihar", education: "BCA", profession: "IT Professional", city: "Muzaffarpur", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=meena" },
  { id: 9, name: "Deepak A.", gender: "groom", age: 29, gotra: "Kaushik", state: "Uttar Pradesh", education: "B.Pharma", profession: "Pharmacist", city: "Agra", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=deepak" },
  { id: 10, name: "Anita Y.", gender: "bride", age: 27, gotra: "Sandilya", state: "Maharashtra", education: "MBA (Finance)", profession: "Finance Analyst", city: "Nashik", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=anita" },
  { id: 11, name: "Suresh Y.", gender: "groom", age: 31, gotra: "Mor", state: "Haryana", education: "12th + Army Service", profession: "Ex-Army (JCO)", city: "Bhiwani", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=suresh" },
  { id: 12, name: "Pooja Y.", gender: "bride", age: 25, gotra: "Rawat", state: "Jharkhand", education: "B.Sc (Nursing)", profession: "Nurse", city: "Ranchi", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=pooja" }
];
