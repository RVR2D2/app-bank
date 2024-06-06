import { BaseScreen } from '@/core/base-screen/base-screen'

export class Home extends BaseScreen {
	render() {
		this.getTitle('Home')
		return `<p>Home</p>`
	}
}
