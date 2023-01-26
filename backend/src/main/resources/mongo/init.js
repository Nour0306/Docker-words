conn = new Mongo();
db = conn.getDB("mongoDB");

db.createCollection("articles");

db.articles.insert({
    id: "1",
    title: "Why is Music So Powerful?",
    tag: "Music",
    description: "Music is such a powerful tool. It has been scientifically proven that it has the ability to change our moods.",
    text: "A new neuroscience-based study has identified that if specific music evokes personal memories, these songs have the power to elicit stronger positive emotions than other stimuli, such as looking at a nostalgic picture. The goal of this study was to investigate the mechanisms by which music and photographs trigger pleasant or unpleasant emotions. Most significantly, the researchers found that while upbeat music (such as dance songs) reliably boosts someone's mood, the most potent factor for evoking powerful positive emotions and pleasure via music was linked to personal memories. Notably, the three feelings most strongly associated with pleasant valence while listening to music were joy, strength, and relaxation.",
    date: new Date()
});
db.articles.insert({
    id: "2",
    title: "Reasons to watch movies",
    tag: "Movie",
    description: "This article explains why watching movies has huge benefits on our day to day life",
    text: "Did you know that cinema therapy exists? Cinemetherapy (movie therapy) is a form of expressive therapy for overcoming medical and mental health issues. This therapy can change an individual’s negative thoughts, bad habits, and the ability to manage life events. People who attend cinema therapy are watching movies that reflect their current issues.Comedies, for example, make us laugh, and laughing for 15 minutes is just as good for your heart as exercise, said cardiologist Dr. Michael Miller of the University of Maryland. But don't underestimate the sad movies! Sad movies have a positive effect on your brain chemistry too. According to scientists from Oxford University, watching a traumatic movie can boost the production of endorphins, a chemical associated with increased pain tolerance. So, sad movies can actually make you feel good.",
    date: new Date()
});
db.articles.insert({
    id: "3",
    title: "Angular vs React",
    tag: "Technology",
    description: "This article explains the differences between Angular and React",
    text: "Angular is a framework for building client applications in HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.",
    date: new Date()
});
db.articles.insert({
    id: "4",
    title: "Jane AUSTEN",
    tag: "Books",
    description: "This article explains the life of Jane AUSTEN",
    text: "Jane Austen was an English novelist whose works of romantic fiction, set among the landed gentry, earned her a place as one of the most widely read writers in English literature. Her realism, biting irony and social commentary as well as her acclaimed plots have gained her historical importance among scholars and critics. Austen lived her entire life as part of a close-knit family located on the lower fringes of the English landed gentry. She was educated primarily by her father and older brothers as well as through her own reading. The steadfast support of her family was critical to her development as a professional writer. Austen began writing at an early age, and her first published work, a collection of three short novels, appeared in 1811. Her second and third novels, Sense and Sensibility and Pride and Prejudice, were published in 1813 and 1813 respectively. She wrote two additional novels, Mansfield Park and Emma, which were published anonymously in 1814 and 1816 respectively. She also wrote and began to publish a number of short pieces, including ",
    date: new Date()
});
db.articles.insert({
    id: "5",
    title: "How to be a good programmer",
    tag: "Technology",
    description: "This article explains how to be a good programmer",
    text: "To become great—not just good—you have to learn from experience. But be careful, experience can teach us to repeat poor behavior and to create bad habits. We’ve all encountered programmers with eight years of experience ... the same year of experience, repeated eight times. To avoid that syndrome, look at everything you do and ask yourself, “How can I make this better?” Novice software developers  look at their code to admire its wonderfulness. They write tests to prove that their code works instead of trying to make it fail. Truly great programmers actively look for where they’re wrong—because they know that eventually, users will find the defects they missed.",
    date: new Date()
});
db.articles.insert({
    id: "6",
    title: "John WICK",
    tag: "Movie",
    description: "This article explains the life of John WICK",
    text: "John Wick is a fictional character and the protagonist of the John Wick film series. He is portrayed by Keanu Reeves. John Wick is a retired hitman who is forced back into the life by a former associate plotting to seize control of a shadowy international assassins' guild. Bound by a blood oath to help him, Wick travels to Rome and does battle against some of the world's deadliest killers.",
    date: new Date()
});
db.articles.insert({
    id: "7",
    title: "How to be a good writer",
    tag: "Books",
    description: "This article explains how to be a good writer",
    text: "To become great—not just good—you have to learn from experience. But be careful, experience can teach us to repeat poor behavior and to create bad habits. We’ve all encountered programmers with eight years of experience ... the same year of experience, repeated eight times. To avoid that syndrome, look at everything you do and ask yourself, “How can I make this better?” Novice software developers  look at their code to admire its wonderfulness. They write tests to prove that their code works instead of trying to make it fail. Truly great programmers actively look for where they’re wrong—because they know that eventually, users will find the defects they missed.",
    date: new Date()
});
