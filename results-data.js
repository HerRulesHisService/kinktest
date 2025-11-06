const bdsmTypes = {
    dominant: {
        name: "Dominant",
        description: "You enjoy taking control and responsibility in dynamics. Leadership and guidance come naturally to you.",
        questions: [0, 5, 9, 13, 17] // Question indices that relate to this type
    },
    submissive: {
        name: "Submissive",
        description: "You find freedom in surrendering control to a trusted partner. Service and obedience are fulfilling.",
        questions: [1, 4, 8, 12, 16]
    },
    sadist: {
        name: "Sadist",
        description: "You derive pleasure from consensually causing pain or discomfort. The power in administering sensation excites you.",
        questions: [2, 6, 10, 14, 18]
    },
    masochist: {
        name: "Masochist",
        description: "You enjoy receiving consensual pain or discomfort as part of your pleasure. Endurance and sensation drive you.",
        questions: [3, 7, 11, 15, 19]
    },
    switch: {
        name: "Switch",
        description: "You enjoy both dominant and submissive roles depending on the situation and partner.",
        questions: [0, 1, 4, 5, 8, 9]
    },
    rigger: {
        name: "Rigger",
        description: "You have an interest in bondage and the art of tying. The technical and aesthetic aspects appeal to you.",
        questions: [4, 10, 14]
    },
    ropeBunny: {
        name: "Rope Bunny",
        description: "You enjoy being tied up and the sensation of restraint. The feeling of bondage is comforting and exciting.",
        questions: [5, 11, 15]
    },
    brat: {
        name: "Brat",
        description: "You enjoy playful resistance and testing boundaries. The back-and-forth dynamic is fun for you.",
        questions: [7, 12, 16]
    },
    bratTamer: {
        name: "Brat Tamer",
        description: "You enjoy dealing with playful resistance and establishing authority through patience and firmness.",
        questions: [6, 13, 17]
    },
    master: {
        name: "Master/Mistress",
        description: "You're interested in total power exchange and ownership dynamics. Responsibility and training appeal to you.",
        questions: [8, 14, 18]
    },
    slave: {
        name: "Slave",
        description: "You find fulfillment in complete surrender and service. Devotion and obedience are core to your nature.",
        questions: [9, 15, 19]
    },
    vanilla: {
        name: "Vanilla",
        description: "You prefer relationships without BDSM elements or with very light power dynamics.",
        questions: [] // This will be calculated based on low scores overall
    }
};
