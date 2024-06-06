import { NotFound } from '@/components/screens/not-found/not-found.component'

import { ROUTES } from './routes.data'

export class Router {
	#routers
	#currentRouter

	constructor() {
		this.#routers = ROUTES
		this.#currentRouter = null

		this.#handleRouteChange()
	}

	getCurrentPath() {
		return window.location.pathname
	}

	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routers.find(route => route.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}

		this.#currentRouter = route
		this.render()
	}

	render() {
		const component = new this.#currentRouter.component()
		document.getElementById('app').innerHTML = component.render()
	}
}
