
export const bookMarkArea = document.querySelectorAll('[js-data="bookmark-area"]');

bookMarkArea?.forEach(x => { 

const bookMark = x.querySelector('[js-data="bookmark"]');

bookMark?.addEventListener("click", () => {
bookMark.classList.toggle("bookmarked");
});
});
