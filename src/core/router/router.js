import { $R } from '@/core/rquery/rquery.lib'

import { Layout } from '@/components/layout/layout.component'
import { NotFound } from '@/components/screens/not-found/not-found.component'

import { ROUTES } from './routes.data'

export class Router {
	#routers = ROUTES
	#currentRouter = null
	#layout = null

	constructor() {
		window.addEventListener('popstate', () => {
			this.#handleRouteChange()
		})

		this.#handleRouteChange()
		this.#handleLinks()
	}

	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')

			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	getCurrentPath() {
		return window.location.pathname
	}

	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path)
			this.#handleRouteChange()
		}
	}

	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routers.find(route => route.path === path)

		if (!route) {
			route = {
				path: '404',
				component: NotFound
			}
		}

		this.#currentRouter = route
		this.#render()
	}

	#render() {
		const component = new this.#currentRouter.component().render()

		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component
			}).render()

			$R('#app').append(this.#layout)
		} else {
			$R('#content').html('').append(component)
		}
	}
}
