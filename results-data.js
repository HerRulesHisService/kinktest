const bdsmTypes = {
    // Sexual Orientations
    heterosexual: {
        name: "Heterosexual",
        description: "You are primarily attracted to people of a different gender. Your orientation is towards the opposite gender.",
        category: "orientation",
        questions: [1],
        weight: 1.5
    },
    homosexual: {
        name: "Homosexual",
        description: "You are primarily attracted to people of the same gender. This includes gay men and lesbian women.",
        category: "orientation",
        questions: [0],
        weight: 1.5
    },
    bisexual: {
        name: "Bisexual",
        description: "You are attracted to people regardless of their gender. Your attraction isn't limited by gender binary.",
        category: "orientation",
        questions: [2],
        weight: 1.5
    },
    pansexual: {
        name: "Pansexual",
        description: "You are attracted to people based on connection rather than gender. Gender isn't a determining factor in your attraction.",
        category: "orientation",
        questions: [2, 5],
        weight: 1.3
    },
    asexual: {
        name: "Asexual Spectrum",
        description: "You experience little or no sexual attraction, though you may still experience romantic attraction or engage in BDSM for other reasons.",
        category: "orientation",
        questions: [0, 1, 2], // Low scores on attraction questions
        weight: 1.2,
        inverse: true
    },
    questioning: {
        name: "Questioning/Exploring",
        description: "You are exploring your orientation and preferences without fixed labels.",
        category: "orientation",
        questions: [5],
        weight: 1.1
    },

    // Gender Identity
    cisgender: {
        name: "Cisgender",
        description: "Your gender identity matches what you were assigned at birth.",
        category: "identity",
        questions: [3],
        weight: 1.2
    },
    transgender: {
        name: "Transgender",
        description: "Your gender identity differs from what you were assigned at birth.",
        category: "identity",
        questions: [4],
        weight: 1.2
    },
    nonbinary: {
        name: "Non-Binary",
        description: "Your gender identity exists outside the male/female binary.",
        category: "identity",
        questions: [4, 5],
        weight: 1.2
    },
    genderfluid: {
        name: "Genderfluid",
        description: "Your gender identity fluctuates or changes over time.",
        category: "identity",
        questions: [4, 5],
        weight: 1.1
    },

    // BDSM Roles - Dominance Spectrum
    dominant: {
        name: "Dominant",
        description: "You enjoy taking control and responsibility in dynamics. Leadership and guidance come naturally to you.",
        category: "role",
        questions: [6, 8, 10, 35, 41],
        weight: 1.0
    },
    submissive: {
        name: "Submissive",
        description: "You find freedom in surrendering control to a trusted partner. Service and obedience are fulfilling.",
        category: "role",
        questions: [7, 9, 11, 34, 40],
        weight: 1.0
    },
    switch: {
        name: "Switch",
        description: "You enjoy both dominant and submissive roles depending on the situation and partner.",
        category: "role",
        questions: [6, 7, 8, 9],
        weight: 1.0
    },
    master: {
        name: "Master/Mistress",
        description: "You're interested in total power exchange and ownership dynamics. Responsibility and training appeal to you.",
        category: "role",
        questions: [10, 34, 35, 40, 41],
        weight: 1.1
    },
    slave: {
        name: "Slave",
        description: "You find fulfillment in complete surrender and service. Devotion and obedience are core to your nature.",
        category: "role",
        questions: [11, 34, 40, 41],
        weight: 1.1
    },

    // BDSM Roles - Play Style
    sadist: {
        name: "Sadist",
        description: "You derive pleasure from consensually causing pain or discomfort. The power in administering sensation excites you.",
        category: "playstyle",
        questions: [12, 14, 17, 29],
        weight: 1.0
    },
    masochist: {
        name: "Masochist",
        description: "You enjoy receiving consensual pain or discomfort as part of your pleasure. Endurance and sensation drive you.",
        category: "playstyle",
        questions: [13, 15, 18, 29],
        weight: 1.0
    },
    rigger: {
        name: "Rigger",
        description: "You have an interest in bondage and the art of tying. The technical and aesthetic aspects appeal to you.",
        category: "playstyle",
        questions: [16, 19, 22],
        weight: 1.0
    },
    ropeBunny: {
        name: "Rope Bunny",
        description: "You enjoy being tied up and the sensation of restraint. The feeling of bondage is comforting and exciting.",
        category: "playstyle",
        questions: [17, 20, 23],
        weight: 1.0
    },
    brat: {
        name: "Brat",
        description: "You enjoy playful resistance and testing boundaries. The back-and-forth dynamic is fun for you.",
        category: "playstyle",
        questions: [25, 26, 43],
        weight: 1.0
    },
    bratTamer: {
        name: "Brat Tamer",
        description: "You enjoy dealing with playful resistance and establishing authority through patience and firmness.",
        category: "playstyle",
        questions: [25, 27, 43],
        weight: 1.0
    },
    caregiver: {
        name: "Caregiver",
        description: "You enjoy nurturing, guiding, and taking care of your partner in a protective role.",
        category: "playstyle",
        questions: [31, 36, 42],
        weight: 1.0
    },
    little: {
        name: "Little/Middle",
        description: "You enjoy expressing a younger, more carefree side of yourself within a safe relationship dynamic.",
        category: "playstyle",
        questions: [31, 42],
        weight: 1.0
    },
    pet: {
        name: "Pet Player",
        description: "You enjoy taking on animal-like characteristics and behaviors within roleplay dynamics.",
        category: "playstyle",
        questions: [32, 43],
        weight: 1.0
    },
    owner: {
        name: "Owner/Handler",
        description: "You enjoy the responsibility and care involved in a pet-play dynamic from the dominant side.",
        category: "playstyle",
        questions: [32, 43],
        weight: 1.0
    },
    degrader: {
        name: "Degrader/Humiliator",
        description: "You enjoy consensual humiliation and degradation as part of power exchange.",
        category: "playstyle",
        questions: [29, 35, 44],
        weight: 1.0
    },
    degradee: {
        name: "Degradee",
        description: "You find arousal or fulfillment in consensual humiliation and degradation.",
        category: "playstyle",
        questions: [29, 35, 44],
        weight: 1.0
    },
    sensualist: {
        name: "Sensualist",
        description: "You focus on sensation, touch, and sensory experiences rather than pain or strict power dynamics.",
        category: "playstyle",
        questions: [24, 28, 30],
        weight: 1.0
    },
    protocol: {
        name: "Protocol Enthusiast",
        description: "You enjoy formal rules, rituals, and structured behaviors in relationships.",
        category: "playstyle",
        questions: [24, 33, 37],
        weight: 1.0
    },
    primal: {
        name: "Primal",
        description: "You enjoy raw, instinct-driven play that often involves chasing, hunting, or wrestling dynamics.",
        category: "playstyle",
        questions: [26, 27, 43],
        weight: 1.0
    },
    voyeur: {
        name: "Voyeur",
        description: "You enjoy watching others in sexual or BDSM contexts, with their consent.",
        category: "playstyle",
        questions: [30, 38],
        weight: 1.0
    },
    exhibitionist: {
        name: "Exhibitionist",
        description: "You enjoy being watched in sexual or BDSM contexts, with consent of all parties.",
        category: "playstyle",
        questions: [30, 38],
        weight: 1.0
    },
    experimentalist: {
        name: "Experimentalist",
        description: "You enjoy trying new things and exploring various kinks without strong preferences.",
        category: "playstyle",
        questions: [28, 30, 39],
        weight: 1.0
    },
    vanilla: {
        name: "Vanilla",
        description: "You prefer relationships without BDSM elements or with very light power dynamics.",
        category: "preference",
        questions: [], // Calculated based on low scores overall
        weight: 1.0,
        inverse: true
    }
};

// Categories for organizing results
const resultCategories = {
    orientation: {
        name: "Sexual Orientation",
        description: "Your patterns of romantic and sexual attraction"
    },
    identity: {
        name: "Gender Identity",
        description: "Your personal sense of your own gender"
    },
    role: {
        name: "Primary Roles",
        description: "Your preferred positions in power dynamics"
    },
    playstyle: {
        name: "Play Styles & Interests",
        description: "Specific activities and dynamics that interest you"
    },
    preference: {
        name: "Relationship Preferences",
        description: "Your overall approach to relationships and dynamics"
    }
};
