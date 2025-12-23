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
    blurb: "The DoctorDoctor teams up with a human man who believes he's a future incarnation of the Doctor to fight Cybermen threatening Victorian London with a giant CyberKing",
    quote: "' TARDIS. T - A - R - D - I - S. It stands for Tethered Aerial Release Developed in Style! Do you see?'",
    image: "assets/the-next-doctor.jpg"
  },
  {
    title: "A Christmas Carol",
    doctor: "11th Doctor (Matt Smith)",
    year: 2010,
    blurb: "A timey-wimey reworking of Dickens with flying sharks.",
    quote: "'In 900 years of time and space, I've never met anyone who wasn't important'",
    image: "assets/a-christmas-carol.jpg"
  },
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