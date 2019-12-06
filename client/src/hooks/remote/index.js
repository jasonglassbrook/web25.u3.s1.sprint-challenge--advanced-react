/*******************************************************************************
  HOOKS/REMOTE
*******************************************************************************/

/// imports ///
import useRemoteData from './useRemoteData';
import handleAxiosResponse from './handleAxiosResponse';
import handleAxiosError from './handleAxiosError';
import parseAxiosResponse from './parseAxiosResponse';
import parseAxiosError from './parseAxiosError';

/// exports ///
export default {
  useRemoteData,
  handleAxiosResponse,
  handleAxiosError,
  parseAxiosResponse,
  parseAxiosError,
};

export * from './useRemoteData';
export * from './handleAxiosResponse';
export * from './handleAxiosError';
export * from './parseAxiosResponse';
export * from './parseAxiosError';
