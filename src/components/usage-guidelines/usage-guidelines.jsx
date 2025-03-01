import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { BEMClass } from '../../helpers/utils/bem-helper';
import './usage-guidelines.scss';

const CSS_BASE_CLASS = 'vibe-sb-comps-usage-guidelines';
const bemHelper = BEMClass(CSS_BASE_CLASS);

const UsageGuidelines = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span id={index} key={index} className={bemHelper({ element: 'guideline' })}>
          <span className={bemHelper({ element: 'icon' })}>➡️</span>
          <span>{guideline}</span>
        </span>
      )),
    [guidelines],
  );

  return <article className={CSS_BASE_CLASS}>{guidelinesElements}</article>;
};

UsageGuidelines.propTypes = {
  guidelines: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
};

UsageGuidelines.defaultProps = {
  guidelines: [],
};

export default UsageGuidelines;
