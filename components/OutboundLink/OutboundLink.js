import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styles from './OutboundLink.css';

OutboundLink.propTypes = {
  analyticsEventLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

OutboundLink.defaultProps = {
  className: '',
  hasIcon: true,
};

function OutboundLink({ analyticsEventLabel, children, className, hasIcon, href, router }) {
  console.log(`OUTBOUND [${analyticsEventLabel}] from ${router.route} to ${href}`);

  return (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank">
      <React.Fragment>
        <span className={styles.screenReaderOnly}>Opens in new window</span>
        {children}
        {hasIcon && <i className={styles.externalLinkIcon}>&#8618;</i>}
      </React.Fragment>
    </a>
  );
}

export default withRouter(OutboundLink);
