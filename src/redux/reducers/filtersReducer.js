import DesignFilterIcon from '../../assets/filters/DesignFilterIcon';
import FrontendFilterIcon from '../../assets/filters/FrontendFilterIcon';
import BackendFilterIcon from '../../assets/filters/BackendFilterIcon';
import MarketingFilterIcon from '../../assets/filters/MarketingFilterIcon';
import { APPLY_FILTER } from '../actions/types';

const initialState = {
  filtersData: [
    {
      label: 'All',
      Icon: null,
      isActive: true,
    },
    {
      label: 'Design',
      Icon: DesignFilterIcon,
      isActive: false,
    },
    {
      label: 'Frontend',
      Icon: FrontendFilterIcon,
      isActive: false,
    },
    {
      label: 'Backend',
      Icon: BackendFilterIcon,
      isActive: false,
    },
    {
      label: 'Marketing',
      Icon: MarketingFilterIcon,
      isActive: false,
    },
  ],
  appliedFilter: 'all',
};

const applyFilter = (state, filter) => {
  const newFiltersData = state.filtersData.map((item) => {
    // apply the filter
    if (item.label === filter)
      return {
        ...item,
        isActive: !item.isActive,
      };
    // reset previously applied filter
    if (item.isActive === true)
      return {
        ...item,
        isActive: false,
      };
    return item;
  });
  return {
    filtersData: [...newFiltersData],
    appliedFilter: filter !== state.appliedFilter && filter.toLowerCase(),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return applyFilter(state, action.filter);
    default:
      return state;
  }
};

export default reducer;
