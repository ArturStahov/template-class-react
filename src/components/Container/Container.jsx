import React from 'react';
import PropTypes from 'prop-types';
import style from './Container.module.css';

export default function SectionContainer({ title, children }) {
  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
}

SectionContainer.propTypes = {
  title: PropTypes.string,
};