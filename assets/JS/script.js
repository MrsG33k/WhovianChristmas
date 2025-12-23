const christmasSpecials = [
  {
    title: "The Christmas Invasion",
    doctor: "10th Doctor (David Tennant)",
    year: 2005,
    blurb: "The Doctor recovers from his regeneration and battles the Sycorax.",
    quote: "'I'm going to get killed by a christmas tree!'",
    image: "assets/the-christmas-invasion.jpg"
  },
 {   
    title: "The Runaway Bride",
    doctor: "10th Doctor (David Tennant)",
    year: 2006,
    blurb: "Donna Noble, killer robots, and a very angry wedding.",
    quote: "'I missed my wedding, lost my job and became a widow on the same day. Sort of.'",
    image: "assets/the-runaway-bride.jpg"
  },
  {
    title: "Voyage of the Damned",
    doctor: "10th Doctor (David Tennant)",
    year: 2007,
    blurb: "The Doctor teams up with a waitress to save the Titanic spaceship.",
    quote: "'I'm the Doctor. I'm a Time Lord. I'm from the planet Gallifrey in the Constellation of Kasterborous. I'm 903 years old and I'm the man who is gonna save your lives and all 6 billion people on the planet below. You got a problem with that?'",
    image: "assets/voyage-of-the-damned.jpg"
  },
  {
    title: "The Next Doctor",
    doctor: "10th Doctor (David Tennant)",
    year: 2008,
    blurb: "The Doctor teams up with a human man who believes he's a future incarnation of the Doctor to fight Cybermen threatening Victorian London with a giant CyberKing",
    quote: "' TARDIS. T - A - R - D - I - S. It stands for Tethered Aerial Release Developed in Style! Do you see?'",
    image: "assets/the-next-doctor.jpg"
  },
  {
    title: "The End of Time - Part One",
    doctor: "10th Doctor (David Tennant)",
    year: 2009,
    blurb: "The Tenth Doctor faces his resurrected nemesis, the Master, who's become a god-like figure to humanity while a greater, universe-ending threat looms, forcing the Doctor to confront his own mortality and a prophecy of his demise, all while Wilfred Mott and Donna Noble get caught in the middle of galactic chaos",
    quote: "'And so it came to pass, on Christmas Day, that the human race did cease to exist. But even then, the Master had no concept of his greater role in events. For this was far more than humanity's end. This day was the day upon which the whole of creation would change forever. This was the day the Time Lords returned.'",
    image: "assets/the-end-of-time-one.jpg"
  },
  {
    title: "The End of Time - Part Two",
    doctor: "10th Doctor (David Tennant)",
    year: 2010,
    blurb: "'The Doctor and Wilfred Mott must prevent the Master from using a link to bring back the Time Lords from the Time War, leading to a final, tragic sacrifice and a regeneration. '",
    quote: "'I don't want to go.'",
    image: "assets/the-end-of-time-two.jpg"
  },
  {
    title: "A Christmas Carol",
    doctor: "11th Doctor (Matt Smith)",
    year: 2010,
    blurb: "A timey-wimey reworking of Dickens with flying sharks.",
    quote: "'In 900 years of time and space, I've never met anyone who wasn't important'",
    image: "assets/a-christmas-carol.jpg"
  },
  {
    title: "The Doctor, the Widow and the Wardrobe",
    doctor: "11th Doctor (Matt Smith)",
    year: 2011,
    blurb: "The Doctor, posing as a caretaker, leads a wartime family into a Narnia-esque magical world to save a forest of tree people and, in the process, reunites the family with their supposedly lost father. ",
    quote: "'Usually called The Doctor, or the Caretaker, or get off this planet, although strictly speaking, that probably isn't a name.'",
    image: "assets/the-worst-christmas-special.jpg"
  },
  {
    title: "The Snowmen",
    doctor: "11th Doctor (Matt Smith)",
    year: 2012,
    blurb: "The Doctor teams up with a governess and a sentient snowman to stop an evil force from turning London into a frozen wasteland.",
    quote: "'Run. Run, you clever boy, and remember.'",
    image: "assets/the-snowmen.jpg"
  },
  {
    title: "The Time of the Doctor",
    doctor: "11th Doctor (Matt Smith)",
    year: 2013,
    blurb: "The Doctor defends the town of Christmas from various alien threats while confronting his own impending regeneration.",
    quote: "'We all change, when you think about it, we're all different people; all through our lives, and that's okay, that's good, you've gotta keep moving, so long as you remember all the people that you used to be. I will not forget one line of this, not one day, I swear. I will always remember when The Doctor was me.'",
    image: "assets/time-of-the-doctor.jpg"
  },
  {
    title: "Last Christmas",
    doctor: "12th Doctor (Peter Capaldi)",
    year: 2014,
    blurb: "The Doctor and Clara team up with Santa Claus to battle alien threats in a dream world.",
    quote: "'There's a horror movie called Alien? That's really offensive. No wonder everyone keeps invading you.'",
    image: "assets/last-christmas.jpg"
  },
  {
    title: "The Husbands of River Song",
    doctor: "12th Doctor (Peter Capaldi)",
    year: 2015,
    blurb: "The Doctor reunites with River Song on a distant planet during Christmas, leading to a series of comedic and adventurous escapades involving a royal heist and a deadly alien threat.",
    quote: "'When you love the Doctor, it's like loving the stars themselves. You don't expect a sunset to admire you back. And if I happen to find myself in danger, let me tell you, the Doctor is not stupid enough, or sentimental enough, and he is certainly not in love enough to find himself standing in it with me!'",
    image: "assets/husbands-of-river-song.jpg"
  },
  {
    title: "The Return of Doctor Mysterio",
    doctor: "12th Doctor (Peter Capaldi)",
    year: 2016,
    blurb: "The Doctor teams up with a superhero to stop an alien threat during Christmas in New York City.",
    quote: "'With great power comes great responsibility. No man worthy of the title leaves a baby alone.'",
    image: "assets/return-of-doctor-mysterio.jpg"
  },
  {
    title: "Twice Upon a Time",
    doctor: "12th Doctor (Peter Capaldi)",
    year: 2017,
    blurb: "The Twelfth Doctor meeting his First incarnation in the Antarctic, both refusing to regenerate, as they encounter a WWI soldier and a mysterious alien entity called Testimony that preserves memories at the moment of death, forcing them to confront their pasts and find hope to accept their shared future as one Doctor.",
    quote: "'Oh. There it is. Silly old universe. The more I save it, the more it needs saving. It's a treadmill. Well... I suppose one more lifetime won't kill anyone. Well... except me.'",
    image: "assets/twice-upon-a-time.jpg"
  },
  {
    title: "Resolution",
    doctor: "13th Doctor (Jodie Whittaker)",
    year: 2019,
    blurb: "The Doctor and her friends battle a long-dormant, single reconnaissance Dalek that rebuilds itself and attempts to summon its fleet to conquer Earth on New Year's Day. ",
    quote: "'Here's my New Year's Resolution: I'm coming for you, Dalek!'",
    image: "assets/resolution.jpg"
  },
  {
    title: "Spyfall, Part 1",
    doctor: "13th Doctor (Jodie Whittaker)",
    year: 2020,
    blurb: "The Doctor and her companions are recruited by MI6 to investigate a series of alien attacks on intelligence agents globally, leading to the shocking discovery that their MI6 contact "O" is actually a new incarnation of the Master.",
    quote: "'That's my name, and that is why I chose it. So satisfying! Doctor, I... I did say look for the spymaster. Or should I say spy... Master.'",
    image: "assets/spyfall-part-1.jpg"
  },
  {
    title: "Revolution of the Daleks",
    doctor: "13th Doctor (Jodie Whittaker)",
    year: 2021,
    blurb: "The Doctor is imprisoned on a distant planet while her companions face a Dalek uprising on Earth, leading to a thrilling rescue mission and a showdown with the Daleks' new leader, the Supreme Dalek.",
    quote: "'You can't eat the cage. Believe me, I've tried.'",
    image: "assets/revolution-of-the-daleks.jpg"
  },
  {
    title: "Eve of the Daleks",
    doctor: "13th Doctor (Jodie Whittaker)",
    year: 2022,
    blurb: "The Doctor and her companions find themselves trapped in a time loop on New Year's Eve, facing off against a squad of Daleks determined to exterminate them.",
    quote: "' Congratulations. The most evil creature in the universe has successfully vanquished an old door.'",
    image: "assets/eve-of-the-daleks.jpg"
  },
  {
    title: "The Church on Ruby Road",
    doctor: "15th Doctor (Ncuti Gatwa)",
    year: 2023,
    blurb: "The newly-regenerated Fifteenth Doctor meets and teams up with foundling Ruby Sunday to fight baby-eating goblins who are interfering with her life and her past, ultimately leading her to join him on his TARDIS adventures.",
    quote: "'Do you know why they call them Goblins? 'Cause they like to gobble you up.'",
    image: "assets/the-church-on-ruby-road.jpg"
  },
  {
    title: "Joy to the World",
    doctor: "15th Doctor (Ncuti Gatwa)",
    year: 2024,
    blurb: "The Fifteenth Doctor finds himself trapped in the time-hopping Time Hotel with newcomer Joy, as they unravel a mystery involving a killer briefcase containing a \"Star Seed\" that psychically links to people, culminating in the creation of the Star of Bethlehem and a poignant exploration of loneliness and connection during Christmas.",
    quote: "'This... this is a sonic screwdriver. Actually, \"zappy thing\" makes more sense.'",
    image: "assets/joy-to-the-world.jpg"
  }
];


// DOM Elements
const button = document.getElementById("pick-special-btn");
const resultSection = document.getElementById("result");
const titleEl = document.getElementById("title");
const doctorEl = document.getElementById("doctor");
const yearEl = document.getElementById("year");
const blurbEl = document.getElementById("blurb");
const quoteEl = document.getElementById("quote");
const imageEl = document.getElementById("image");

// Event Listener
button.addEventListener("click", pickRandomStory);

// Pick the Random Story
function pickRandomStory() {
    button.textContent = "Consulting the TARDIS…";

     setTimeout(() => {
        // Takes the max number (length of array) and multiplies it by a random decimal between 0 and 1
        const randomIndex = Math.floor(Math.random() * christmasSpecials.length);
        const story = christmasSpecials[randomIndex];
        //replaces DOM elements with story details
        titleEl.textContent = story.title;
        doctorEl.textContent = story.doctor;
        yearEl.textContent = story.year;
        blurbEl.textContent = story.blurb;
        quoteEl.textContent = story.quote ?? "";
        quoteEl.style.display = story.quote ? "block" : "none";
        imageEl.src = story.image;
        imageEl.alt = story.title;
        //removes hidden class to show the result section
        resultSection.classList.remove("hidden");
        button.textContent = "Pick another story";
  }, 400);
}

if (button) {
  button.addEventListener("click", pickRandomStory);
} else {
  console.error("Button not found");
}