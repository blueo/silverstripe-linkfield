/* eslint-disable */
import classnames from 'classnames';
import i18n from 'i18n';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LinkFieldContext } from 'components/LinkField/LinkField';
import { Button } from 'reactstrap';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const stopPropagation = (fn) => (e) => {
  e.nativeEvent.stopImmediatePropagation();
  e.preventDefault();
  e.nativeEvent.preventDefault();
  e.stopPropagation();
  fn && fn();
}

const getVersionedBadge = (versionState) => {
  let title = '';
  let label = ''
  if (versionState === 'draft') {
    title = i18n._t('LinkField.LINK_DRAFT_TITLE', 'Link has draft changes');
    label = i18n._t('LinkField.LINK_DRAFT_LABEL', 'Draft');
  } else if (versionState === 'modified') {
    title = i18n._t('LinkField.LINK_MODIFIED_TITLE', 'Link has unpublished changes');
    label = i18n._t('LinkField.LINK_MODIFIED_LABEL', 'Modified');
  } else {
    return null;
  }
  const className = classnames('badge', `status-${versionState}`);
  return <span className={className} title={title}>{label}</span>;
};

const LinkPickerTitle = ({
  id,
  title,
  description,
  versionState,
  typeTitle,
  typeIcon,
  onDelete,
  onClick,
  onUnpublishedVersionedState,
  canDelete,
  isMulti,
  isFirst,
  isLast,
  isSorting,
  canCreate,
  readonly,
  disabled,
}) => {
  const { loading } = useContext(LinkFieldContext);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const classes = {
    'link-picker__link': true,
    'link-picker__link--is-first': isFirst,
    'link-picker__link--is-last': isLast,
    'link-picker__link--is-sorting': isSorting,
    'form-control': true,
    'link-picker__link--readonly': readonly || !canCreate,
    'link-picker__link--disabled': disabled,
  };
  if (versionState) {
    classes[`link-picker__link--${versionState}`] = true;
  }
  const className = classnames(classes);
  const deleteText = ['unversioned', 'unsaved'].includes(versionState)
    ? i18n._t('LinkField.DELETE', 'Delete')
    : i18n._t('LinkField.ARCHIVE', 'Archive');
  if (['draft', 'modified'].includes(versionState)) {
    onUnpublishedVersionedState();
  }
  return <div
    className={className}
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
  >
    { (isMulti && !readonly && !disabled) && <div className="link-picker__drag-handle"><i className="font-icon-drag-handle"></i></div> }
    <Button disabled={loading} className={`link-picker__button ${typeIcon}`} color="secondary" onClick={stopPropagation(onClick)}>
      <div className="link-picker__link-detail">
        <div className="link-picker__title">
          <span className="link-picker__title-text">{title}</span>
          {getVersionedBadge(versionState)}
        </div>
        <small className="link-picker__type">
          {typeTitle}:&nbsp;
          <span className="link-picker__url">{description}</span>
        </small>
      </div>
      {(canDelete && !readonly && !disabled) &&
        // This is a <span> rather than a <Button> because we're inside a <Button> and
        // trigger an error when you attempt to nest a <Button> inside a <Button>.
        <span
          role="button"
          tabIndex="0"
          className="link-picker__delete btn btn-link"
          onKeyDown={(evt) => {
            if ((evt.code === 'Enter' || evt.code === 'Space') && !loading) {
              evt.nativeEvent.stopImmediatePropagation();
              evt.stopPropagation();
              onDelete(id);
              evt.nativeEvent.preventDefault();
              evt.preventDefault();
            }
          }}
          onClick={stopPropagation(() => !loading ? onDelete(id) : null)}
        >{deleteText}</span>
      }
    </Button>
  </div>
};

LinkPickerTitle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  versionState: PropTypes.string,
  typeTitle: PropTypes.string.isRequired,
  typeIcon: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onUnpublishedVersionedState: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  isMulti: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  isSorting: PropTypes.bool.isRequired,
  canCreate: PropTypes.bool.isRequired,
  readonly: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LinkPickerTitle;
