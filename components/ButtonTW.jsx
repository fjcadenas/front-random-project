import cx from 'classnames';

const BUTTON_TEMPLATES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
};

export const Button = ({ label, template = 'primary', size = 'medium' }) => {
  const buttonClasses = cx('px-2 py-1 rounded-md', {
    'bg-green-400 text-white': template === BUTTON_TEMPLATES.PRIMARY,
    'bg-blue-400 text-white': template === BUTTON_TEMPLATES.SECONDARY,
    'bg-red-400 text-white': template === BUTTON_TEMPLATES.DANGER,
  });
  return <button className={buttonClasses}>{label}</button>;
};
