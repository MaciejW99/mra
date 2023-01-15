import { atom } from 'recoil';

export const defaultUser = {
  id: '',
  username: '',
  email: '',
  created_at: '',
  updated_at: '',
};

export const userAtom = atom({
  key: 'user',
  default: defaultUser,
});
