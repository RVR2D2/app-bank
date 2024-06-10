import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import { UserItem } from '@/components/ui/user-item/user-item.component'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new UserItem({
					avatarPath:
						'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
					name: 'Test'
				})
			],
			styles
		)

		$R(element).find('h1').css('color', 'black')

		return element
	}
}
