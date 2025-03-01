import React from 'react';
import cx from 'classnames';
import './frame.scss';

const Frame = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx('vibe-sb-comps-frame', className, {
      'vibe-sb-comps-frame--no-gutter': noGutter,
      'vibe-sb-comps-frame--no-border': noBorder,
    })}
  >
    {children}
  </div>
);

export default Frame;
