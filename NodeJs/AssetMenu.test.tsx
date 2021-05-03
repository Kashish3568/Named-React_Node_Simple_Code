import { render } from '@testing-library/react'
import { format } from 'date-fns'

import { story } from '~/tests/fixtures/capi'
import { ICapiResultData } from '~/types/capi'

import { AssetMenu } from '~/components/AssetMenu'

describe('components/AssetMenu', () => {
	let asset: ICapiResultData
	const formatDate = (date: string) => format(new Date(date), 'M/d/yyyy h:mm a')

	beforeEach(() => {
		asset = { ...story }
	})

	test('should render the Edit Story link', () => {
		const { getByText } = render(<AssetMenu asset={ asset } />)
		const linkElement = getByText(/Edit Story/i)
		expect(linkElement).toBeInTheDocument()
	})

	test('should render the Send To Fronts link', () => {
		const { getByText } = render(<AssetMenu asset={ asset } />)
		const linkElement = getByText(/Send to fronts/i)
		expect(linkElement).toBeInTheDocument()
	})

	test('should render the Create Plan link', () => {
		const { getByText } = render(<AssetMenu asset={ asset } />)
		const linkElement = getByText(/Create Plan/i)
		expect(linkElement).toBeInTheDocument()
	})

	test('should render the Create alert link', () => {
		const { getByText } = render(<AssetMenu asset={ asset } />)
		const linkElement = getByText(/Create Alert/i)
		expect(linkElement).toBeInTheDocument()
	})

	describe('Created', () => {
		test('should render the Created date correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/created-value/i)

			expect(linkElement.innerHTML).toEqual(formatDate(asset.createDate))
		})

		test('should not render Created if date is falsey', () => {
			asset.createDate = ''
			const { queryByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = queryByTestId(/created-value/i)

			expect(linkElement).toEqual(null)
		})
	})

	describe('Last updated', () => {
		test('should render the Last updated date correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/last-updated-value/i)

			expect(linkElement.innerHTML).toEqual(formatDate(asset.updateDate))
		})

		test('should not render Last updated if date is falsey', () => {
			asset.updateDate = ''
			const { queryByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = queryByTestId(/last-updated-value/i)

			expect(linkElement).toEqual(null)
		})
	})

	describe('Initial publish', () => {
		test('should render the Initial publish date correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/initial-publish-value/i)

			expect(linkElement.innerHTML).toEqual(formatDate(asset.initialPublishDate))
		})

		test('should not render Initial publish if date is falsey', () => {
			asset.initialPublishDate = ''
			const { queryByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = queryByTestId(/initial-publish-value/i)

			expect(linkElement).toEqual(null)
		})
	})

	describe('Last publish', () => {
		test('should render the Last publish date correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/last-publish-value/i)

			expect(linkElement.innerHTML).toEqual(formatDate(asset.lastPublishDate))
		})

		test('should not render Last publish if date is falsey', () => {
			asset.lastPublishDate = ''
			const { queryByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = queryByTestId(/last-publish-value/i)

			expect(linkElement).toEqual(null)
		})
	})

	describe('Tags', () => {
		test('should render the Tags if present', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/tagsContainer/i)

			expect(linkElement).toBeInTheDocument()
		})

		test('should render the primary tag correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/tag-ct-3/i)

			expect(linkElement.children[0].innerHTML).toEqual('content-tag-3')
		})

		test('should render the second content tag correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/tag-ct-1/i)

			expect(linkElement.children[0].innerHTML).toEqual('content-tag-1')
		})

		test('should render the first system tag correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/tag-st-1/i)

			expect(linkElement.children[0].innerHTML).toEqual('system-tag-1')
		})

		test('should render the second system tag correctly', () => {
			const { getByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = getByTestId(/tag-st-2/i)

			expect(linkElement.children[0].innerHTML).toEqual('system-tag-2')
		})

		test('should not render the Tags if falsey', () => {
			asset.contentTags = []
			asset.systemTags = []
			const { queryByTestId } = render(<AssetMenu asset={ asset } />)

			const linkElement = queryByTestId(/tagsContainer/i)

			expect(linkElement).toEqual(null)
		})
	})
})
