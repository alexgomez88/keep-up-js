import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ItemsProps{
  description: String,
  icon: IconProp,
}

const Item = ({description, icon}: ItemsProps) => (
  <div className="item-menu">
    <FontAwesomeIcon icon={icon} className="full-icon"/>
    <header>{description}</header>
  </div>
);

export default Item;