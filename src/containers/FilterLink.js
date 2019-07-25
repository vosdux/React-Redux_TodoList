import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.setVisibilityFilter
    }
};

const mapDispatchToProps = (dispatch, owmProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(owmProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;