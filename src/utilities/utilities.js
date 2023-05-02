export function hideLabel (e) {
    e.target.parentElement.children[0].classList.add("scale-75");
    e.target.parentElement.children[0].classList.remove("translate-y-1/4");
    e.target.parentElement.children[0].classList.add("-translate-y-1/2");
}
export function showLabel (e) {
    if (document.activeElement != e.target) {
        if (e.target.value.length == 0) {
            e.target.parentElement.children[0].classList.remove("scale-75");
            e.target.parentElement.children[0].classList.remove("-translate-y-1/2");
            e.target.parentElement.children[0].classList.add("translate-y-1/4");
        }
    }
}