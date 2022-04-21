import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AngleLeftIcon } from '@iconbox/snappmarket';
import routes from 'components/Common/Router/routes';

import {
  StyledBreadcrumbWrapper,
  StyledBreadcrumbItem,
  StyledBreadcrumbItemSeparator,
  StyledBreadcrumbItemWrapper,
} from './styles';

const Breadcrumb = ({ items, className, separatorIcon, ...rest }) => {
  const updateBreadcrumbItems = () => {
    const updatedItems = [...items];

    updatedItems.forEach((item, index) => {
      if (!item.link && index !== items.length - 1) {
        if (index === 1) {
          item.link = `${routes.categories.path}/${item.slug || item.id}`;
        } else {
          item.link = `${routes.categories.path}/${items[index - 1].slug ||
            items[index - 1].id}`.concat(
            `${item.slug || item.id ? `/${item.slug || item.id}` : ''}`,
          );
        }
      }
    });

    return updatedItems;
  };
  const breadcrumbItems = updateBreadcrumbItems().map((item, index) => (
    <StyledBreadcrumbItemWrapper key={item.id}>
      {!!index && (
        <StyledBreadcrumbItemSeparator>
          {separatorIcon || <AngleLeftIcon size={1.3} color="gray" />}
        </StyledBreadcrumbItemSeparator>
      )}
      <StyledBreadcrumbItem>
        {index !== items.length - 1 ? (
          <Link data-testid="breadcrumbLink" to={item.link}>
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </StyledBreadcrumbItem>
    </StyledBreadcrumbItemWrapper>
    /* eslint-enable indent */
  ));
  return (
    <StyledBreadcrumbWrapper
      data-testid="breadcrumb"
      className={className}
      {...rest}
    >
      {breadcrumbItems}
    </StyledBreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  separatorIcon: PropTypes.node,
};

Breadcrumb.defaultProps = {
  items: [],
};

export default Breadcrumb;
