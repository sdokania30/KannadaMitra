import { Flashcard } from './types';

export const INITIAL_CARDS: Flashcard[] = [
  // Basic Phrases
  { id: 1, category: "Basic Phrases", hindi: "नमस्ते", kannada: "ನಮಸ್ಕಾರ", transliteration: "Namaskāra", tip: "Standard formal greeting", difficulty: "easy", mastered: false },
  { id: 2, category: "Basic Phrases", hindi: "आप कैसे हैं?", kannada: "ನೀವು ಹೇಗಿದ್ದೀರಾ?", transliteration: "Nīvu hēgiddīrā?", tip: "Respectful form (Nīvu)", difficulty: "easy", mastered: false },
  { id: 3, category: "Basic Phrases", hindi: "मैं ठीक हूँ", kannada: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", transliteration: "Nānu cennāgiddēne", tip: "Response to 'How are you'", difficulty: "easy", mastered: false },
  { id: 4, category: "Basic Phrases", hindi: "धन्यवाद", kannada: "ಧನ್ಯವಾದಗಳು", transliteration: "Dhanyavādagaḷu", tip: "Very common polite response", difficulty: "easy", mastered: false },
  { id: 5, category: "Basic Phrases", hindi: "हाँ", kannada: "ಹೌದು", transliteration: "Haudu", difficulty: "easy", mastered: false },
  { id: 6, category: "Basic Phrases", hindi: "नहीं", kannada: "ಇಲ್ಲ", transliteration: "Illa", difficulty: "easy", mastered: false },
  { id: 35, category: "Basic Phrases", hindi: "कृपया", kannada: "ದಯವಿಟ್ಟು", transliteration: "Dayaviṭṭu", difficulty: "medium", mastered: false },
  { id: 36, category: "Basic Phrases", hindi: "क्षमा करें", kannada: "ಕ್ಷಮಿಸಿ", transliteration: "Kṣhamisi", difficulty: "medium", mastered: false },

  // Questions
  { id: 7, category: "Questions", hindi: "आपका नाम क्या है?", kannada: "ನಿಮ್ಮ ಹೆಸರೇನು?", transliteration: "Nimma hesarēnu?", tip: "Nimma = Your, Hesaru = Name", difficulty: "medium", mastered: false },
  { id: 8, category: "Questions", hindi: "यह क्या है?", kannada: "ಇದು ಏನು?", transliteration: "Idu ēnu?", difficulty: "medium", mastered: false },
  { id: 9, category: "Questions", hindi: "कहाँ?", kannada: "ಎಲ್ಲಿ?", transliteration: "Elli?", difficulty: "easy", mastered: false },
  { id: 10, category: "Questions", hindi: "कब?", kannada: "ಯಾವಾಗ?", transliteration: "Yāvāga?", difficulty: "medium", mastered: false },
  { id: 11, category: "Questions", hindi: "क्यों?", kannada: "ಏಕೆ?", transliteration: "Ēke?", difficulty: "easy", mastered: false },
  { id: 12, category: "Questions", hindi: "कौन?", kannada: "ಯಾರು?", transliteration: "Yāru?", difficulty: "easy", mastered: false },
  { id: 37, category: "Questions", hindi: "कितना?", kannada: "ಎಷ್ಟು?", transliteration: "Eṣṭu?", tip: "Used for quantity/price", difficulty: "easy", mastered: false },
  { id: 38, category: "Questions", hindi: "कौन सा?", kannada: "ಯಾವುದು?", transliteration: "Yāvudu?", difficulty: "medium", mastered: false },

  // Common Nouns
  { id: 13, category: "Common Nouns", hindi: "पानी", kannada: "ನೀರು", transliteration: "Nīru", tip: "Essential for restaurants", difficulty: "easy", mastered: false },
  { id: 14, category: "Common Nouns", hindi: "खाना", kannada: "ಊಟ", transliteration: "Ūṭa", tip: "Means 'meal' specifically", difficulty: "easy", mastered: false },
  { id: 15, category: "Common Nouns", hindi: "घर", kannada: "ಮನೆ", transliteration: "Mane", difficulty: "easy", mastered: false },
  { id: 16, category: "Common Nouns", hindi: "दूध", kannada: "ಹಾಲು", transliteration: "Hālu", difficulty: "easy", mastered: false },
  { id: 17, category: "Common Nouns", hindi: "फल", kannada: "ಹಣ್ಣು", transliteration: "Haṇṇu", difficulty: "medium", mastered: false },
  { id: 39, category: "Common Nouns", hindi: "कॉफ़ी", kannada: "ಕಾಫಿ", transliteration: "Kāphi", difficulty: "easy", mastered: false },
  { id: 40, category: "Common Nouns", hindi: "चावल (पका हुआ)", kannada: "ಅನ್ನ", transliteration: "Anna", difficulty: "easy", mastered: false },
  { id: 41, category: "Common Nouns", hindi: "दही", kannada: "ಮೊಸರು", transliteration: "Mosaru", difficulty: "medium", mastered: false },
  { id: 42, category: "Common Nouns", hindi: "पैसा", kannada: "ದುಡ್ಡು", transliteration: "Duḍḍu", difficulty: "easy", mastered: false },
  { id: 43, category: "Common Nouns", hindi: "दुकान", kannada: "ಅಂಗಡಿ", transliteration: "Aṅgaḍi", difficulty: "medium", mastered: false },

  // Verbs
  { id: 18, category: "Verbs", hindi: "जाना", kannada: "ಹೋಗು", transliteration: "Hōgu", tip: "Root verb", difficulty: "medium", mastered: false },
  { id: 19, category: "Verbs", hindi: "आना", kannada: "ಬಾ", transliteration: "Bā", tip: "Informal 'come'", difficulty: "medium", mastered: false },
  { id: 20, category: "Verbs", hindi: "खाना (क्रिया)", kannada: "ತಿನ್ನು", transliteration: "Tinnu", difficulty: "medium", mastered: false },
  { id: 21, category: "Verbs", hindi: "पीना", kannada: "ಕುಡಿ", transliteration: "Kuḍi", difficulty: "medium", mastered: false },
  { id: 22, category: "Verbs", hindi: "देखना", kannada: "ನೋಡು", transliteration: "Nōḍu", difficulty: "medium", mastered: false },
  { id: 44, category: "Verbs", hindi: "बोलना", kannada: "ಮಾತಾಡು", transliteration: "Mātāḍu", difficulty: "medium", mastered: false },
  { id: 45, category: "Verbs", hindi: "देना", kannada: "ಕೊಡು", transliteration: "Koḍu", difficulty: "medium", mastered: false },
  { id: 46, category: "Verbs", hindi: "लेना", kannada: "ತಗೋ", transliteration: "Tagō", difficulty: "medium", mastered: false },
  { id: 47, category: "Verbs", hindi: "सोना", kannada: "ಮಲಗು", transliteration: "Malugu", difficulty: "hard", mastered: false },
  { id: 48, category: "Verbs", hindi: "रुकना", kannada: "ನಿಲ್ಲಿಸು", transliteration: "Nillisu", tip: "Nillu=Stand/Stop, Nillisu=Make stop", difficulty: "medium", mastered: false },

  // Adjectives
  { id: 49, category: "Adjectives", hindi: "अच्छा", kannada: "ಚೆನ್ನಾಗಿದೆ", transliteration: "Chennāgide", tip: "Lit: It is good", difficulty: "easy", mastered: false },
  { id: 50, category: "Adjectives", hindi: "बड़ा", kannada: "ದೊಡ್ಡ", transliteration: "Doḍḍa", difficulty: "easy", mastered: false },
  { id: 51, category: "Adjectives", hindi: "छोटा", kannada: "ಚಿಕ್ಕ", transliteration: "Chikka", difficulty: "easy", mastered: false },
  { id: 52, category: "Adjectives", hindi: "गर्म", kannada: "ಬಿಸಿ", transliteration: "Bisi", difficulty: "easy", mastered: false },
  { id: 53, category: "Adjectives", hindi: "ठंडा", kannada: "ತಣ್ಣಗೆ", transliteration: "Taṇṇage", difficulty: "medium", mastered: false },

  // Time
  { id: 54, category: "Time", hindi: "आज", kannada: "ಇವತ್ತು", transliteration: "Ivattu", difficulty: "medium", mastered: false },
  { id: 55, category: "Time", hindi: "कल (आने वाला)", kannada: "ನಾಳೆ", transliteration: "Nāḷe", difficulty: "easy", mastered: false },
  { id: 56, category: "Time", hindi: "कल (बीता हुआ)", kannada: "ನಿನ್ನೆ", transliteration: "Ninne", difficulty: "medium", mastered: false },
  { id: 57, category: "Time", hindi: "सुबह", kannada: "ಬೆಳಿಗ್ಗೆ", transliteration: "Beḷigge", difficulty: "medium", mastered: false },
  { id: 58, category: "Time", hindi: "रात", kannada: "ರಾತ್ರಿ", transliteration: "Rātri", difficulty: "easy", mastered: false },
  { id: 59, category: "Time", hindi: "अभी", kannada: "ಈಗ", transliteration: "Īga", difficulty: "easy", mastered: false },

  // Useful Sentences
  { id: 23, category: "Useful Sentences", hindi: "मुझे कन्नड़ नहीं आती", kannada: "ನನಗೆ ಕನ್ನಡ ಗೊತ್ತಿಲ್ಲ", transliteration: "Nanage Kannaḍa gottilla", tip: "Very useful for beginners", difficulty: "hard", mastered: false },
  { id: 24, category: "Useful Sentences", hindi: "मुझे चाहिए", kannada: "ನನಗೆ ಬೇಕು", transliteration: "Nanage bēku", tip: "Use for ordering: 'Coffee bēku'", difficulty: "medium", mastered: false },
  { id: 25, category: "Useful Sentences", hindi: "मुझे नहीं चाहिए", kannada: "ನನಗೆ ಬೇಡ", transliteration: "Nanage bēḍa", difficulty: "medium", mastered: false },
  { id: 26, category: "Useful Sentences", hindi: "कितना हुआ?", kannada: "ಎಷ್ಟಾಯಿತು?", transliteration: "Eṣṭāyitu?", tip: "Asking price", difficulty: "hard", mastered: false },
  { id: 65, category: "Useful Sentences", hindi: "बस स्टैंड कहाँ है?", kannada: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", transliteration: "Bus nilḍāṇa ellide?", difficulty: "hard", mastered: false },
  { id: 66, category: "Useful Sentences", hindi: "मुझे भूख लगी है", kannada: "ನನಗೆ ಹಸಿವಾಗಿದೆ", transliteration: "Nanage hasivāgide", difficulty: "hard", mastered: false },

  // Numbers
  { id: 27, category: "Numbers", hindi: "एक", kannada: "ಒಂದು", transliteration: "Ondu", difficulty: "easy", mastered: false },
  { id: 28, category: "Numbers", hindi: "दो", kannada: "ಎರಡು", transliteration: "Eraḍu", difficulty: "easy", mastered: false },
  { id: 29, category: "Numbers", hindi: "तीन", kannada: "ಮೂರು", transliteration: "Mūru", difficulty: "easy", mastered: false },
  { id: 60, category: "Numbers", hindi: "पाँच", kannada: "ಐದು", transliteration: "Aidu", difficulty: "easy", mastered: false },
  { id: 30, category: "Numbers", hindi: "दस", kannada: "ಹತ್ತು", transliteration: "Hattu", difficulty: "easy", mastered: false },
  { id: 61, category: "Numbers", hindi: "सौ", kannada: "ನೂರು", transliteration: "Nūru", difficulty: "medium", mastered: false },

  // Family
  { id: 31, category: "Family", hindi: "माँ", kannada: "ಅಮ್ಮ", transliteration: "Amma", difficulty: "easy", mastered: false },
  { id: 32, category: "Family", hindi: "पिता", kannada: "ಅಪ್ಪ", transliteration: "Appa", difficulty: "easy", mastered: false },
  { id: 33, category: "Family", hindi: "भाई", kannada: "ಅಣ್ಣ / ತಮ್ಮ", transliteration: "Aṇṇa (elder) / Tamma (younger)", tip: "Distinction based on age", difficulty: "medium", mastered: false },
  { id: 34, category: "Family", hindi: "बहन", kannada: "ಅಕ್ಕ / ತಂಗಿ", transliteration: "Akka (elder) / Taṅgi (younger)", difficulty: "medium", mastered: false },
  { id: 62, category: "Family", hindi: "बेटा", kannada: "ಮಗ", transliteration: "Maga", difficulty: "medium", mastered: false },
  { id: 63, category: "Family", hindi: "बेटी", kannada: "ಮಗಳು", transliteration: "Magaḷu", difficulty: "medium", mastered: false },
  { id: 64, category: "Family", hindi: "दोस्त", kannada: "ಸ್ನೇಹಿತ / ಗೆಳೆಯ", transliteration: "Snēhita / Geḷeya", difficulty: "medium", mastered: false },

  // Food & Ordering
  { id: 101, category: "Food & Ordering", hindi: "कॉफी चाहिए", kannada: "ಕಾಫಿ ಬೇಕು", spoken: "ಕಾಫಿ ಬೇಕು", transliteration: "Coffee bēku", difficulty: "easy", mastered: false },
  { id: 102, category: "Food & Ordering", hindi: "चाय चाहिए", kannada: "ಚಹಾ ಬೇಕು", spoken: "ಚಹಾ ಬೇಕು", transliteration: "Chahā bēku", difficulty: "easy", mastered: false },
  { id: 103, category: "Food & Ordering", hindi: "एक प्लेट इडली", kannada: "ಒಂದು ಪ್ಲೇಟ್ ಇಡ್ಲಿ", spoken: "ಒಂದು ಪ್ಲೇಟ್ ಇಡ್ಲಿ", transliteration: "Ondu plate idli", difficulty: "easy", mastered: false },
  { id: 104, category: "Food & Ordering", hindi: "मसालेदार कम", kannada: "ಖಾರ ಕಡಿಮೆ", spoken: "ಖಾರ ಕಡಿಮೆ", transliteration: "Khāra kaḍime", tip: "Khāra = spicy", difficulty: "medium", mastered: false },
  { id: 105, category: "Food & Ordering", hindi: "पैक कर दीजिए", kannada: "ಪ್ಯಾಕ್ ಮಾಡಿ", spoken: "ಪ್ಯಾಕ್ ಮಾಡಿ", transliteration: "Pack māḍi", difficulty: "easy", mastered: false },
  { id: 106, category: "Food & Ordering", hindi: "यह अच्छा है", kannada: "ಇದು ಚೆನ್ನಾಗಿದೆ", spoken: "ಚೆನ್ನಾಗಿದೆ", transliteration: "Chennāgide", difficulty: "easy", mastered: false },

  // Travel & Auto
  { id: 201, category: "Travel & Auto", hindi: "यहाँ रुकिए", kannada: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", spoken: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", transliteration: "Illi nillisi", difficulty: "easy", mastered: false },
  { id: 202, category: "Travel & Auto", hindi: "सीधे चलो", kannada: "ನೆರವಾಗಿ ಹೋಗಿ", spoken: "ನೆರವಾಗಿ ಹೋಗಿ", transliteration: "Neravāgi hōgi", difficulty: "easy", mastered: false },
  { id: 203, category: "Travel & Auto", hindi: "बाएँ मुड़िए", kannada: "ಎಡಕ್ಕೆ ತಿರುಗಿ", spoken: "ಎಡಕ್ಕೆ ತಿರುಗಿ", transliteration: "Eḍakke tirugi", difficulty: "medium", mastered: false },
  { id: 204, category: "Travel & Auto", hindi: "दाएँ मुड़िए", kannada: "ಬಲಕ್ಕೆ ತಿರುಗಿ", spoken: "ಬಲಕ್ಕೆ ತಿರುಗಿ", transliteration: "Balakke tirugi", difficulty: "medium", mastered: false },
  { id: 205, category: "Travel & Auto", hindi: "कितना किराया?", kannada: "ಎಷ್ಟು ಹಣ?", spoken: "ಎಷ್ಟು ಹಣ?", transliteration: "Eshtu haṇa?", difficulty: "easy", mastered: false },
  { id: 206, category: "Travel & Auto", hindi: "बहुत ज़्यादा है", kannada: "ಜಾಸ್ತಿ ಇದೆ", spoken: "ಜಾಸ್ತಿ ಇದೆ", transliteration: "Jāsti ide", difficulty: "easy", mastered: false },

  // Shopping
  { id: 301, category: "Shopping", hindi: "यह कितना है?", kannada: "ಇದು ಎಷ್ಟು?", spoken: "ಇದು ಎಷ್ಟು?", transliteration: "Idu eshtu?", difficulty: "easy", mastered: false },
  { id: 302, category: "Shopping", hindi: "थोड़ा कम करो", kannada: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ", spoken: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ", transliteration: "Svalpa kaḍime māḍi", difficulty: "medium", mastered: false },
  { id: 303, category: "Shopping", hindi: "ठीक है", kannada: "ಸರಿ", spoken: "ಸರಿ", transliteration: "Sari", difficulty: "easy", mastered: false },
  { id: 304, category: "Shopping", hindi: "नहीं चाहिए", kannada: "ಬೇಡ", spoken: "ಬೇಡ", transliteration: "Bēḍa", difficulty: "easy", mastered: false },

  // Office / Work
  { id: 401, category: "Office / Work", hindi: "मीटिंग है", kannada: "ಮೀಟಿಂಗ್ ಇದೆ", spoken: "ಮೀಟಿಂಗ್ ಇದೆ", transliteration: "Meeting ide", difficulty: "easy", mastered: false },
  { id: 402, category: "Office / Work", hindi: "थोड़ा समय दो", kannada: "ಸ್ವಲ್ಪ ಸಮಯ ಕೊಡಿ", spoken: "ಸ್ವಲ್ಪ ಸಮಯ ಕೊಡಿ", transliteration: "Svalpa samaya koḍi", difficulty: "medium", mastered: false },
  { id: 403, category: "Office / Work", hindi: "मैं देख लूँगा", kannada: "ನಾನು ನೋಡ್ತೇನೆ", spoken: "ನಾನು ನೋಡ್ತೇನೆ", transliteration: "Nānu nōḍtēne", difficulty: "medium", mastered: false },
  { id: 404, category: "Office / Work", hindi: "समझ गया", kannada: "ಅರ್ಥ ಆಯ್ತು", spoken: "ಅರ್ಥ ಆಯ್ತು", transliteration: "Artha āytu", difficulty: "easy", mastered: false },

  // Emergency
  { id: 501, category: "Emergency", hindi: "मदद चाहिए", kannada: "ಸಹಾಯ ಬೇಕು", spoken: "ಸಹಾಯ ಬೇಕು", transliteration: "Sahāya bēku", difficulty: "easy", mastered: false },
  { id: 502, category: "Emergency", hindi: "समस्या है", kannada: "ಸಮಸ್ಯೆ ಇದೆ", spoken: "ಸಮಸ್ಯೆ ಇದೆ", transliteration: "Samasyē ide", difficulty: "easy", mastered: false },
  { id: 503, category: "Emergency", hindi: "डॉक्टर चाहिए", kannada: "ಡಾಕ್ಟರ್ ಬೇಕು", spoken: "ಡಾಕ್ಟರ್ ಬೇಕು", transliteration: "Doctor bēku", difficulty: "easy", mastered: false },

  // Time & Daily Life
  { id: 601, category: "Time & Daily Life", hindi: "आज", kannada: "ಇಂದು", spoken: "ಇಂದು", transliteration: "Indu", difficulty: "easy", mastered: false },
  { id: 602, category: "Time & Daily Life", hindi: "कल", kannada: "ನಿನ್ನೆ / ನಾಳೆ", spoken: "ನಿನ್ನೆ (yesterday) / ನಾಳೆ (tomorrow)", transliteration: "Ninne / Nāḷe", difficulty: "medium", mastered: false },
  { id: 603, category: "Time & Daily Life", hindi: "अब", kannada: "ಈಗ", spoken: "ಈಗ", transliteration: "Īga", difficulty: "easy", mastered: false },
  { id: 604, category: "Time & Daily Life", hindi: "धीरे", kannada: "ನಿಧಾನವಾಗಿ", spoken: "ನಿಧಾನವಾಗಿ", transliteration: "Nidhānavāgi", difficulty: "medium", mastered: false },

  // Patterns
  { id: 701, category: "Patterns", hindi: "मुझे ___ चाहिए", kannada: "[ವಸ್ತು] ಬೇಕು", spoken: "[item] ಬೇಕು", transliteration: "[item] bēku", difficulty: "easy", mastered: false },
  { id: 702, category: "Patterns", hindi: "यह ___ है", kannada: "ಇದು ___ ಇದೆ", spoken: "ಇದು ___ ಇದೆ", transliteration: "Idu ___ ide", difficulty: "medium", mastered: false },
];

export const CATEGORIES = [
  "All",
  "Basic Phrases",
  "Questions",
  "Common Nouns",
  "Verbs",
  "Adjectives",
  "Time",
  "Useful Sentences",
  "Numbers",
  "Family",
  "Food & Ordering",
  "Travel & Auto",
  "Shopping",
  "Office / Work",
  "Emergency",
  "Time & Daily Life",
  "Patterns"
];