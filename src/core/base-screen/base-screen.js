export class BaseScreen {
	constructor(title) {
		this.title = title
	}

	getTitle(title) {
		if (title) {
			return (document.querySelector('title').innerText = title)
		}
	}
}
