export const SIZE_RL_XLRG = 'xlrg';
export const SIZE_RL_LRG = 'lrg';
export const SIZE_RL_MED = 'med';
export const SIZE_RL_SM = 'sm';
export const SIZE_RL_XSM = 'xsm';
export const SIZE_RL_XXSM = 'xxsm';

export const ANI_RL_LOAD = 'load';
export const ANI_RL_CREATE = 'create';
export const ANI_RL_EDIT = 'edit';
export const ANI_RL_DEL = 'del';

export const RL_COLOR_WHITE = 'white';
export const RL_COLOR_LTGREY = 'ltgrey';

export const RL_SIZE = {
  // fc_col: '17rem',
  // fc_col_2: '10rem',
  xlrg: '22rem',
  lrg: '18rem',
  med: '14rem',
  sm: '10rem',
  xsm: '8rem',
  xxsm: '4rem',
};

export const RL_ANI = {
  load: 'spokes',
  create: 'bubbles',
  edit: 'bubbles',
  del: 'cylon',
};

export const RL_COLOR = {
  ltgrey: 'rgba(185, 185, 185, 1)',
  white: 'rgba(255, 255, 255, 1)',
};

export const CLASSNAME_CARD = {
  cardStatus: 'card-status',
};

export const retConfigStatType = (articleClass, ani, size, color) => {
  return {
    articleClass: articleClass,
    reactLoadingStyle: {
      type: RL_ANI[ani],
      color: RL_COLOR[color],
      height: RL_SIZE[size],
      width: RL_SIZE[size],
    },
  };
};

export const retStatCopy = () => {};
