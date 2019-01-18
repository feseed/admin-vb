import { get } from '@/plugins/fetch'

// 测试 mock 数据
export function fetchTesting () {
	return get('mock/test')
}
