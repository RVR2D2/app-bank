import { redQuery } from '@/core/red-query/red-query.lib'

export class TransactionService {
	#BASE_URL = '/transaction'

	getAll(onSuccess) {
		return redQuery({
			path: this.#BASE_URL + `?${new URLSearchParams({ orderBy: 'desc' })}`,
			onSuccess
		})
	}
}
