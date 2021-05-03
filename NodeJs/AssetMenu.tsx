import { MouseEvent, useState } from 'react'
import getConfig from 'next/config'

import {
	Button,
	Divider,
	Menu,
	MenuItem } from '@material-ui/core'
import { MenuProps } from '@material-ui/core/Menu'
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'

import { ICapiResultData } from '~/types/capi'
import { getPrestoLink } from '~/utilities/asset'

import { ListItemLink } from './ListItemLink'
import { AssetInfoItem } from './AssetInfoItem'
import { AssetTags } from './AssetTags'

const { publicRuntimeConfig } = getConfig()

const MenuContents = (props: MenuProps) => (
	<Menu
		getContentAnchorEl={ null }
		anchorOrigin={ {
			vertical: 'bottom',
			horizontal: 'center',
		} }
		transformOrigin={ {
			vertical: 'top',
			horizontal: 'center',
		} }
		{ ...props }
	/>
)

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		width: 200
	},
})(MenuContents)

const StyledMenuItem = withStyles(() => ({}))(MenuItem)

const useStyles = makeStyles(() => createStyles({
	assetInfoDivider: {
		marginTop: '10px'
	},
	listItemLink: {
		padding: 0,
		fontSize: '0.95rem'
	},
	moreButton: {
		minWidth: 'unset',
	},
}))

interface IProps {
	asset: ICapiResultData
}

export const AssetMenu = (props: IProps): JSX.Element => {
	const classes = useStyles()
	const { asset } = props
	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
	const prestoUrl = publicRuntimeConfig.profileUrl

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<Button
				aria-controls="customized-menu"
				aria-haspopup="true"
				onClick={ handleClick }
				className={ classes.moreButton }
			>
				<MoreVertIcon />
			</Button>
			<StyledMenu
				id="customized-menu"
				anchorEl={ anchorEl }
				keepMounted
				open={ Boolean(anchorEl) }
				onClose={ handleClose }
			>
				<StyledMenuItem className={ classes.listItemLink }>
					<ListItemLink
						href={ getPrestoLink(asset) }
						primary={ `Edit ${asset.authoringTypeCode}` }
						target="_blank"
					/>
				</StyledMenuItem>
				<StyledMenuItem className={ classes.listItemLink }>
					<ListItemLink
						href={ `${prestoUrl}` }
						primary="Send to fronts"
						target="_blank"
					/>
				</StyledMenuItem>
				<StyledMenuItem className={ classes.listItemLink }>
					<ListItemLink
						href={ `${prestoUrl}` }
						primary="Create plan"
						target="_blank"
					/>
				</StyledMenuItem>
				<StyledMenuItem className={ classes.listItemLink }>
					<ListItemLink
						href={ `${prestoUrl}#!/alerts` }
						primary="Create alert"
						target="_blank"
					/>
				</StyledMenuItem>
				<Divider className={ classes.assetInfoDivider } />
				<AssetInfoItem data={ { date: asset.createDate, email: asset.createdByUser, name: 'Created' } } />
				<AssetInfoItem data={ { date: asset.updateDate, email: asset.updateByUser, name: 'Last updated' } } />
				<AssetInfoItem data={ { date: asset.initialPublishDate, email: asset.updateByUser, name: 'Initial publish' } } />
				<AssetInfoItem data={ { date: asset.lastPublishDate, email: asset.updateByUser, name: 'Last publish' } } />
				<AssetTags asset={ asset } />
			</StyledMenu>
		</>
	)
}
