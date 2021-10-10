import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import Filters from './Filters' 
import './filtermenu.scss'
const FilterMenu = forwardRef(({show, children}, ref)=>{
    return(
        <div>
            {show &&
                <div className="menu-bg">
                    <div className="menu-main" ref={ref}>
                        <p>Filter by:</p>
                        <div className="filters" data-testid='filterSelection'>
							<Filters />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
})
FilterMenu.propTypes={
    show:PropTypes.bool,
    children:PropTypes.node
}
FilterMenu.displayName = 'FilterMenu'
export default FilterMenu
