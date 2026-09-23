export interface ServiceCard {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  tags: string[];
  stages: ('Prenatal' | 'Postnatal' | 'General')[];
  benefits: string;
  fullDetail: {
    duration: string;
    suitableFor: string;
    price: string;
    highlights: string[];
    description: string;
    safetyNote: string;
  };
}

export interface Review {
  id: string;
  author: string;
  location: string;
  quote: string;
  rating: number;
  badge: string;
}

export const STUDIO_INFO = {
  name: 'Charlotte InAlignment',
  tagline: 'Private Reformer Pilates in Eccles',
  headline: 'Safe Reformer Pilates for Bump and Baby',
  subcopy: 'Private studio in Eccles where alignment comes first and babies are always welcome.',
  address: '43 Clifton Rd, Eccles, Manchester M30 9QS, UK',
  phone: '+44 7807 908364',
  phoneFormatted: '+44 7807 908364',
  whatsappNumber: '447807908364',
  googleMapsUrl: 'https://maps.google.com/?cid=11700826616165042113&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  instagramUrl: 'https://instagram.com/charlotteinalignment',
  instagramHandle: '@charlotteinalignment',
  highlights: ['Babies Welcome', 'Prenatal Safe', 'Private Studio'],
  proofs: ['Babies Welcome', 'Alignment Expert', 'Private Studio'],
};

export const SERVICES: ServiceCard[] = [
  {
    id: 'private-reformer',
    name: 'Private Reformer',
    subtitle: 'One-on-one, Alignment focused',
    image: '/src/assets/images/private_reformer_session_1790164803709.jpg',
    tags: ['One-on-one', 'Alignment focused'],
    stages: ['General', 'Prenatal', 'Postnatal'],
    benefits: 'Tailored 1:1 reformer session crafted around your posture, spine alignment, and movement goals in a calm private studio setting.',
    fullDetail: {
      duration: '55 minutes',
      suitableFor: 'All experience levels, customized posture & core work',
      price: '£[TO CONFIRM]',
      highlights: [
        'Dedicated 1-on-1 instruction with Charlotte',
        'Custom spring resistance tailored to your body',
        'Spinal alignment & posture correction',
        'Quiet private studio — zero gym floor distractions'
      ],
      description: 'Your session begins with a personalized posture & movement check. Every exercise on the reformer is adjusted to your exact alignment needs, helping you build deep core strength, ease tightness, and move with freedom.',
      safetyNote: 'Suitable for absolute beginners to experienced practitioners. Tailored modifications for any past injuries or physical needs.'
    }
  },
  {
    id: 'postnatal-course',
    name: 'Postnatal Course',
    subtitle: 'Core repair, Baby friendly',
    image: '/src/assets/images/postnatal_pilates_baby_1790164821368.jpg',
    tags: ['Core repair', 'Baby friendly'],
    stages: ['Postnatal'],
    benefits: 'Safely rebuild core strength, repair diastasis recti, and relieve upper back tension after birth — babies welcome right beside your reformer.',
    fullDetail: {
      duration: '55 minutes',
      suitableFor: 'New mums from 6-8 weeks post-birth (or 10-12 weeks post-C-section)',
      price: '£[TO CONFIRM]',
      highlights: [
        'Diastasis recti (abdominal separation) assessment',
        'Pelvic floor & deep transverse abdominis rehabilitation',
        'Cozy pram & play mat space directly beside your reformer',
        'Pause to feed, cuddle or soothe your baby anytime without stress'
      ],
      description: 'Designed specifically for the physical demands of early motherhood. We address upper back stiffness from feeding/carrying and gently re-engage your deep core and pelvic floor muscles in a nurturing environment.',
      safetyNote: 'GP or midwife 6-week postnatal check required before starting. Charlotte is certified in postnatal maternal exercise safety.'
    }
  },
  {
    id: 'prenatal-pilates',
    name: 'Prenatal Pilates',
    subtitle: 'Bump safe, Breath work',
    image: '/src/assets/images/prenatal_pilates_bump_1790164834753.jpg',
    tags: ['Bump safe', 'Breath work'],
    stages: ['Prenatal'],
    benefits: 'Trimester-safe movement on the reformer designed to ease pelvic girdle pain, prepare your body for labor, and maintain core stability.',
    fullDetail: {
      duration: '55 minutes',
      suitableFor: 'Expecting mothers from 12 weeks to full term',
      price: '£[TO CONFIRM]',
      highlights: [
        'Trimester-by-trimester safe modifications',
        'Pelvic stability & hip opening exercises',
        'Diaphragmatic breathing for labor prep',
        'Relief for pelvic girdle (SPD) and lower back discomfort'
      ],
      description: 'Stay active, balanced, and comfortable throughout your pregnancy. Using supportive reformer spring assistance and soft wedges, Charlotte guides you through safe movements that protect your joints while supporting your growing bump.',
      safetyNote: 'Cleared by your healthcare provider for light pregnancy exercise. Lying flat on back modified after 16 weeks.'
    }
  },
  {
    id: 'duo-session',
    name: '2:1 Session',
    subtitle: 'Friend pairing, Shared cost',
    image: '/src/assets/images/duo_reformer_session_1790164849061.jpg',
    tags: ['Friend pairing', 'Shared cost'],
    stages: ['General', 'Postnatal'],
    benefits: 'Share a reformer session with a friend or fellow new mum. High individual attention with a supportive, shared energy.',
    fullDetail: {
      duration: '55 minutes',
      suitableFor: 'Friends, partners, or fellow new mums wanting a shared private session',
      price: '£[TO CONFIRM] per pair',
      highlights: [
        'Dedicated guidance for 2 participants',
        'Shared investment — cost split between two',
        'Individual spring settings for each person',
        'Welcoming, encouraging atmosphere'
      ],
      description: 'Enjoy the benefits of reformer Pilates alongside a friend! Charlotte adjusts each reformer reformer carriage individually so both of you receive targeted guidance suited to your respective fitness levels.',
      safetyNote: 'Both participants receive individual alignment checks during the session.'
    }
  }
];

export const STAGE_NOTES = {
  Prenatal: {
    title: 'Prenatal Safety Protocol',
    badge: 'Trimester 1, 2 & 3 Safe',
    note: 'Safe for all trimesters · Modified positioning after 16 weeks · Pelvic floor stability focus · Diaphragmatic breathing for labor prep',
    ctaText: 'Book Prenatal Session'
  },
  Postnatal: {
    title: 'Postnatal Recovery Protocol',
    badge: 'Babies Always Welcome',
    note: 'Recommended from 6-8 weeks post-birth (or 10-12 weeks post-C-section) · Diastasis recti screening · Gentle core & pelvic rehab · Babies rest on mat right next to you',
    ctaText: 'Book Postnatal Session'
  },
  General: {
    title: '1-on-1 Private Reformer Focus',
    badge: 'Alignment Expert',
    note: 'Custom spring tension for all mobility levels · Spine & posture alignment · Injury rehabilitation & core strength · Calm private studio environment',
    ctaText: 'Book Private Session'
  }
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    location: 'Eccles, Manchester',
    quote: 'Charlotte is an absolute angel! Bringing my 8-week-old baby to my postnatal session was so easy. She checked my diastasis recti and guided me so gently. I feel like myself again.',
    rating: 5,
    badge: 'Postnatal Client'
  },
  {
    id: 'rev-2',
    author: 'Hannah K.',
    location: 'Salford, Manchester',
    quote: 'I was anxious about reformer Pilates during my 2nd trimester, but Charlotte made me feel completely safe and supported. My lower back pain completely cleared up after two sessions!',
    rating: 5,
    badge: 'Prenatal Client'
  },
  {
    id: 'rev-3',
    author: 'Gemma L.',
    location: 'Worsley, Manchester',
    quote: 'The private studio in Eccles is so bright, clean, and peaceful. No noisy gym floor or crowded classes, just 1-on-1 focus on alignment. Best Pilates instructor in Manchester.',
    rating: 5,
    badge: 'Private Reformer Client'
  }
];

export const INSTAGRAM_PHOTOS = [
  {
    id: 'insta-1',
    src: '/src/assets/images/hero_pilates_studio_1790164769391.jpg',
    caption: 'Sunlit studio corner ready for private reformer sessions in Eccles ✨ #ReformerPilates #Eccles',
    likes: '48'
  },
  {
    id: 'insta-2',
    src: '/src/assets/images/insta_baby_welcome_1790164881705.jpg',
    caption: 'Babies are always welcome here! Cozy mats right beside your reformer 🍼👶 #PostnatalPilates',
    likes: '62'
  },
  {
    id: 'insta-3',
    src: '/src/assets/images/prenatal_pilates_bump_1790164834753.jpg',
    caption: 'Bump safe alignment & pelvic floor support for our expecting mums 🤱 #PrenatalPilates',
    likes: '54'
  },
  {
    id: 'insta-4',
    src: '/src/assets/images/insta_alignment_form_1790164895988.jpg',
    caption: 'Precision alignment: lengthen the spine, support the core, move with control 🌿 #InAlignment',
    likes: '41'
  },
  {
    id: 'insta-5',
    src: '/src/assets/images/postnatal_pilates_baby_1790164821368.jpg',
    caption: 'Postnatal core rehab in action while baby sleeps soundly nearby 💕 #MaternalWellness',
    likes: '73'
  },
  {
    id: 'insta-6',
    src: '/src/assets/images/insta_studio_corner_1790164866419.jpg',
    caption: 'Your calm sanctuary in Eccles. Private 1:1 sessions tailored to your body 🧘‍♀️ #EcclesPilates',
    likes: '50'
  }
];

export const MOTHERHOOD_TIMELINE = [
  {
    phase: '1. Conception & Early Pregnancy',
    timing: 'Trimester 1 (Weeks 1-12)',
    recommendation: 'Prenatal Reformer Preparation',
    focus: 'Stabilising pelvic alignment, establishing deep core muscle awareness, and building gentle posture habits early on.',
    details: 'Even in early pregnancy, hormonal shifts relax ligaments. We focus on neutral spine stability and shoulder girdle alignment.'
  },
  {
    phase: '2. Mid & Late Pregnancy',
    timing: 'Trimesters 2 & 3 (Weeks 13-40)',
    recommendation: 'Bump-Safe Reformer & Breathwork',
    focus: 'Easing pelvic girdle pain (SPD), side-lying reformer carriage exercises, and diaphragmatic breathing for labor prep.',
    details: 'We use soft posture wedges and supportive spring resistance so you feel light, decompressed, and comfortably supported.'
  },
  {
    phase: '3. Early Postnatal Recovery',
    timing: '6 to 12 Weeks Post-Birth',
    recommendation: 'Postnatal Core & Pelvic Repair (Babies Welcome)',
    focus: 'Diastasis recti abdominal separation check, gentle transverse abdominis rehab, and easing nursing neck tension.',
    details: 'Bring your baby along! Your baby rests right next to your reformer machine while you focus on regaining physical strength.'
  },
  {
    phase: '4. Long-Term Strength & Vitality',
    timing: '3+ Months & Beyond',
    recommendation: 'Private 1:1 Reformer or 2:1 Friend Session',
    focus: 'Rebuilding full-body power, posture correction for carrying toddlers, and long-term joint health and vitality.',
    details: 'Sustained, progressive reformer strength designed to give you energy and spinal freedom for motherhood and daily life.'
  }
];
