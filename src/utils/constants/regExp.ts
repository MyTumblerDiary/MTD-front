export const EMAIL_REGEX = // eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// eslint-disable-next-line
export const ONLY_KO_EN_REGEXP = /[^a-z|A-Z|ㄱ-ㅎ|가-힣\s]/g;

export const EMAIL_MAX_LENGTH = 50;

export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_MAX_LENGTH = 15;

export const NAME_MIN_LENGTH = 2;

export const NAME_MAX_LENGTH = 15;

export const ONLY_NUM_REGEXP = /^[0-9]+$/;

export const ONLY_LOW_REGEXP = /^[a-z]+$/;

export const ONLY_UPPER_REGEXP = /^[A-Z]+$/;

export const ONLY_CHAR_REGEXP = // eslint-disable-next-line
  /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const NUM_LOW_REGEXP = /^[0-9|a-z]+$/;

export const NUM_UPPER_REGEXP = /^[0-9|A-Z]+$/;

export const NUM_CHAR_REGEXP = // eslint-disable-next-line
  /^[0-9|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const LOW_UPPER_REGEXP = /^[A-Z|a-z]+$/;

export const LOW_CHAR_REGEXP = // eslint-disable-next-line
  /^[a-z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const UPPER_CHAR_REGEXP = // eslint-disable-next-line
  /^[A-Z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const NUM_LOW_UPPER_REGEXP = /^[0-9|A-Z|a-z]+$/;

export const NUM_LOW_CHAR_REGEXP = // eslint-disable-next-line
  /^[0-9|a-z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const LOW_UPPER_CHAR_REGEXP = // eslint-disable-next-line
  /^[A-Z|a-z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;

export const NUM_LOW_UPPER_CHAR_REGEXP = // eslint-disable-next-line
  /^[0-9|A-Z|a-z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;
