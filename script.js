const heartBtn = document.querySelector(".heart-btn");
const heart = document.querySelector(".heart-btn .fa-heart");

// pu handler(click) on meal list
// find src from img
// finde meal-header img replace src
// target/carret-target

const mealList = document.querySelector(".meal-list-img");

mealList.addEventListener("click", (e) => {
	const el = e.target;

	const li = el.closest(".meal-list");

	const img = li.querySelector("img");

	const imgForReplasement = document.querySelector(".meal-header img");
	imgForReplasement.src = img.src;
});

function heartToggle(e) {
	heart.classList.toggle("fa-solid");
	heart.classList.toggle("fa-regular");
}

heartBtn.addEventListener("click", heartToggle);
