/**
 * India Locations Data
 * Structure:
 * State → District → Place → { lat, lon }
 * This file only stores static location data.
 */

const indiaLocations = Object.freeze({
  "Andhra Pradesh": Object.freeze({
    "Visakhapatnam": Object.freeze({
      "RK Beach": { lat: 17.6868, lon: 83.2185 },
      "Simhachalam": { lat: 17.7696, lon: 83.3235 }
    }),
    "Vijayawada": Object.freeze({
      "Kanaka Durga Temple": { lat: 16.5062, lon: 80.6480 }
    })
  }),

  "Arunachal Pradesh": Object.freeze({
    "Itanagar": Object.freeze({
      "Ganga Lake": { lat: 27.0844, lon: 93.6053 }
    })
  }),

  "Assam": Object.freeze({
    "Guwahati": Object.freeze({
      "Kamakhya Temple": { lat: 26.1660, lon: 91.7086 }
    })
  }),

  "Bihar": Object.freeze({
    "Patna": Object.freeze({
      "Gandhi Maidan": { lat: 25.6110, lon: 85.1440 }
    })
  }),

  "Chhattisgarh": Object.freeze({
    "Raipur": Object.freeze({
      "Marine Drive": { lat: 21.2514, lon: 81.6296 }
    })
  }),

  "Delhi": Object.freeze({
    "New Delhi": Object.freeze({
      "India Gate": { lat: 28.6129, lon: 77.2295 },
      "Connaught Place": { lat: 28.6315, lon: 77.2167 }
    })
  }),

  "Goa": Object.freeze({
    "Panaji": Object.freeze({
      "Miramar Beach": { lat: 15.4800, lon: 73.8278 }
    })
  }),

  "Gujarat": Object.freeze({
    "Ahmedabad": Object.freeze({
      "Sabarmati Ashram": { lat: 23.0338, lon: 72.5850 }
    })
  }),

  "Haryana": Object.freeze({
    "Gurugram": Object.freeze({
      "Cyber Hub": { lat: 28.4595, lon: 77.0266 }
    })
  }),

  "Himachal Pradesh": Object.freeze({
    "Shimla": Object.freeze({
      "Mall Road": { lat: 31.1048, lon: 77.1734 }
    })
  }),

  "Jharkhand": Object.freeze({
    "Ranchi": Object.freeze({
      "Rock Garden": { lat: 23.3441, lon: 85.3096 }
    })
  }),

  "Karnataka": Object.freeze({
    "Bengaluru": Object.freeze({
      "MG Road": { lat: 12.9716, lon: 77.5946 }
    })
  }),

  "Kerala": Object.freeze({
    "Kochi": Object.freeze({
      "Marine Drive": { lat: 9.9312, lon: 76.2673 }
    })
  }),

  "Madhya Pradesh": Object.freeze({
    "Bhopal": Object.freeze({
      "Upper Lake": { lat: 23.2599, lon: 77.4126 }
    })
  }),

  "Maharashtra": Object.freeze({
    "Mumbai": Object.freeze({
      "Gateway of India": { lat: 18.9220, lon: 72.8347 }
    }),
    "Pune": Object.freeze({
      "Shaniwar Wada": { lat: 18.5204, lon: 73.8567 }
    })
  }),

  "Manipur": Object.freeze({
    "Imphal": Object.freeze({
      "Kangla Fort": { lat: 24.8170, lon: 93.9368 }
    })
  }),

  "Meghalaya": Object.freeze({
    "Shillong": Object.freeze({
      "Ward’s Lake": { lat: 25.5788, lon: 91.8933 }
    })
  }),

  "Mizoram": Object.freeze({
    "Aizawl": Object.freeze({
      "Solomon’s Temple": { lat: 23.7271, lon: 92.7176 }
    })
  }),

  "Nagaland": Object.freeze({
    "Kohima": Object.freeze({
      "War Cemetery": { lat: 25.6747, lon: 94.1086 }
    })
  }),

  "Odisha": Object.freeze({
    "Bhubaneswar": Object.freeze({
      "Lingaraj Temple": { lat: 20.2700, lon: 85.8330 }
    })
  }),

  "Punjab": Object.freeze({
    "Amritsar": Object.freeze({
      "Golden Temple": { lat: 31.6200, lon: 74.8765 }
    })
  }),

  "Rajasthan": Object.freeze({
    "Jaipur": Object.freeze({
      "Hawa Mahal": { lat: 26.9239, lon: 75.8267 }
    })
  }),

  "Sikkim": Object.freeze({
    "Gangtok": Object.freeze({
      "MG Marg": { lat: 27.3314, lon: 88.6130 }
    })
  }),

  "Tamil Nadu": Object.freeze({
    "Chennai": Object.freeze({
      "Marina Beach": { lat: 13.0827, lon: 80.2707 }
    })
  }),

  "Telangana": Object.freeze({
    "Hyderabad": Object.freeze({
      "Charminar": { lat: 17.3616, lon: 78.4747 }
    })
  }),

  "Tripura": Object.freeze({
    "Agartala": Object.freeze({
      "Ujjayanta Palace": { lat: 23.8315, lon: 91.2868 }
    })
  }),

  "Uttar Pradesh": Object.freeze({
    "Lucknow": Object.freeze({
      "Hazratganj": { lat: 26.8467, lon: 80.9462 }
    }),
    "Varanasi": Object.freeze({
      "Dashashwamedh Ghat": { lat: 25.2820, lon: 83.0090 }
    })
  }),

  "Uttarakhand": Object.freeze({
    "Nainital": Object.freeze({
      "Mallital": { lat: 29.3919, lon: 79.4542 },
      "Tallital": { lat: 29.3780, lon: 79.4636 }
    }),
    "Dehradun": Object.freeze({
      "Clock Tower": { lat: 30.3256, lon: 78.0437 }
    })
  }),

  "West Bengal": Object.freeze({
    "Kolkata": Object.freeze({
      "Victoria Memorial": { lat: 22.5448, lon: 88.3426 }
    })
  })
});
